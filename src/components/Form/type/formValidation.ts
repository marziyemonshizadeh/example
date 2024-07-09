import { z } from "zod";

export const formSchema = z.object({
    firstName: z.string().min(1, { message: " فیلد اجباری می باشد" }),
    lastName: z.string().min(1, { message: " فیلد اجباری می باشد" }),
    age: z.number(),
})
export type FormSchemaType = z.infer<typeof formSchema>;