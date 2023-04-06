import { z } from 'zod'
import { UserSchema } from '../schema/User'

export type User = z.infer<typeof UserSchema>
