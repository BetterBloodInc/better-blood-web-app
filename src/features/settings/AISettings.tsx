import React, { useEffect, useState } from 'react'
import { Col } from '~src/library/Col'
import { Card } from '~src/library/Card'
import { PillSelect } from '~src/library/form/PillSelect'
import { Input } from '~src/library/form/Input'
import { Button } from '~src/library/Button'
import {
  faCheckCircle,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-regular-svg-icons'
import { saveOpenAIApiKey, saveSelectedLLM } from '~src/api/settings-api'
import {
  useOpenAIApiKeyQuery,
  useSelectedLLMQuery,
} from '~src/api/settings-api'
import { useGoogleOAuthAccessTokenQuery } from '~src/api/google/google-oauth'
import { redirectToGoogleAuth } from '~src/api/google/google-oauth'
import { saveGoogleOAuthAccessToken } from '~src/api/google/google-oauth'
import { toast } from 'react-hot-toast'
import { Row } from '~src/library/Row'
import './AISettings.scss'
import { IconButton } from '~src/library/IconButton'

export function AISettings() {
  const { data: apiToken } = useOpenAIApiKeyQuery()
  const { data: selectedLLM, refetch: refetchSelectedLLM } =
    useSelectedLLMQuery()
  const { data: googleOAuthAccessToken, refetch: refetchGoogleToken } =
    useGoogleOAuthAccessTokenQuery()
  const [openAIKey, setOpenAIKey] = useState<string | undefined>('')
  const [showToken, setShowToken] = useState(false)
  useEffect(() => {
    setOpenAIKey(apiToken ?? '')
  }, [apiToken])
  return (
    <Col gap="1rem">
      <Card>
        <Col style={{ gap: '0.5rem', alignItems: 'flex-start' }}>
          <Col>
            <h3>Primary AI Provider</h3>
            <p>
              You can choose which LLM is used to analyze your data, extract
              biomarkers from images, etc.
            </p>
          </Col>
          <Col>
            <PillSelect<'openai' | 'gemini'>
              label="LLM Provider"
              value={selectedLLM ? [selectedLLM] : []}
              onChange={(v) => {
                saveSelectedLLM(v[0])
                refetchSelectedLLM()
              }}
              options={[
                { label: 'OpenAI - GPT 4o', value: 'openai' },
                { label: 'Google - Gemini 1.5 Pro', value: 'gemini' },
              ]}
            />
          </Col>
        </Col>
      </Card>
      {selectedLLM === 'openai' && (
        <Card>
          <Col gap="0.5rem">
            <Col>
              <h3>OpenAI ChatGPT 4o</h3>
              <p>
                You can add your own OpenAI API key to use the chat and data
                import features.{' '}
                <a
                  href="https://platform.openai.com/account/api-keys"
                  target="_blank"
                >
                  How do I get my API key?
                </a>
              </p>
            </Col>
            <Col
              style={{ gap: '1rem', alignItems: 'flex-start', width: '100%' }}
            >
              <Row gap="1rem" style={{ alignItems: 'center', width: '100%' }}>
                <Input
                  label="OpenAI API token"
                  type={showToken ? 'text' : 'password'}
                  placeholder="OpenAI API token"
                  value={openAIKey}
                  onChangeValue={(e) => setOpenAIKey(e?.toString())}
                  className="api-token"
                />
                <IconButton
                  tooltip={showToken ? 'Hide token' : 'Show token'}
                  icon={showToken ? faEyeSlash : faEye}
                  onClick={() => {
                    setShowToken(!showToken)
                  }}
                />
              </Row>
              <Row gap="1rem">
                <Button
                  text="Save"
                  onClick={() => {
                    saveOpenAIApiKey(openAIKey ?? '')
                    toast.success('API key saved.')
                  }}
                />
              </Row>
            </Col>
          </Col>
        </Card>
      )}
      {selectedLLM === 'gemini' && (
        <Card>
          <Col gap="0.5rem">
            <Col>
              <h3>Google Gemini 1.5 Pro (private beta)</h3>
              <p>
                You can also connect to Google OAuth to use the chat and data
                import features via Google Gemini 1.5 Pro instead. Join the
                Discord to get access.
              </p>
            </Col>
            <Col style={{ gap: '1rem', alignItems: 'flex-start' }}>
              <Row gap="1rem">
                <Button
                  preIcon={faCheckCircle}
                  text={
                    googleOAuthAccessToken
                      ? 'Connected'
                      : 'Connect to Google OAuth'
                  }
                  onClick={() => {
                    redirectToGoogleAuth()
                  }}
                  disabled={!!googleOAuthAccessToken}
                />
                {googleOAuthAccessToken && (
                  <Button
                    text="Disconnect"
                    onClick={() => {
                      saveGoogleOAuthAccessToken('')
                      refetchGoogleToken()
                    }}
                  />
                )}
              </Row>
            </Col>
          </Col>
        </Card>
      )}
    </Col>
  )
}
