function CourseCard({title, lessons}) {
    return(
        <section>
            <h3>{title}</h3>
            <p>Lessons: {lessons}</p>
        </section>
    );
}

export default CourseCard;