function CourseCard({title, price = 0, isSpecial = false, children}) {
    const special = isSpecial ? `special` : "";
    return(
        <div className={`card ${special}`} >
            <h3>{title}</h3>
            <p>{price ===0 ? <span style={{color: "green"}}> Free</span> : `Price: ${price} EGP`}</p>
            {isSpecial && <p>Special</p>}
            {children}
        </div>
    );
}

export default CourseCard;