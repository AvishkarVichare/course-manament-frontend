import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScheduledCards from '../Components/ScheduledCards'

const InstructorPage = () => {
    
    const headers = {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('auth-token')
      }
    const navigate = useNavigate()
    const [scheduledLectures, setScheduledLectures] = useState([])
    const getScheduledLectures = async () => {
        console.log('runnig')
        const res = await axios.get('http://127.0.0.1:9000/api/v1/i/getlectures',{
            headers
        })
        console.log(res)
        setScheduledLectures(res.data.data)
        console.log(scheduledLectures)
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