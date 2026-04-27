import React from 'react';

const CourseForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="courseName">Course Name</label>
                <input type="text" id="courseName" name="courseName" required />
            </div>
            <div>
                <label htmlFor="courseCode">Course Code</label>
                <input type="text" id="courseCode" name="courseCode" required />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

const CoursePage = () => {
    return (
        <div>
            <h1>Course Form</h1>
            <CourseForm />
        </div>
    );
};

export default CoursePage;