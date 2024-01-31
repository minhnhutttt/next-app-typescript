import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { nameStore, name, phone,email,prefectures, address, contactMethod, contactTime, content } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOption = {
            from: process.env.EMAIL,
            to: process.env.EMAIL_INFO,
            subject: `Infomation From ${email}`,
            html: `
            <li> 店舗名: ${nameStore}</li>
            <li> 担当者名: ${name}</li>
            <li> 電話番号: ${phone}</li>
            <li> メールアドレス: ${email}</li>
            <li> 都道府県: ${prefectures}</li>
            <li> 住所: ${address}</li>
            <li> 連絡方法（メールor電話）: ${contactMethod}</li>
            <li> 希望連絡時間: ${contactTime}</li>
            <li> お問い合わせ内容: ${content}</li>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}