import CoursesCard from './CoursesCard';
import courses from './data/courses';

function App() {

  return (
    <>
    <div>
      {courses.map(course => {
        return <CoursesCard {...course} key = {course.id}/>
      })}
      </div>
    </>
  )
}

export default App
