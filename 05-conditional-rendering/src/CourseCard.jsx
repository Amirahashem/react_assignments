function CourseCard({title, isSpecial = false, description}) {
    return(
        <div>
            <h3>{title}</h3>
            {isSpecial && <p>Special</p>}
            {description !== undefined && <p>{description}</p>}
        </div>
    )
}

export default CourseCard;