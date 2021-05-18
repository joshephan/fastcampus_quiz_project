import React from "react";
import "./Progress.css";

export function Progress({ page, maxPage }) {
  return (
    <div className="progress">
      <div className="page">
        {page}/{maxPage}
      </div>
      <div className="gauge">
        <span
          className="fill"
          style={{ width: `${((page - 1) / maxPage) * 100}%` }}
        ></span>
      </div>
    </div>
  );
}
