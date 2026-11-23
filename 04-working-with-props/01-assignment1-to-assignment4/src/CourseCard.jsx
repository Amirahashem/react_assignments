function CourseCard({name, level=" Beginne", price=100}) {
    return (
        <div>
            <p>Course Name: {name}</p>
            <p>Level: {level}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default CourseCard;