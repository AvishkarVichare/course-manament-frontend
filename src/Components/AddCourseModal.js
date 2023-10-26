import React, { useContext, useState } from 'react'
import courseContext from '../context/Course/courseContext';
import toast from 'react-hot-toast';

const AddCourseModal = ({setShow}) => {

    const [data, setData] = useState({name:"", level:"", description:"", image:""});

    const {addCourse} = useContext(courseContext)

    const handleOnChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e)=>{
        try{
            e.preventDefault();
        addCourse(data);
        setShow(false)
        }catch(err){
            toast.error(err)
        }

    }

  return (
    <div className='flex justify-center items-center w-full  h-full before:bg-gray-500 before:w-full before:h-full before:fixed before:opacity-[.3]  z-[2] fixed top-0 '>
        
    //form
    <form onSubmit={handleSubmit} className=' text-[15px] md:text-[20px] lg:text-[22px] w-[320px] md:w-[500px] lg:w-[600px] rounded-xl relative z-[5] bg-[#171721] p-20 pt-8 flex flex-col items-center gap-4'>
        <div className='text-[#d5defb] font-bold text-[1.5rem] md:text-[2rem]  lg:text-[2.3rem] mb-6'>
           Add Course
        </div>
        <input className='px-4 py-2 rounded-xl w-[250px] md:w-[300px] lg:w-[400px]' onChange={handleOnChange} name='name' placeholder='Enter a Name' />
        <input className='px-4 py-2 rounded-xl w-[250px] md:w-[300px] lg:w-[400px]' onChange={handleOnChange} name='level' placeholder='Enter a Level: eg. expert,etc' />
        <input className='px-4 py-2 rounded-xl w-[250px] md:w-[300px] lg:w-[400px]' onChange={handleOnChange} name='description' placeholder='Enter a description' />
        <input className='px-4 py-2 rounded-xl w-[250px] md:w-[300px] lg:w-[400px]' onChange={handleOnChange} name='image' placeholder='Enter an image link' />
       
    {/* submit button  */}
     <button className='text-semibold bg-[#d5defb] text-[#171721] w-fit px-4 py-2 rounded-xl'>
            Create
        </button>

    {/* close modal button  */}
    <button onClick={()=>setShow(false)} className='absolute top-2 text-sm right-2 border-2 border-white p-3 rounded-xl text-white'>
        Close
    </button>
    </form>
</div>
  )
}

export default AddCourseModal