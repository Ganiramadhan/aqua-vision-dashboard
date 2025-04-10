'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Popup() {
  const [show, setShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,30,0.85)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <div
        style={{
          background: '#0f172a',
          color: '#f1f5f9',
          padding: 40,
          borderRadius: 16,
          maxWidth: 900,
          width: '90%',
          display: 'flex',
          gap: 40,
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
      >
        {/* TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>
            Aqua Vision
          </h1>
          <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#0ea5e9', marginBottom: 20 }}>
            Dashboard
          </h1>
          <p style={{ fontSize: 16 }}>
            Dive into a smarter way of monitoring the ocean with real-time data and interactive tools.
          </p>

          <h3 style={{ marginTop: 30, fontSize: 18, color: '#7dd3fc' }}>Features:</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 10 }}>
            <li style={{ marginBottom: 8 }}>
              <span style={{ color: '#38bdf8' }}>✔</span> Ocean monitoring dashboard
            </li>
            <li style={{ marginBottom: 8 }}>
              <span style={{ color: '#38bdf8' }}>✔</span> Interactive fish location map
            </li>
            <li style={{ marginBottom: 8 }}>
              <span style={{ color: '#38bdf8' }}>✔</span> User login & registration
            </li>
            <li style={{ marginBottom: 8 }}>
              <span style={{ color: '#38bdf8' }}>✔</span> Backend API integration
            </li>
          </ul>

          <button
            onClick={() => router.push('/products')}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#0284c7'
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(14,165,233,0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#0ea5e9'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(14,165,233,0.3)'
            }}
            style={{
              marginTop: 20,
              backgroundColor: '#0ea5e9',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(14,165,233,0.3)',
            }}
          >
            Explore Products
          </button>
        </div>

        {/* IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src="https://img.freepik.com/free-vector/underwater-scene-with-fishes-coral-reef_1308-33330.jpg"
            alt="Ocean Theme"
            style={{ maxWidth: '100%', borderRadius: 10 }}
          />
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShow(false)}
          style={{
            position: 'absolute',
            top: 10,
            right: 15,
            background: 'none',
            border: 'none',
            fontSize: 28,
            fontWeight: 'bold',
            color: '#7dd3fc',
            cursor: 'pointer',
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}
