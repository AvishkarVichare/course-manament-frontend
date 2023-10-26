import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import courseContext from '../context/Course/courseContext'
import CourseCard from '../Components/CourseCard';
import { useNavigate } from 'react-router-dom';

const CoursePage = ({setShow, show}) => {

   
const {getCourses, courses} = useContext(courseContext);

const navigate = useNavigate()
    useEffect(()=>{

        

        getCourses()
        console.log(courses)

    }, [show])

  return (
    <section className='p-10 relative min-h-[100vh] bg-[#111827] text-[#fff]'>

    <h2 className='text-xl font-bold my-6'>
    All courses
    </h2>

    <div className='flex flex-wrap gap-4'>
    {
        courses.map((course, index)=>{
            return(
                <CourseCard course={course}/>
            )
        })
    }
    </div>

    <button onClick={()=>setShow(true)} className='fixed bottom-10 right-10 rounded-xl px-6 py-2 bg-[#2563eb] font-bold'>
        Add Course
    </button>

    </section>
  )
}

export default CoursePage