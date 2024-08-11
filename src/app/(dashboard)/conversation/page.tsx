'use client'

import { Heading } from '@/components/heading'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useGenerateChat } from '@/features/conversations/api/use-generate-chat'
import { ConversationSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { MessageSquare } from 'lucide-react'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const ConversationPage = () => {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
  const mutation = useGenerateChat()

  const form = useForm<z.infer<typeof ConversationSchema>>({
    resolver: zodResolver(ConversationSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const onSubmit = (values: z.infer<typeof ConversationSchema>) => {
    const userMessage: ChatCompletionMessageParam = {
      role: 'user',
      content: values.prompt,
    }

    mutation.mutate(
      {
        messages: [...messages, userMessage] as {
          role: string
          content: string
        }[],
      },
      {
        onSuccess: ({ data }) => {
          setMessages(current => [...current, userMessage, data])
        },
      }
    )
  }

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        // disabled={isPending}
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="col-span-12 w-full lg:col-span-2">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div key={message.content as string}>
                {message.content as string}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationPage
