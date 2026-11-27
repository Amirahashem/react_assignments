function CoursesStats({courses}) {
    const freeCourses = courses.filter(course => course.price === 0);
    const specialCourses = courses.filter(course => course.isSpecial === true);

    return (
        <section>
            {
            courses.length === 0 ? (<p>No Courses Found</p>) : (
            <div>
            <p>Courses Total : {courses.length}</p>
            <p>Free Courses : {freeCourses.length}</p>
            <p>Special Courses : {specialCourses.length}</p>
            </div>

    )
            }
        </section>
    );
}

export default CoursesStats;