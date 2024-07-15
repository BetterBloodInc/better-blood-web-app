import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { extractBiomarkersFromImage as extractBiomarkersFromImageViaOpenAI } from '~src/api/openai-api'
import { extractBiomarkersFromImage as extractBiomarkersFromImageViaVertexAI } from '~src/api/google/vertex-ai'
import { Button } from '~src/library/Button'
import { Row } from '~src/library/Row'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { Col } from '~src/library/Col'
import {
  useOpenAIApiKeyQuery,
  useSelectedLLMQuery,
} from '~src/api/settings-api'
import { useGoogleOAuthAccessTokenQuery } from '~src/api/google/google-oauth'
import './FileUploader.scss'

export function FileUploader({
  onReceiveMetrics,
}: {
  onReceiveMetrics(metrics: BiomarkerMeasurement[]): void
}) {
  const { data: selectedLLM } = useSelectedLLMQuery()
  const { data: googleOAuthAccessToken } = useGoogleOAuthAccessTokenQuery()
  const { data: apiToken } = useOpenAIApiKeyQuery()
  const [file, setFile] = useState<File | null>(null)
  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [dragActive, setDragActive] = useState<boolean>(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleFileRead = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) {
      toast.error('Please select a file to upload')
      return
    }

    setLoading(true)

    try {
      const base64String = await handleFileRead(file)
      let response
      if (selectedLLM === 'openai') {
        if (!apiToken) {
          toast.error(
            'Please add your OpenAI API token in the settings to use this feature.',
          )
          return
        }
        response = await extractBiomarkersFromImageViaOpenAI(
          apiToken,
          base64String,
        )
      } else {
        if (!googleOAuthAccessToken) {
          toast.error(
            'Please connect to Google OAuth in the settings to use this feature.',
          )
          return
        }
        response = await extractBiomarkersFromImageViaVertexAI(
          googleOAuthAccessToken,
          base64String,
        )
      }
      onReceiveMetrics(response.metrics)
      setResponse(response.context)
    } catch (error) {
      console.error('Error uploading file:', error)
      setResponse('Error processing file')
    } finally {
      setLoading(false)
    }
  }

  const handleDrag = (
    event: React.DragEvent<HTMLFormElement | HTMLDivElement>,
  ) => {
    event.preventDefault()
    event.stopPropagation()
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true)
    } else if (event.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setDragActive(false)
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0])
    }
  }

  return (
    <form onSubmit={handleSubmit} onDragEnter={handleDrag}>
      <Col gap="2rem">
        <Row gap="1rem" style={{ alignItems: 'center' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileUpload"
          />
          <div
            id="drop-area"
            className={`drop-area ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileUpload')?.click()}
          >
            {dragActive ? (
              <p>Drop the file here...</p>
            ) : (
              <p>Drag & drop an image here, or click to select one</p>
            )}
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded Preview"
                style={{
                  maxWidth: '100%',
                  maxHeight: '200px',
                  marginTop: '20px',
                }}
              />
            )}
          </div>
        </Row>
        <Row style={{ justifyContent: 'space-between' }}>
          {response ? <p>{response}</p> : <div></div>}
          <Button
            preIcon={faCloudUpload}
            type="submit"
            disabled={loading}
            text={loading ? 'Processing...' : 'Extract metrics'}
          />
        </Row>
      </Col>
    </form>
  )
}
