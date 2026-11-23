function ProductDetails({product}) {
    const total = product.price * product.quantity;

    return (
        <div>
            <h3>{product.name}</h3>
            <p>price: {product.price}</p>
            <p>quantity: {product.quantity}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default ProductDetails;