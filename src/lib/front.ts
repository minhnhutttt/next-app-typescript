'use client'

export const frontOpen = () => {
  if (window.FrontChat) {
    window.FrontChat('show')
  }
}
