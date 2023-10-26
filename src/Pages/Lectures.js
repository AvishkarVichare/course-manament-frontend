import React, { useContext, useEffect, useId } from 'react'
import courseContext from '../context/Course/courseContext'
import LectureCard from '../Components/LectureCard';
import {  useParams } from 'react-router-dom';

const Lectures = ({currCourseId, setShowAddLecture, showAddLecture}) => {

  const {courseId} = useParams();

  currCourseId.current = courseId;

  const {getLecturesOfCourse, lectures} = useContext(courseContext);

  useEffect(()=>{
    getLecturesOfCourse(courseId);
    console.log("runnig")
  }, [])

  return (
    <section className='p-10 relative min-h-[100vh] bg-[#111827] text-[#fff]'>
        <h1 className='text-xl font-bold my-6'>
            All lectures of this Course
        </h1>

      <div className='flex flex-col gap-2'>
        {
          lectures?.map((lecture, index)=>{
            return(
              <LectureCard key={index} lecture={lecture}/>
            )
          })
        }
      </div>

      <button onClick={()=>setShowAddLecture(true)} className='fixed bottom-10 right-10 rounded-xl px-6 py-2 bg-[#2563eb] font-bold'>
        Add Lecture
    </button>

    </section>
  )
}

export default Lectures