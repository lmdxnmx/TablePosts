import React from "react";
import s from "./Paginator.module.css";
const Paginator = ({
  postsPerPage,
  totalPost,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumber = [];
  const pageList = Math.ceil(totalPost / postsPerPage);
  for (let i = 1; i <= pageList; i++) {
    pageNumber.push(i);
  }

  return (
    <div className={s.paginator}>
      <button
        disabled={currentPage === 1 ? true : false}
        className={s.paginator__button}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Назад
      </button>
      <div className={s.paginator__number_container}>
        {pageNumber.map((i) => {
          return (
            <div
              key={i}
              className={s.paginator__number}
              style={{ color: currentPage !== i ? "#474955" : "#7EBC3C" }}
            >
              {i}
            </div>
          );
        })}
      </div>
      <button
        disabled={currentPage === 10 ? true : false}
        className={s.paginator__button}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Далее
      </button>
    </div>
  );
};

export default Paginator;
