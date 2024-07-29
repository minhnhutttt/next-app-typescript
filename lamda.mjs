import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
const ses = new SESClient({ region: "ap-northeast-1" })

export const handler = async(event) => {
  const subject = "お申込みがありました。"
  const fromMail = "info@ai-boost.biz"
  const senderName = "AIリスキリング"

  const signature = `
  ----------------------------------------------
  株式会社MARKK
  会社ウェブサイト: https://markk.jp/
  会社所在地: 〒104-0061 東京都中央区銀座1-12-4 N&E BLD. 7F
  お問い合わせ: https://markk.jp/contact
  ----------------------------------------------
  `

  const body = `
  [会社名] : ${event.company}
  [ご氏名] : ${event.name}
  [メールアドレス] : ${event.email}
  [電話番号] : ${event.tel ? `${event.tel}` : "[未入力]"}
  [お問い合わせ項目] : ${event.type}
  [ご希望の日時やご相談・お問い合わせの概要] : ${event.body ? `${event.body}` : "[未入力]"}

  ${signature}`

  const command = new SendEmailCommand({
    Source: `${senderName} <${fromMail}>`,
    Destination: {
      ToAddresses: [fromMail],
    },
    Message: {
      Subject: {
        Data: subject, 
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: body,
          Charset: "UTF-8",
        },
      },
    },
    ReplyToAddresses: [
      event.email,
    ],
    ReturnPath: fromMail,
  })

  const confirmationSubject = "お申込みありがとうございます"
  const confirmationBody = `
  ${event.name} 様

  この度はお問い合わせいただきありがとうございます。
  担当者より追ってご連絡いたします。


  ※このメールは自動返信メールです。
  ※このメールに心当たりのない場合や、ご不明な点がございましたら、${fromMail}までご連絡ください。
  ${signature}`

  const confirmationMailCommand = new SendEmailCommand({
    Source: `${senderName} <${fromMail}>`,
    Destination: {
      ToAddresses: [event.email],
    },
    Message: {
      Subject: {
        Data: confirmationSubject, 
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: confirmationBody,
          Charset: "UTF-8",
        },
      },
    },
  })

  try {
    await ses.send(command)
    await ses.send(confirmationMailCommand)

    return  {
      statusCode: 200,
      body: JSON.stringify('success'), 
    }
  } catch (error) {
    return  {
      statusCode: 500,
      body: JSON.stringify('Internal Server Error'),
    }
  }
};