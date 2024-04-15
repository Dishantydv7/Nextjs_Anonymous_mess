import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2 , "username must be atleast 2 characters long")
    .max(2 , "username must not be more than  20 characters ")
    .regex( /^[a-zA-Z0-9_]{3,20}$/ , "Username should not contain any special character")

    export const signUpSchema = z.object({
        username : usernameValidation  , 
        email : z.string().email({message: "Please provide an valid email"}) , 
        password : z.string().min(6 , {message: "Password must be atleast 6 characters"})

    })