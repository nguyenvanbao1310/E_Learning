import React, { useState, useEffect } from "react";
import CourseCard from "../CourseCard/CourseCard";
import "../PopularCourses/PopularCourses.css";
import axios from "axios";
import { toast } from "react-toastify";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const handleToggleLike = (id, title) => {
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
      toast.error(`Hủy yêu thích: ${title}`);
    } else {
      updatedFavorites = [...favorites, id];
      toast.success(`Đã yêu thích: ${title}`);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      });
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchKeyword =
      !searchItems ||
      course.title.toLowerCase().includes(searchItems.toLowerCase());

    const matchRating = !minRating || course.rating >= minRating;

    const matchPrice = !maxPrice || course.price <= maxPrice;

    return matchKeyword && matchRating && matchPrice;
  });

  return (
    <section className="popular-courses">
      <div className="popular-courses__header">
        <h2>Popular courses.</h2>
        <div className="filter">
          <select onChange={(e) => setMinRating(Number(e.target.value))}>
            <option value="0">Tất cả sao</option>
            <option value="4">4⭐ trở lên</option>
            <option value="4.5">4.5⭐ trở lên</option>
            <option value="5">5⭐</option>
          </select>
          <select onChange={(e) => setMaxPrice(Number(e.target.value))}>
            <option value={Infinity}>Tất cả giá</option>
            <option value={500000}>Dưới 500.000</option>
            <option value={700000}>Dưới 700.000</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Tìm khóa học"
          value={searchItems}
          onChange={(e) => setSearchItems(e.target.value)}
        />
      </div>
      <div className="popular-courses__list">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            isLiked={favorites.includes(course.id)}
            onToggleLike={handleToggleLike}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
