import type { Config } from 'drizzle-kit'

import { env } from '@/env'

export default {
  schema: './src/drizzle/schema/index.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config