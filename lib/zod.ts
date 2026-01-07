/* import { object, string } from "zod";
export const signInSchema = object({
    email: string({required_error: "Email is required"}).min(2,{message: "Email is too short"}).email("Email is not valid"),
    password: string().min(8),
});
 */
import * as z from "zod";
export const signInSchema = z.object({
    email: z.string()
    .min(1,{message: "Email is required"})
    .min(2,{message: "Email is too short"})
    .email("Email is not valid"),
    password: z.string()
    .min(1,{message: "Password is required"})
    .min(2,{message: "Password is too short"}),
});