'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    $crisp: unknown[]
    CRISP_WEBSITE_ID: string
  }
}

export function CrispChat() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$crisp = []
      window.CRISP_WEBSITE_ID = '13bb147b-9e39-4e20-94d9-4d17e82b6ae2'

      const script = document.createElement('script')
      script.src = 'https://client.crisp.chat/l.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return null
}
