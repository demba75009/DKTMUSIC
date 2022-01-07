import Style from "./FavorisItem.module.css";
import React from "react";

const FavorisItem = (props) => {
  return (
    <div className={`App  container col-sm-4 ${Style.Item} `}>
      <img className={Style.Img} src={props.img} />
      <hr></hr>
      <h2 className={Style.text}> {props.nomAlbum}</h2>
      <h6 className={Style.text}>{props.Annee}</h6>

      <button
        className=" w-50 btn btn-outline-danger"
        onClick={() => props.DeleteFav()}
      >
        <i class="far fa-thumbs-down"></i>{" "}
      </button>
    </div>
  );
};

export default FavorisItem;
