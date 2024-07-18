import { useQuery } from '@tanstack/react-query'
import { CLIENT_ID, SCOPE } from './constants'

export function redirectToGoogleAuth() {
  const redirectUri = encodeURIComponent(window.location.origin + '/settings')
  const responseType = 'token'
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${SCOPE}&response_type=${responseType}`
  window.location.href = authUrl
}

export function handleRedirectCallback() {
  const hash = window.location.hash
  const params = new URLSearchParams(hash.substring(1)) // Remove the leading '#'
  const accessToken = params.get('access_token')

  if (accessToken) {
    saveGoogleOAuthAccessToken(accessToken)
    return accessToken
  } else {
    return null
  }
}

export const useGoogleOAuthAccessTokenQuery = () =>
  useQuery({
    queryKey: ['useGoogleOAuthAccessTokenQuery'],
    queryFn: () => {
      try {
        if (localStorage) {
          return localStorage.getItem('user.google.oauth.accessToken')
        }
      } catch (e) {
        console.error(e)
      }
    },
  })

export const saveGoogleOAuthAccessToken = (apiKey: string | null) => {
  try {
    if (localStorage) {
      if (!apiKey) {
        localStorage.removeItem('user.google.oauth.accessToken')
      } else {
        localStorage.setItem('user.google.oauth.accessToken', apiKey)
      }
    }
  } catch (e) {
    console.error(e)
  }
}
