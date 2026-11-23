function CourseCard({title, desc}) {
    return (
        <div>
            <h3>Course Name: {title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default CourseCard;