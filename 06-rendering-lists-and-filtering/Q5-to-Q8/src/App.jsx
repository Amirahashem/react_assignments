import courses from "./data/courses";
import CoursesCard from "./CoursesCard";
import CoursesStats from "./CoursesStats";

// let minimumLessons = 100;
let minimumLessons = 40;
const reversedCourses = courses.reverse();
const topCourses = [...courses].sort((a,b) => b.lessons - a.lessons).slice(0,3);

console.log(topCourses);
// console.log(courses);
// console.log(reversedCourses);


function App() {
  return(
    <>
    {/* Q6 */}
    <CoursesStats courses={courses} />
    {/* Q5 */}
      {
        courses.filter(course => {
          return course.lessons > minimumLessons
        }).map(course => {
          return <CoursesCard {...course} key={course.id}/>
        })
      }
      <hr />
      {/* Q7 */}
      {
        reversedCourses.length === 0 ? (
            <p>No Courses Found</p>
         ) : (
          topCourses.map(course => {
            return <CoursesCard key={course.id} {...course} />
          })
        )
      
      } 
      <hr />
      {/* Q8 */}
      {
        topCourses.length > 0 ? (
          topCourses.map(course => {
            <CoursesCard key={course.id} {...course} />
          })
        ) : (
          <p>No Courses Found</p>
        )
      }
    </>
  );
}

export default App;