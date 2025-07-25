import React, { useState } from "react";
import { FaBookOpen, FaUser } from "react-icons/fa";
import "../CourseCard/CourseCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
const CourseCard = ({
  id,
  image,
  title,
  price,
  description,
  rating,
  classes,
  students,
  isLiked,
  onToggleLike,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowDetail = () => {
    const viewedIds = JSON.parse(localStorage.getItem("viewedCourseIds")) || [];
    if (!viewedIds.includes(id)) {
      localStorage.setItem(
        "viewedCourseIds",
        JSON.stringify([...viewedIds, id])
      );
    }
    const viewedDetails =
      JSON.parse(localStorage.getItem("viewedCourseDetails")) || [];
    const courseData = {
      id,
      title,
      image,
      description,
      price,
      rating,
    };

    const isExisted = viewedDetails.some((course) => course.id === id);
    if (!isExisted) {
      localStorage.setItem(
        "viewedCourseDetails",
        JSON.stringify([courseData, ...viewedDetails])
      );
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="course-card">
        <div className="course-card__image__wrap">
          <img src={image} alt={title} className="course-card__image" />
          <div
            className="course-card__heart"
            onClick={() => onToggleLike(id, title)}
          >
            {isLiked ? (
              <FaHeart className="heart-icon liked" />
            ) : (
              <FaRegHeart className="heart-icon" />
            )}
          </div>
          <span className="course-card__badge">Best Seller</span>
        </div>
        <div className="course-card__body">
          <h2 className="course-card__title">{title}</h2>
          <span className="course-card__detail" onClick={handleShowDetail}>
            Xem chi tiết
          </span>
          <div className="course-card__rating-price">
            <span className="course-card__rating">{rating} ⭐</span>
            <span className="course-card__price">{price}VNĐ</span>
          </div>
        </div>
        <div className="course-card__footer">
          <span>
            <FaBookOpen /> Tổng lớp: {classes}
          </span>
          <span>
            <FaUser /> Tổng HS: {students}
          </span>
        </div>
      </div>
      {/* Modal "xem chi tiet"  */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <div className="modal-info-grid">
              <p>
                <strong>Rating:</strong> {rating} ⭐
              </p>
              <p>
                <strong>Price:</strong> {price}đ
              </p>
              <p>
                <strong>Tổng Lớp:</strong> {classes}
              </p>
              <p>
                <strong>Tổng HS:</strong> {students}
              </p>
            </div>
            <div className="modal-description">
              <p style={{ marginTop: "1rem" }}>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CourseCard;
