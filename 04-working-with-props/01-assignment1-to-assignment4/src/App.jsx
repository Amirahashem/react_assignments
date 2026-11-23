import './App.css';
import ProfileCard from './ProfileCard';
import CourseCard from './CourseCard';
import ProductDetails from './ProductDetails';
import StudentCard from './StudentCard';

function App() {

  // [q3]
  const product = {
    name: "Keyboard",
    price: 100,
    quantity: 3,
  };
  
  // [q4]
  const studentOne = {
    name: "Ahmed",
    course: "React",
    progress: 40,
  };

    const studentTwo = {
    name: "Sara",
    course: "Javascript",
    progress: 75,
  };
  return (
    <>
    {/* q1 */}
      <ProfileCard name="Elzero" job="Developer" country="Egypt" />
      <hr />
      {/* q2 */}
      <CourseCard name="React" />
      <CourseCard name="Javascipt" level="Advanced" price={200} />
      <CourseCard name="HTML"  price={0} />
      <hr />
      {/* q3 */}
      <ProductDetails product={product} />
      <hr />
      {/* q4 */}
      <StudentCard student={studentOne} />
      <StudentCard student={studentTwo} />
      <hr />
      

    </>
  )
}

export default App
