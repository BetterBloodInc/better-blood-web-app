import { useQuery } from '@tanstack/react-query'
import { Message } from '../db/chat-db'

export const useChatListQuery = () =>
  useQuery({
    queryKey: ['useChatListQuery'],
    queryFn: async () => Message.fetchAll(),
  })
