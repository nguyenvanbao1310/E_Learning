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
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => {
        const data = res.data;

        console.log("API trả về:", data);

        if (Array.isArray(data)) {
          setCourses(data);
        } else if (Array.isArray(data.courses)) {
          setCourses(data.courses);
        } else {
          console.error("Dữ liệu trả về không hợp lệ:", data);
          setCourses([]); // fallback
        }
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

  const fetchSuggestions = () => {
    const viewed = JSON.parse(localStorage.getItem("viewedCourseIds")) || [];
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const suggestions = courses.filter(
      (course) => viewed.includes(course.id) || favorites.includes(course.id)
    );

    setSuggestions(suggestions);
    setShowSuggestions(true);
  };

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  return (
    <section className="popular-courses">
      <div className="popular-courses__header">
        <h2>Khóa học</h2>
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
        {currentCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            isLiked={favorites.includes(course.id)}
            onToggleLike={handleToggleLike}
          />
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active-page" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <button onClick={fetchSuggestions} className="btn-suggestion">
          Gợi ý sản phẩm phù hợp
        </button>
      </div>

      {showSuggestions && (
        <div style={{ marginTop: "32px" }}>
          <h2>Gợi ý cho bạn</h2>
          <div className="popular-courses__list">
            {suggestions.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                isLiked={favorites.includes(course.id)}
                onToggleLike={handleToggleLike}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularCourses;
