import {z} from "zod";

const userSchema = z.object({
    name: z.string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(200, {
        message: 'Name must be less that 200 characters long'
    }),
    email: z.string().email({
        message: 'Please enter a valid email'
    })
})