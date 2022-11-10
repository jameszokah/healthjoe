import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import FeaturedPost from '../components/featuredPost'
import Header from '../components/header'
import NavLinks from '../components/nav'


const Home: NextPage = () => {

  
  return (
    <div className="bg-white dark:bg-[#070827] w-[100vw]">
      <Head>
        <title>Health Joe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="fixed border-[1.5px] border-blue-900 w-[80vw] bottom-3 px-7 py-2 rounded-full">
      <NavLinks mobile />
      </div>
      <section className="h-[100vh] relative flex flex-col">
        <div className="w-[15.5rem] lg:w-[25.5rem] overflow-hidden h-[15.5rem] lg:h-[25.5rem] absolute -right-[7%] -top-[12%] bg-gradient-to-tr from-[#176ff494] to-[#ef0ef377] bg-opacity-54 rounded-full filter blur-xl"></div>
        <div className="flex justify-center items-center pt-10 relative flex-col">
          <h1 className='text-center dark:text-white text-5xl lg:text-7xl font-black pt-11'>TIME AND HEALTH</h1>
          <p className="text-base lg:text-xl pt-9 w-[50%] lg:w-[45%] font-semibold dark:text-transparent z-10 dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#1770F4] dark:to-[#F8C3F9] ">Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together</p>
        </div>
          <Image src={'/images/doctor-hero.png'} alt='doctor' width={460} height={460}  className='w-300 h-300 hidden lg:block absolute top-[-10%] right-[8%]'/>
        <div className="w-[15.5rem] lg:w-[25.5rem] h-[15.5rem] lg:h-[25.5rem] absolute -left-5 -bottom-6 bg-gradient-to-tr from-[#8917f45b] to-[#ef0ef367] bg-opacity-50 rounded-full filter blur-xl"></div>
        <div className="btn-search z-30 left-[12%] bottom-[-12%] relative w-[60%]">
          <input type="search" name="" className='px-5 placeholder:text-white py-3 w-[90%] lg:w-[70%] rounded-full bg-gradient-to-r absolute border-2 outline-none text-white border-solid border-[#ef0ef367] from-black to-[#4e4e4ed7]' placeholder='Search post..' />
          <button className="absolute right-[0] lg:right-[23%] rounded-full bg-opacity-100 px-6 lg:px-12 py-[0.96rem] text-white bg-gradient-to-br from-blue-600 to-purple-600 opacity-100">SEARCH</button>
        </div>
        <FeaturedPost 
        title='Lorem ipsum dolor, Soluta animi vel dolorem deserunt quidem .' 
        post={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nisi totam praesentium tenetur dolores fuga nostrum, officiis perspiciatis expedita quam blanditiis ratione, iste eum consequuntur laboriosam corrupti laborum consequatur eos id reiciendis!'}
        author='Joshua'
        authorImg='https://media-exp2.licdn.com/dms/image/C4D03AQGwz5Nc-_q43A/profile-displayphoto-shrink_200_200/0/1620528867834?e=2147483647&v=beta&t=3k9YFnbFeHZswMFXCz-dqfUkUniGUbuqG51IkYOnnMM'
        />

      </section>
      <section className="h-[100vh]"></section>
      <section className="h-[100vh]"></section>
           
          
    </div>
  )
}

export default Home
                                                                                                                                                                                                                                                                                                                                                                                                                                              