

function CourseCard({
  id,
  title,
  lessons,
  price = 0,
  challenges,
  isSpecial = false,
  children,
}) {
  function showCourseInfo() {
    console.log(`Course: ${title}`);
    console.log(`Lessons: ${lessons ?? 0}`);
  }

function handleCourseAction(e,action, courseName) {
    e.stopPropagation()
    console.log(`${action} ${courseName}`);
}

function courseDetails(e) {
    console.log(`Event type: ${e.type}`);
    console.log(e.currentTarget.className);
    console.log(e.currentTarget.textContent);
    console.log(event.target.tagName);
    
}

function handleCardClick() {
    console.log(`Card ${title}`);
}
    return (
    <div className="course-card" id={`card-${id}`} onClick={handleCardClick}>
      <h3>{title}</h3>
      <p className="lessons-count">
        {lessons === undefined ? "No Lessons" : `Lessons Count: ${lessons}`}
      </p>
      <div className="info">
        {price === 0 ? (
          <span className="free">Free</span>
        ) : (
          <span>{price} EGP</span>
        )}
        <span>
          {challenges === "Yes" ? "Has Challenges" : "No Challenges"}
        </span>
      </div>
      {isSpecial && <span className="special">Special</span>}
      <button type="button" onClick={showCourseInfo}>
        Show Course Info
      </button>
      <button type="button" onClick={(e)=>handleCourseAction(e,"Save", title)}>
        Save Course
      </button>
      <button type="button" onClick={(e)=>handleCourseAction(e,"Share", title)}>
        Share Course
      </button>
      <button type="button" onClick={courseDetails} className="course-details">
        <span>Course Details</span>
      </button>

      {children}
    </div>
  );
}

export default CourseCard;