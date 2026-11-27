const courses = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
];

function CourseCard({ id, title }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Course ID: {id}</p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      {courses.map((course) => (
        <CourseCard key={course.id} title={course.title} id={course.id}/>
      ))}
    </main>
  );
}