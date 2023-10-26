import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({course}) => {

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/lectures/${course._id}`)} className=" w-[300px] rounded overflow-hidden shadow-lg bg-[#1f2937]">
  <img className="w-[300px] h-[300px]" src={course.image}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{course.name}</div>
    <p className="text-[#e9ecec] text-base">
      {course.description}
    </p>
  </div>

</div>
  )
}

export default CourseCard