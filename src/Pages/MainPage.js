import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

const navigate = useNavigate()

  return (
    <section className='p-10 relative min-h-[100vh] bg-[#111827] text-[#fff]'>
   
    <div className='flex  flex-wrap gap-4 w-full h-full justify-center items-center'>


        <div onClick={()=>navigate('/courses')}  className='flex justify-center items-center w-[300px] h-[300px] bg-[#1f2937]'>
            Admin Panel
        </div>
        <div onClick={()=>navigate('/instructor')}  className='flex justify-center items-center w-[300px] h-[300px] bg-[#1f2937]'>
            Instructor Panel
        </div>
    </div>

   </section>
  )
}

export default MainPage