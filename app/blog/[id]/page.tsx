import { dbConnect } from '@/lib/mongoos'
import { Task } from '@/models/Task'
import React from 'react'

interface PageProps {
  params: { id: string }
}

const page = async ({ params }: PageProps) => {
  await dbConnect()
  const blog = await Task.findById(params.id).lean()

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.blogName}</h1>
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{blog.blogDesc}</p>
      </div>
    </div>
  )
}

export default page
