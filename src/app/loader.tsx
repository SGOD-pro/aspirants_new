"use client"
import React from 'react'
import LoaderSVG from '@/components/layouts/Loader'
function Loader() {
  return (
    <div className="fixed inset-0 left-0 h-screen w-screen flex items-center justify-center bg-slate-200">
        <LoaderSVG/>
    </div>
  )
}

export default Loader