import React, { useContext, useEffect, useState } from 'react'
import courseContext from '../context/Course/courseContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddLectureModal = ({setShowAddLecture, currCourseId}) => {
    
    const {instructors, getInstructorsList, addLecture} = useContext(courseContext);
    const [selectedInstructor, setSelectedInstructor] = useState("");
    
    const [date, setDate] = useState(null);

    const handleOnChange = (e)=>{
        setDate(e.target.value);
        // console.log(date)
    }

    const handleSelectChange = (e)=>{
        const selectedId = e.target.value;
        setSelectedInstructor(selectedId);
        // console.log(selectedInstructor);
        // console.log(currCourseId)
    }

    const handleSubmit = (e)=>{
    
        e.preventDefault();
        addLecture({date, instructorId:selectedInstructor, courseId:currCourseId.current})
        setShowAddLecture(false)
        
      
    }

    useEffect(()=>{
        getInstructorsList();
    },[ ])

    return (
        <div className='flex justify-center items-center w-full  h-full before:bg-gray-500 before:w-full before:h-full before:fixed before:opacity-[.3]  z-[2] fixed top-0 '>

    //form
            <form onSubmit={handleSubmit} className=' text-[15px] md:text-[20px] lg:text-[22px] w-[320px] md:w-[500px] lg:w-[600px] rounded-xl relative z-[5] bg-[#171721] p-20 pt-8 flex flex-col items-center gap-4'>
                <div className='text-[#d5defb] font-bold text-[1.5rem] md:text-[2rem]  lg:text-[2.3rem] mb-6'>
                    Add Lecture
                </div>

                <div className=''>
                    <select value={selectedInstructor} onChange={handleSelectChange}>
                        <option value="">Select an Instructor</option>
                        {instructors?.map((instructor) => (
                            <option key={instructor._id} value={instructor._id}>
                                {instructor.name}
                            </option>
                        ))}
                    </select>
                </div>

                <input type='datetime-local' className='px-4 py-2 rounded-xl w-[250px] md:w-[300px] lg:w-[400px]' onChange={handleOnChange} name='date' />

                {/* submit button  */}
                <button className='text-semibold bg-[#d5defb] text-[#171721] w-fit px-4 py-2 rounded-xl'>
                    Add
                </button>

                {/* close modal button  */}
                <button onClick={() => setShowAddLecture(false)} className='absolute top-2 text-sm right-2 border-2 border-white p-3 rounded-xl text-white'>
                    Close
                </button>
            </form>
        </div>
    )
}

export default AddLectureModal