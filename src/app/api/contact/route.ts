import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json()

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const fullName = `${firstName} ${lastName}`

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'quaidcodes@gmail.com', // 
      replyTo: email,
      subject: `${subject} — New Message from ${fullName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><a/p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send failed:', error)
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
  }
}
