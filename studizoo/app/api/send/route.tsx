"use server"
import { Resend } from "resend"
import { EmailTemplate } from '@/components/email-template'


interface State {
    error : string | null
    success : boolean
}

export const sendEmail = async (prevState : State,  formData: FormData) => {
const titre = formData.get('titre') as string
const description = formData.get('description') as string
const email = formData.get('email') as string
try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Accusé de réception de votre message',
        react: EmailTemplate ({titre, description, email})
    })
    return { error: null, success: true }
}catch (error) {
    console.log(error)
    return { error: (error as Error).message, success: false }
}
}
