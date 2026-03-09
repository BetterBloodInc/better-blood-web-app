import { useMutation } from '@tanstack/react-query'
import { Message } from '~src/db/chat-db'
import { saveOpenAIApiKey, saveSelectedLLM } from './settings-api'
import { saveGoogleOAuthAccessToken } from './google/google-oauth'
import { Profile } from '~src/db/profile-db'

export const useDeleteAllDataMutation = () => {
  return useMutation({
    mutationKey: ['useDeleteAllDataMutation'],
    mutationFn: async () => {
      try {
        if (localStorage) {
          localStorage.removeItem('userData')
        }
        await Message.clearAll()
        await Profile.clearAll()
        saveGoogleOAuthAccessToken('')
        saveOpenAIApiKey('')
        saveSelectedLLM('openai')
      } catch (e) {
        console.error(e)
      }
    },
  })
}
