import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { WishlistContext } from "../../useContect/WishlistContext";

function Detail() {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();
  fetch("http://localhost:3000/" + id)
    .then((res) => res.json())
    .then((data) => setDetail(data));
  return (
    <div className="detailPage">
      <div className="card">
        {" "}
        <ul className="pages">
          <li className={`${detail.icon} icon`}></li>
          <li className="name">{detail.name}</li>
          <li className="desc">{detail.description}</li>
        </ul>
      </div>
    </div>
  );
}

export default Detail;
