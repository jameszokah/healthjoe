import Image from 'next/image'
import React from 'react'

const FeaturedPost = () => {
  return (
    <div className='absolute left-[20%] -bottom-[60%] lg:-bottom-[28%]'>
        <p className="text-2xl text-white underline font-bold">New Post</p>

        <div className="flex lg:flex-row flex-col">
          <Image alt='nurse' className='pt-10 rounded-lg' draggable width={400} height={400} src='https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
          <div className="flex flex-col lg:min-w-[60%] px-10">
            <h3 className="text-xl text-white font-bold">Lorem ipsum dolor, Soluta animi vel dolorem deserunt quidem laboriosam quos quod fuga.</h3>
          </div>
        </div>

    </div>
  )
}

export default FeaturedPost