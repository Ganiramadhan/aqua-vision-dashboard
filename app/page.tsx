'use client'

import dynamic from 'next/dynamic'

const Popup = dynamic(() => import('@/components/Popup'), { ssr: false })

export default function Home() {
  return (
    <>
      <Popup />
      <main>
        {/* Konten utama */}
      </main>
    </>
  )
}
