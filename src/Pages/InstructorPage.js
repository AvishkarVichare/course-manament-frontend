import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScheduledCards from '../Components/ScheduledCards'
import toast from 'react-hot-toast'

const InstructorPage = () => {
    
    const headers = {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('auth-token')
      }
    const navigate = useNavigate()
    const [scheduledLectures, setScheduledLectures] = useState([])
    const getScheduledLectures = async () => {
      try{
        console.log('runnig')
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/i/getlectures`,{
            headers
        })
        console.log(res)
        setScheduledLectures(res.data.data)
        console.log(scheduledLectures)
      }catch(err){
        toast.error(err.message)
      }
    }

    useEffect(() => {
        if (!localStorage.getItem('auth-token')) {
            // navigate('/instructor/login');
        }
        getScheduledLectures()
    },[])

    return (
        <section className='p-10 relative min-h-[100vh] bg-[#111827] text-[#fff]'>

            <h2 className='text-xl font-bold my-6'>

                Your scheduled lectures are below
            </h2>

            <div className='flex flex-col gap-2'>
                {
                    scheduledLectures?.map(lecture=>{
                        return(
                            <ScheduledCards lecture={lecture} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default InstructorPage