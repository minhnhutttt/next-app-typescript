'use client'

import Script from 'next/script'
import { useRouter, useSearchParams } from 'next/navigation'

const A8SalesTracker = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams?.get('id') as string

  if (!id) {
    router.push(`/`)
  }

  return (
    id !== '0' && (
      <>
        <span id="a8sales"></span>
        <Script
          id="a8-script-3"
          src="https://statics.a8.net/a8sales/a8sales.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (window.a8sales) {
              window.a8sales({
                pid: 's00000026090001',
                order_number: id,
                currency: 'JPY',
                items: [
                  {
                    code: 'contact',
                    price: 1,
                    quantity: 1,
                  },
                ],
                total_price: 1,
              })
            }
          }}
        />
      </>
    )
  )
}

export default A8SalesTracker
