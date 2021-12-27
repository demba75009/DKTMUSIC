import React from "react";
import Style from "./AlbumItem.module.css";
const AlbumItem = (props) => {
  return (
    <div className={`App  container col-sm-4  ${Style.Item} `}>
      <img
        onClick={() => props.AlbumDetail()}
        className={Style.imgAlbum}
        src={props.img}
      />
      <p className={` ${Style.nomAlbum} `}>{props.Artiste}</p>

      <p className={` ${Style.nomAlbum} ${Style.nomAlbum} `}>
        {" "}
        {props.nomAlbum}
      </p>
      <p className={` ${Style.nomAlbum} ${Style.date} `}>{props.Annee}</p>

      {!props.Liker ? (
        <button
          className="  btn btn-outline-success"
          onClick={() => props.AddFav()}
        >
          <i className="far fa-heart"></i>
        </button>
      ) : (
        <button
          className="  btn btn-outline-danger"
          onClick={() => props.RemoveFav()}
        >
          <i class="fas fa-heart-broken"></i>{" "}
        </button>
      )}
    </div>
  );
};

export default AlbumItem;
