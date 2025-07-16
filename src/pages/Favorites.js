// src/pages/FavoritesPage.jsx
import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import Header from "../components/Header/Header";
import { toast } from "react-toastify";
import axios from "axios";

const Favorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => {
        const data = res.data;
        const allCourses = Array.isArray(data)
          ? data
          : Array.isArray(data.courses)
          ? data.courses
          : [];
        const favoriteCourses = allCourses.filter((course) =>
          favorites.includes(course.id)
        );
        setCourses(favoriteCourses);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API yêu thích:", err);
        toast.error("Không thể lấy danh sách yêu thích.");
      })
      .finally(() => setLoading(false));
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
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div className="skeleton-card" key={i}></div>
            ))
          ) : courses.length > 0 ? (
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
