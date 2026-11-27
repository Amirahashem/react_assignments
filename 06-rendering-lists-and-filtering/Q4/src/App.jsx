import CourseCard from "./CourseCard";
import courses from "./data/courses";

function App() {
    return(
        <>
            {
                courses.filter(course => {
                    return course.price === 0 && course.isSpecial
                }).map(course => {
                    return <CourseCard {...course} />
                })
            }
        </>
    );
}

export default App;