function StudentCard({student}) {
    return(
        <div>
            <h3>name: {student.name}</h3>
            <p>course: {student.course}</p>
            <p>progress: {student.progress}%</p>
        </div>
    )
}

export default StudentCard;