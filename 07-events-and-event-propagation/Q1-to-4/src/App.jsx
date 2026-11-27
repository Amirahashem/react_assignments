import CourseCard from "./components/CourseCard";
import courses from './data/courses';

function App() {
  return (
    <>
    {
      courses.map(course => {
        return <CourseCard {...course} key={course.id}/>
      })
    }
    </>
  );
}

export default App;