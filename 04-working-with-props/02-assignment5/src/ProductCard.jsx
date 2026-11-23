function ProductCard({name, price, category}) {
    return (
        <div>
            <h3>Product Name: {name}</h3>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
        </div>
    );
};

export default ProductCard;