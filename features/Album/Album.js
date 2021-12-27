import React, { Component } from "react";

import Service from "../../config/Api.Config";
import AlbumItem from "./AlbumItem/AlbumItem";
import Style from "./Album.module.css";
import SearchBar from "./SearchBar";
class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Album: [],
      Fav: [],
      i: false,
    };
  }

  componentDidMount() {
    Service.get("Album.json")
      .then((res) => {
        console.log(res.data);

        const album = [];
        for (let key in res.data) {
          album.unshift({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({ Album: album });
        console.log(this.state.Album);
      })
      .catch((err) => console.log(err));

    Service.get("Fav.json")
      .then((res) => {
        console.log(res.data);

        const favoris = [];
        for (let key in res.data) {
          favoris.unshift({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({ Fav: favoris });
        console.log(this.state.Fav);
      })
      .catch((err) => console.log(err));
  }

  AddFav = (nomAlbum) => {
    this.setState({ Liker: false });

    const fav = { ...this.state.Album.find((a) => a.nomAlbum === nomAlbum) };
    this.setState(
      (state) => ({
        Fav: [...this.state.Fav, fav],
      }),
      this.SaveFav
    );
  };

  RemoveFav = (nomAlbum) => {
    const index = this.state.Fav.findIndex((f) => f.nomAlbum === nomAlbum);

    this.setState(
      (state) => ({
        Fav: this.state.Fav.filter((_, i) => i !== index),
      }),
      this.DeleteFav
    );
  };

  DeleteFav = () => {
    Service.put("Fav.json", this.state.Fav)
      .then((res) => {
        console.log(res.data);

        alert("Album Disliker :(");
      })
      .catch((err) => console.log(err));
  };

  SaveFav = () => {
    Service.put("Fav.json", this.state.Fav)
      .then((res) => {
        console.log(res.data);

        alert("Ajouter Dans vos Favoris ;)");
      })
      .catch((err) => console.log(err));
  };
  AlbumDetail = (id) => {
    this.props.history.push(`/Album/AlbumDetail/?id=${id}`);
  };

  render() {
    return (
      <div className="App">
        <div className={`bg-success  ${Style.banniere}`}>
          <section className={Style.dktmusic}>
            {" "}
            <h4 className="text-center animate__animated animate__repeat-2 animate__flash">
              DKT MUSIC{" "}
            </h4>
          </section>
        </div>

        <h2 className={Style.Liste}> Liste Albums:</h2>

        {this.state.Album.map((A) => (
          <AlbumItem
            key={A.id + A.nomAlbum}
            Annee={A.Annee}
            nomAlbum={A.nomAlbum}
            Artiste={A.Artiste}
            img={A.img}
            AlbumDetail={() => this.AlbumDetail(A.id)}
            AddFav={() => this.AddFav(A.nomAlbum)}
            RemoveFav={() => this.RemoveFav(A.nomAlbum)}
            Liker={this.state.Fav.map((f) => f.nomAlbum).includes(A.nomAlbum)}
          />
        ))}
      </div>
    );
  }
}

export default Album;
