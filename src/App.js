import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './Pages/AdminLogin'
import AdminSignup from './Pages/AdminSignup'
import CoursePage from './Pages/CoursePage'
import CourseState from './context/Course/CourseState'
import AddCourseModal from './Components/AddCourseModal'
import Lectures from './Pages/Lectures'
import AddLectureModal from './Components/AddLectureModal'
import InstructorSignup from './Pages/InstructorSignup'
import InstructorLogin from './Pages/InstructorLogin'
import toast, { Toaster } from 'react-hot-toast';
import InstructorPage from './Pages/InstructorPage'
import MainPage from './Pages/MainPage'


const App = () => {
    const [show, setShow] = useState(false);
    const [showAddLecture, setShowAddLecture] = useState(false);
    const currCourseId = useRef("");

  return (
    <>
    <CourseState>
      <Toaster/>

    <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/admin/login' element={<AdminLogin/>} />
        <Route exact path='/admin/signup' element={<AdminSignup/>} />
        <Route exact path='/instructor/signup' element={<InstructorSignup/>} />
        <Route exact path='/instructor/login' element={<InstructorLogin/>} />
        <Route exact path='/instructor' element={<InstructorPage/>} />
        <Route exact path='/courses' element={<CoursePage setShow={setShow} show={show}/>} />
      <Route exact path='/lectures/:courseId' element={<Lectures showAddLecture= {showAddLecture} setShowAddLecture={setShowAddLecture} currCourseId={currCourseId} />} />



    </Routes>
       {show && <AddCourseModal setShow={setShow}/>}
       {showAddLecture && <AddLectureModal currCourseId={currCourseId} setShowAddLecture={setShowAddLecture}/>}
    </CourseState>

    </>
    )
}

export default App