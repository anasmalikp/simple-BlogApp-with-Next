'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
  const [blog, setBlog] = useState({ blogName: '', blogDesc: '' })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch('/api/new_posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    })

    router.push('/blog')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Add a New Blog</h2>

        <div>
          <label className="block mb-2 text-lg font-medium text-gray-700">Blog Title</label>
          <input
            type="text"
            required
            value={blog.blogName}
            onChange={(e) => setBlog({ ...blog, blogName: e.target.value })}
            className="w-full p-3 text-lg border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-medium text-gray-700">Blog Description</label>
          <textarea
            required
            rows={5}
            value={blog.blogDesc}
            onChange={(e) => setBlog({ ...blog, blogDesc: e.target.value })}
            className="w-full p-3 text-lg border text-gray-800 border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition"
        >
          Submit Blog
        </button>
      </form>
    </div>
  )
}

export default Page
