import './App.css'
import Courses from './data/courses';
import CourseCard from './CourseCard';

function App() {

  return (
    <>
     <CourseCard {...Courses[0]}/>
     <CourseCard {...Courses[1]}/>
     <CourseCard {...Courses[2]}/>
     <CourseCard {...Courses[3]}/>

    </>
  )
}

export default App
