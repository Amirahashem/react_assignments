import './App.css'
import ProductCard from './ProductCard';

function App() {

  const product = {
    name: "Mouse",
    price: 50,
    category: "Accessories",
  }
  return (
    <>
    <ProductCard {...product} />
    <ProductCard {...product} price={40}/>

    </>
  )
}

export default App
