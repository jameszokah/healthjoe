import Image from 'next/image'
import React, { FC } from 'react'


interface FPost {
  title: string,
  post: string,
  author: string,
  authorImg: string,

}

const FeaturedPost: FC<FPost> = ({title, post, author, authorImg}) => {

  return (
    <div className='mt-[14rem] z-10 lg:ml-[18rem] lg:mt-[17rem] lg:mr-10'>
        <p className="text-2xl dark:text-white underline text-center lg:text-left font-bold">New Post</p>

        <div className="flex lg:flex-row flex-col">
          <Image alt='nurse' className='pt-10 rounded-lg w-[300] h-[300]' draggable width={400} height={400} src='https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
          <div className="flex flex-col lg:min-w-[60%] px-10 lg:pr-32">
            <div className="border-2 border-blue-700 dark:text-white mt-5 text-center font-bold">LATEST</div>
            <h3 className="text-md pt-4 lg:text-xl text-white font-bold">{title}</h3>
            <p className="dark:text-gray-300 text-black mt-4 ">{post}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center pt-3">
              <Image src={authorImg} width={50} height={50} alt={author} className="rounded-full w-[45px] h-[45px] lg:w-[50px] lg:h-[50px]" />
              <p className='dark:text-white pl-3'>{author}</p>
              </div>
              <button className="text-blue-600 rounded-lg border-[1.8px] border-blue-600 px-4 py-1">Read More..</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default FeaturedPost