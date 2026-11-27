function CoursesCard({id, title, lessons, price, isSpecial}) {
    return(
        <section className={`card-${id}`}>
            <h3>{title}</h3>
            <p>{lessons===0? "No Lessons" : `Lessons: ${lessons}`}</p>
            <p>{price === 0 ? "Free" : `Price: ${price} EGP`}</p>
            {isSpecial && <p>Special</p>}
        </section>
    );
    
}

export default CoursesCard;