import {
  faArrowAltCircleUp,
  faComments,
} from '@fortawesome/free-regular-svg-icons'
import React, { useEffect, useState } from 'react'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { useChatListQuery } from '~src/api/chat-api'
import { Message } from '~src/db/chat-db'
import { IconButton } from '~src/library/IconButton'
import { Input } from '~src/library/form/Input'
import { Row } from '~src/library/Row'
import { Col } from '~src/library/Col'
import { useToggleConversationDrawer } from './slice'
import { faGear, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '~src/library/Button'
import { sendChatToServer } from '~src/api/openai-api'
import toast from 'react-hot-toast'
import { generateSystemMessage } from '~src/utils/generate-system-message'
import { ChatMessage } from './ChatMessage'
import { saveOpenAIApiKey, useOpenAIApiKeyQuery } from '~src/api/settings-api'
import './ConversationDrawer.scss'

export const ConversationDrawer = () => {
  const toggleConversationDrawer = useToggleConversationDrawer()
  const { data: profile, isFetching } = useActiveProfileQuery()
  const { data: apiToken } = useOpenAIApiKeyQuery()
  const { data: chatList, refetch: refetchChatList } = useChatListQuery()
  const [showSettings, setShowSettings] = useState(false)
  const [openAIKey, setOpenAIKey] = useState<string | undefined>('')
  const [message, setMessage] = useState<string | undefined>('')
  const [isPending, setIsPending] = useState(false)
  const onSendMessage = async () => {
    if (!profile) {
      toast.error('Please add your profile information.')
      return
    }
    if (!message) {
      toast.error('Please enter a message.')
      return
    }
    if (!apiToken) {
      toast.error('Please add your OpenAI API token in the settings.')
      return
    }
    if (isPending) {
      return
    }
    setIsPending(true)
    try {
      const response = await sendChatToServer({
        apiKey: apiToken,
        system: generateSystemMessage(profile),
        prompt: message,
        previousMessages: chatList?.map((chat) => ({
          prompt: chat.prompt,
          response: chat.response,
        })),
      })
      new Message(message, response.message, response.totalTokens).save()
      refetchChatList()
      setMessage('')
    } catch (e) {
      console.error(e)
      toast.error('Failed to send message. Please try again later.')
    }
    setIsPending(false)
  }
  useEffect(() => {
    setOpenAIKey(apiToken ?? '')
  }, [apiToken])
  return (
    <div className="ConversationDrawer">
      <Col className="ConversationDrawer__header">
        <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton
            tooltip="chat settings"
            icon={faGear}
            onClick={() => setShowSettings(!showSettings)}
          />
          <h1>{showSettings ? 'AI Chat Settings' : 'AI Chat'}</h1>
          <IconButton
            id="close-conversation-drawer"
            tooltip="close"
            icon={faTimes}
            onClick={() =>
              showSettings
                ? setShowSettings(false)
                : toggleConversationDrawer(false)
            }
          />
        </Row>
      </Col>
      {showSettings && (
        <Col gap="1rem" style={{ padding: '1rem' }}>
          <Col>
            <p>These settings are only saved to your browser.</p>
            <Input
              label="OpenAI API token"
              type="text"
              placeholder="OpenAI API token"
              value={openAIKey}
              onChangeValue={(e) => setOpenAIKey(e?.toString())}
            />
          </Col>
          <Button
            text="Save"
            onClick={() => {
              saveOpenAIApiKey(openAIKey ?? '')
              toast.success('API key saved.')
            }}
          />
          <Button
            text="Clear chat history"
            onClick={async () => {
              await Message.clearAll()
              await refetchChatList()
              toast.success('Chat history cleared.')
            }}
          />
        </Col>
      )}
      {!showSettings && (
        <>
          {!!chatList?.length && (
            <ul>
              {chatList?.map((chat) => {
                return (
                  <li key={chat.id}>
                    <ChatMessage {...chat} />
                  </li>
                )
              })}
            </ul>
          )}
          {!chatList?.length && (
            <Col className="EmptyState" gap="1rem" style={{ padding: '1rem' }}>
              <FontAwesomeIcon icon={faComments} size="4x" />
              <p>
                {apiToken
                  ? 'Ask ChatGPT anything about your biomarkers.'
                  : 'You can add your OpenAI API token to ask questions about your biomarkers.'}
              </p>
            </Col>
          )}
          <Row gap="0.5rem" className="ConversationDrawer__input">
            <Input
              type="text"
              placeholder="Ask something about your biomarkers..."
              value={message}
              onChangeValue={(e) => setMessage(e?.toString())}
              disabled={isPending}
            />
            <IconButton
              tooltip="send message"
              icon={isPending ? faSpinner : faArrowAltCircleUp}
              isLoading={isPending}
              onClick={() => {
                onSendMessage()
              }}
            />
          </Row>
        </>
      )}
    </div>
  )
}
