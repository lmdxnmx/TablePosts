import React from "react";
import s from "./TableCaption.module.css";
import Arrow from "./../../Assets/Arrow.svg";
const TableCaption = ({ sortedPosts }) => {
  return (
    <div className={s.table__caption}>
      <div className={s.table__caption_section} style={{ width: 114 }}>
        <span>ID</span>
        <img
          src={Arrow}
          width={11}
          onClick={() => sortedPosts("id")}
          alt={"arrow"}
        />
      </div>
      <div className={s.table__caption_section} style={{ width: 529 }}>
        <span>Заголовок</span>
        <img
          src={Arrow}
          width={11}
          onClick={() => sortedPosts("title")}
          alt={"arrow"}
        />
      </div>
      <div className={s.table__caption_section} style={{ width: 432 }}>
        <span>Описания</span>
        <img
          src={Arrow}
          width={11}
          onClick={() => sortedPosts("body")}
          alt={"arrow"}
        />
      </div>
    </div>
  );
};

export default TableCaption;
