import { client } from '@/lib/hono'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { InferRequestType, InferResponseType } from 'hono'
import { toast } from 'sonner'

type ResponseType = InferResponseType<
  (typeof client.api.conversations)['$post'],
  200
>
type RequestType = InferRequestType<
  (typeof client.api.conversations)['$post']
>['json']

export const useGenerateChat = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async json => {
      const response = await client.api.conversations.$post({ json })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return await response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['conversations'] })
    },
    onError: () => {
      toast.error('Failed to generate')
    },
  })

  return mutation
}
