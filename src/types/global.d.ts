export {}

declare global {
  interface Window {
    a8sales: (config: {
      pid: string
      order_number: string
      currency: string
      items: {
        code: string
        price: number
        quantity: number
      }[]
      total_price: number
    }) => void
  }
}
