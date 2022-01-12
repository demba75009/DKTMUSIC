import React from "react";
import Style from "./AlbumDetailItem.module.css";

const AlbumDetailItem = (props) => {
  return (
    <div className={`App container   `}>
      <button
        onClick={() => props.back()}
        className={`float-left btn btn-outline-light ${Style.back}`}
      >
        <i class="fas fa-undo-alt"></i>
      </button>

      <h2 className={Style.track1}>{props.nomAlbum} </h2>
      <h2 className={Style.track}>{props.Artiste} </h2>

      <img src={props.img} />
      <hr></hr>
      <h6 className={Style.track}>Sortie: {props.Annee}</h6>
      <hr className="bg-success w-50 text-center"></hr>

      {props.Piste.length <= 1 ? (
        <h3
          onClick={() => {
            props.ChangeId1();
          }}
          className={`${Style.track}`}
        >
          1 - {props.Track1}
        </h3>
      ) : (
        <>
          <h3
            onClick={() => {
              props.ChangeId1();
            }}
            className={`${Style.track}`}
          >
            1 - {props.Track1}
          </h3>

          <hr className="bg-success w-50 text-center"></hr>
          <h3
            onClick={() => {
              props.ChangeId2();
            }}
            className={`${Style.track}`}
          >
            2 - {props.Track2}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId3()} className={`${Style.track}`}>
            3 - {props.Track3}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId4()} className={`${Style.track}`}>
            4 - {props.Track4}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId5()} className={`${Style.track}`}>
            5 - {props.Track5}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId6()} className={`${Style.track}`}>
            6 - {props.Track6}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId7()} className={`${Style.track}`}>
            7 - {props.Track7}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId8()} className={`${Style.track}`}>
            8 - {props.Track8}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId9()} className={`${Style.track}`}>
            9 - {props.Track9}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId10()} className={`${Style.track}`}>
            10 - {props.Track10}
          </h3>
          <hr className="bg-success w-50 text-center"></hr>
          <h3 onClick={() => props.ChangeId11()} className={`${Style.track}`}>
            11 - {props.Track11}
          </h3>

          {props.Piste.length > 11 ? (
            <>
              <hr className="bg-success w-50 text-center"></hr>
              <h3
                onClick={() => props.ChangeId12()}
                className={`${Style.track}`}
              >
                12 - {props.Track12}
              </h3>
              <hr className="bg-success w-50 text-center"></hr>
              <h3
                onClick={() => props.ChangeId13()}
                className={`${Style.track}`}
              >
                13 - {props.Track13}
              </h3>
              <hr className="bg-success w-50 text-center"></hr>
            </>
          ) : (
            <hr className="bg-success w-50 text-center"></hr>
          )}
          {props.Piste.length > 13 ? (
            <>
              <h3
                onClick={() => props.ChangeId14()}
                className={`${Style.track}`}
              >
                14 - {props.Track14}
              </h3>
              <hr className="bg-success w-50 text-center"></hr>
            </>
          ) : (
            ""
          )}

          {props.Piste.length > 14 ? (
            <>
              <h3
                onClick={() => props.ChangeId15()}
                className={`${Style.track}`}
              >
                15 - {props.Track15}
              </h3>
              <hr className="bg-success w-50 text-center"></hr>
            </>
          ) : (
            ""
          )}

          {props.Piste.length > 15 ? (
            <>
              <h3
                onClick={() => props.ChangeId16()}
                className={`${Style.track}`}
              >
                16 - {props.Track16}
              </h3>
              <hr className="bg-success w-50 text-center"></hr>
            </>
          ) : (
            ""
          )}

          {props.Piste.length > 16 ? (
            <>
              <h3
                onClick={() => props.ChangeId17()}
                className={`${Style.track}`}
              >
                17 - {props.Track17}
              </h3>
              <hr className="bg-success w-50 text-center"></hr>
            </>
          ) : (
            ""
          )}

          {props.Piste.length > 17 ? (
            <>
              <h3
                onClick={() => props.ChangeId18()}
                className={`${Style.track}`}
              >
                18 - {props.Track18}
              </h3>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default AlbumDetailItem;
