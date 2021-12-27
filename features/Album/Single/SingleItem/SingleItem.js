import React from "react";
import Style from "./SingleItem.module.css";
const Single = (props) => {
  let d = props.Piste;

  return (
    <div className={`App container   ${Style.Item} `}>
      <h2 className={Style.track}> {props.nomAlbum}</h2>
      <h2 className={Style.track}> {props.Artiste}</h2>

      <img src={props.img} />
      <hr></hr>

      {<h2 className={`${Style.track}`}>{props.Track1}</h2>}

      <audio
        onEnded={() => props.next()}
        autoPlay
        className={Style.piste}
        src={props.Piste}
        controls
      />

      <button
        className={`float-left btn btn-outline-light ${Style.back}`}
        onClick={() => props.back()}
      >
        <i class="fas fa-undo-alt"></i>
      </button>

      <button
        className={`float-left btn btn-outline-light ${Style.previous}`}
        onClick={() => props.previous()}
      >
        <i class="fas fa-arrow-left"></i>
      </button>

      {!props.lecture ? (
        <button
          className={`float-left btn btn-outline-light ${Style.play}`}
          onClick={() => props.play()}
        >
          <i class="fas fa-play"></i>{" "}
        </button>
      ) : (
        <button
          className={`float-left btn btn-outline-light ${Style.play}`}
          onClick={() => props.stop()}
        >
          <i class="fas fa-pause"></i>{" "}
        </button>
      )}
      <button
        className={`float-right btn btn-outline-light ${Style.next}`}
        onClick={() => props.next()}
      >
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Single;
