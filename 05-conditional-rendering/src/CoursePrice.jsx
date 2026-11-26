function CoursePrice({title, price = 0}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>price : {price === 0 ? "Free" : `${price} EGP`}</p>
        </div>
    );
}

export default CoursePrice;