import React from 'react'

const PostList = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
        <div className='col-span-1 w-full'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <h2 className='text-lg font-bold text-gray-900'>                
                        Post 1
                    </h2>
                    <p className='text-gray-700 text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatibus, quisquam.
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-sm'>
                        <p className='text-gray-900 leading-none'>
                            Posted by
                        </p>
                        <p className='text-gray-900 leading-none'>
                            on
                        </p>
                    </div>
                    <div className='text-sm'>
                        <p className='text-gray-900 leading-none'>
                            Author
                        </p>
                        <p className='text-gray-900 leading-none'>
                            Date
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-1 f</h2>'></div>
    </div>
  )
}

export default PostList