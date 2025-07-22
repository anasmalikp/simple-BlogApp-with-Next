import { dbConnect } from '@/lib/mongoos'
import { Task } from '@/models/Task'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  await dbConnect()
  const blogs = await Task.find().lean()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">📚 All Blogs</h1>
          <Link href="/new_blog">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition duration-200">
              ➕ Add New Blog
            </button>
          </Link>
        </div>

        {blogs.length === 0 ? (
          <p className="text-gray-600 text-lg">No blogs found. Be the first to create one!</p>
        ) : (
          <ul className="space-y-4">
            {blogs.map((blog: any, ind: number) => (
              <li key={blog._id}>
                <Link href={`/blog/${blog._id}`}>
                  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200 cursor-pointer">
                    <h2 className="text-xl font-semibold text-blue-700">{blog.blogName}</h2>
                    <p className="text-gray-600 text-sm mt-1">Read more...</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default page
