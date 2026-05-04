import Navbar from '@/app/_components/Navbar'
import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar></Navbar>
          <main className="mt-12">
            {children}
          </main>
    
    </>
  )
}
