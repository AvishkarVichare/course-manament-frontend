import { useState } from "react"
import courseContext from "./courseContext"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const headers = {
    'Content-Type': 'application/json',
    'token': localStorage.getItem('auth-token'),
    'Access-Control-Allow-Origin': '*',
    mode: 'no-cors',
  }

const CourseState = ({children})=>{

    const [courses, setCourses] = useState([]);
    const [lectures, setLectures] = useState([]);
    const [instructors, setInstructors] = useState([]);

const navigate = useNavigate()

    const getCourses = async()=>{

       try{

        if(!localStorage.getItem('auth-token')){
            navigate('/admin/login')
        }

        const res = await axios.get('https://ideamagixbackend-1-a8945851.deta.app/api/v1/c/get',{
            headers
            })
            console.log(res.data.courses);
            setCourses(res.data.courses);
       }catch(err){
        // navigate('/admin/login');
       }

    }

    const addCourse = async(data) =>{
       try{
        const res = await axios.post('http://127.0.0.1:9000/api/v1/c/create',data, {
            headers
        })

        courses.push(res.data.data);
        setCourses([...courses])
        if(res.data.success){
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
        }

        // console.log(res)
       }catch(err){
        toast.error(err.message)
       }
    }

    
    const getLecturesOfCourse = async(courseId)=>{
        try{
            const res = await axios.get(`http://127.0.0.1:9000/api/v1/c/l/get/${courseId}`,{
            headers
        })
        setLectures(res.data.data);
        }catch(err){
            toast.error(err.message)
        }

        // console.log(res);
    }


    const getInstructorsList = async ()=>{
       try{
        const res = await axios.get('http://127.0.0.1:9000/api/v1/i/get', {
            headers
        })
        // console.log(res);
        setInstructors(res.data.instructors);
       }catch(err){
        toast.error(err.message)
       }
    }

    const addLecture = async(data)=>{
        // console.log("data", data)
     try{
        const res = await axios.post('http://127.0.0.1:9000/api/v1/c/l/add',data, {
            headers
        })

        if(res.data.success){
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
            return;
        }

        console.log('this',res)
        lectures.push(res.data.data);
        const newArr = lectures;
        setLectures([...newArr])

     }catch(err){
        toast.error(err.message)
     }
        
    }

    return(
        <courseContext.Provider value={{courses, setCourses, getCourses, addCourse, getLecturesOfCourse, lectures, setLectures, instructors , getInstructorsList, addLecture}}>
            {
                children
            }
        </courseContext.Provider>
    )
}

export default CourseState;