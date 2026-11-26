import CourseCard from "./CourseCard";
import './App.css';
function App() {
  return(
    <>
    <div className="course-card">
    <CourseCard title="React" price={0}>
      <p>Learn Components</p>
    </CourseCard>
    <CourseCard title="CSS" price={120} isSpecial={true}/>
    </div>
    </>
  );
}

export default App;