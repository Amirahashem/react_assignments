// import './App.css'
// import CoursePrice from './CoursePrice';
// import CourseCard from './CourseCard';

// function App() {

//   return (
//     <>
//     {/* Q1 */}
//       <CoursePrice title="HTML" price={0} />
//       <CoursePrice title="CSS" price={150} />
//       <CoursePrice title="React" />
//       <hr />
//       {/* Q2 */}
//       <CourseCard title="React" isSpecial={true}  description="Learn Components" />
//       <CourseCard title="HTML" />
//       <hr />

//     </>
//   )
// }

// export default App

// [Q3]
function CourseLessons({ lessons = 0 }) {
  return (
    <section>
      <p>{lessons === 0 ? "No Lessons" : `Lessons: ${lessons}`}</p>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <CourseLessons lessons={0} />
      <CourseLessons lessons={12} />
      <CourseLessons />
    </main>
  );
}