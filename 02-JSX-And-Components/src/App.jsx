// [q1]
// function App() {
//   return(
//     <>
//     <h1 className="title">My First Page</h1>
//     <p>Learning React</p>
//     <input type="text"/>
//     </>
//   )
// }

// export default App;

// [q2]
// function App() {
//   const productName = "Keyboard";
//   const price = 100;
//   const quantity = 3;
//   return(
//     <div>
//       <p>Product Name: {productName}</p>
//       <p>price: {price * 3}</p>
//       <p>quantity: {quantity}</p>
//     </div>
//   );
// }

// export default App;

// [q3]
// // Header Component
// function Header() {
//   return <h1>My Website</h1>;
// }

// // Content Component
// function Content() {
//   return(
//     <main>
//       <h2>Welcome To My Website</h2>
//     </main>
//   );
// }

// // Footer Component
// function Footer() {
//   return <p>All Rights Reserved</p>;
// }
// function App() {
//   return(
//     <div>
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// [q4]
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return(
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;