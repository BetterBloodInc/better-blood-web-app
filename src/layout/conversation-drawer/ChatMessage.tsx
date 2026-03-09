import React from 'react'
import Markdown from 'react-markdown'
import { Row } from '~src/library/Row'
import { Overline } from '~src/library/text/Overline'
import './ChatMessage.scss'

export function ChatMessage({
  prompt,
  response,
  totalTokens,
}: {
  prompt: string
  response: string
  totalTokens: number
}) {
  return (
    <div className="ChatMessage">
      <div className="ChatMessage__prompt">
        <Overline>You</Overline>
        <p>{prompt}</p>
      </div>
      <div className="ChatMessage__response">
        <Row style={{ justifyContent: 'space-between' }}>
          <Overline>ChatGPT</Overline>
          <Overline>{totalTokens} tokens used</Overline>
        </Row>
        <Markdown>{response}</Markdown>
      </div>
    </div>
  )
}
