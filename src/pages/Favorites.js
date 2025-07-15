// src/pages/FavoritesPage.jsx
import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import Header from "../components/Header/Header";
import { toast } from "react-toastify";

const Favorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => {
        const favoriteCourses = data.filter((course) =>
          favorites.includes(course.id)
        );
        setCourses(favoriteCourses);
      });
  }, [favorites]);

  const handleToggleLike = (id, title) => {
    const updated = favorites.filter((fid) => fid !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    toast.error(`Hủy yêu thích: ${title}`);
  };

  return (
    <>
      <Header />
      <section className="popular-courses">
        <h2 style={{ fontSize: "3rem", color: "red" }}>
          Khoá học đã yêu thích
        </h2>
        <div className="popular-courses__list">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                isLiked={true}
                onToggleLike={handleToggleLike}
              />
            ))
          ) : (
            <p>Chưa có khoá học nào được yêu thích.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Favorites;
