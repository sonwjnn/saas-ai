import { verifyAuth } from '@hono/auth-js'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import openai from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'
import { z } from 'zod'

const client = new openai.OpenAI()

const app = new Hono().post(
  '/',
  verifyAuth(),
  zValidator(
    'json',
    z.object({
      messages: z.array(
        z.object({
          role: z.string(),
          content: z.string(),
        })
      ),
    })
  ),
  async c => {
    const auth = c.get('authUser')

    if (!auth.token?.id) {
      return c.json({ error: 'Unauthorized' }, 401)
    }

    if (!client.apiKey) {
      return c.json({ error: 'OpenAI API key not found' }, 500)
    }

    const { messages } = c.req.valid('json')

    if (!messages) {
      return c.json({ error: 'Prompt is required' }, 400)
    }

    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as ChatCompletionMessageParam[],
    })

    console.log(response)

    const data = response.choices[0].message

    return c.json({ data }, 200)
  }
)

export default app
