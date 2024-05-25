import {z} from "zod";

const plans = ['free', 'basic', 'medium', 'premium'] as const;

export type Plans = (typeof plans)[number];

export const mappedPlans: {[key in Plans]: string} = {
    basic: "Basic",
    free: "Free",
    medium: "Medium",
    premium: "Premium"
}

export const userSchema = z.object({
    name: z.string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(200, {
        message: 'Name must be max 200 characters long'
    }),
    email: z.string().email({
        message: 'Please enter a valid email'
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 3 characters long'
    }).max(50, {
        message: 'Password must be max 50 characters long'}),
    confirmPassword: z.string().min(8, {
        message: 'Password must be at least 3 characters long'
    }).max(50, {
        message: 'Password must be max 50 characters long'}),
    weight: z.string().refine((weight) => !isNaN(parseFloat(weight)), {
        message: 'Weight must be a number'
    }),
    dateOfBirth: z.string().refine(dob => new Date(dob).toString() !== "Invalid Date", {
        message: "Please enter a valid date of birth"
    }),
    plan: z.enum(plans, {
        errorMap: () => ({message: 'Please select a plan'})
    })
}).refine(data => data.password === data.confirmPassword, {
    message: 'Password must match', 
    path: ['confirmPassword']
});