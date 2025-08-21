import { z } from 'zod'
 
const loginSchema = z.object({
  email: z.string({
    error: "Invalid Email"
  }),
  password: z.string({
    error:"error"
  })
})

export default loginSchema