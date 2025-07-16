import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ViewedCourses from "../components/ViewCourses/ViewCourse";

const History = () => {
  const [viewedCourses, setViewedCourses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("viewedCourses")) || [];
    setViewedCourses(data);
  }, []);

  return (
    <>
      <Header />
      <ViewedCourses />
    </>
  );
};

export default History;
