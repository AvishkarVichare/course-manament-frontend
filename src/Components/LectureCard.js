import React from 'react'

const LectureCard = ({lecture}) => {
console.log(lecture)

  return (
    <div className="  rounded overflow-hidden shadow-lg bg-[#1f2937]">
    <div className="px-6 py-4">
      <div className=" text-lg mb-2">
        <span className='mr-3 font-bold'>
            Name of the instructor:
        </span>
        {
            lecture?.instructor.name
        }
      </div>
      <p className="text-[#e9ecec] text-base">
        <span className='font-bold text-gray-50'>Date and time</span> {new Date(lecture?.date).toUTCString()}
      </p>
    </div>
  
  </div>
  )
}

export default LectureCard