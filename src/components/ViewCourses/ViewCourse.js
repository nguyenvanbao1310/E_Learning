import React, { useEffect, useState } from "react";
import "../ViewCourses/ViewCourses.css";

const ViewedCourses = () => {
  const [ViewCourses, setViewedCourses] = useState([]);

  useEffect(() => {
    const storedCourses =
      JSON.parse(localStorage.getItem("viewedCourseDetails")) || [];
    setViewedCourses(storedCourses);
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem("viewedCourseDetails");
    setViewedCourses([]);
  };

  return (
    <div className="history-view">
      <h2>Lịch sử đã xem</h2>
      <div className="course-list">
        {ViewCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Giá: {course.price}đ</p>
            <p>Đánh giá: {course.rating}</p>
          </div>
        ))}
      </div>
      <button className="clear-history" onClick={handleClearHistory}>
        Xoá lịch sử
      </button>
    </div>
  );
};

export default ViewedCourses;
