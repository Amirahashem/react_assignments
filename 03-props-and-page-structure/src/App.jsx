import './App.css'
import ProductCard from './ProductCard';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseCard from './components/CourseCard';
import ServiceCard from './components/ServiceCard';

function App() {
 

  return (
    <>
      <Header text="My Academy" />
      <ProductCard title="Keyboard" price={100}/>
      <ProductCard title="Mouse" price={50}/>
      <hr />
      <CourseCard title="React" desc="Build User Interfaces" />
      <CourseCard title="Javascript" desc="Learn The Fundamentals" />
      <hr />
      <ServiceCard title="Web Design" desc="Responsive Pages" />
      <ServiceCard title="Web Development" desc="Interactive Websites" />

      <Footer text=" Learning Every Day" />
    </>
  )
}

export default App;

// [Q3]
// function ProductCard(props) {
//   return (
//     <article>
//       <h2>{props.productName}</h2>
//       <p>Price: {props.price}</p>
//       <p>Total: {props.price + 20}</p>
//     </article>
//   );
// }

// export default function App() {
//   return <ProductCard productName="Keyboard" price="100" />;
// }