import React, { Component } from "react";
import Service from "../../../config/Api.Config";
import FavorisItem from "./FavorisItem/FavorisItem";
class Favoris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fav: [],
    };
  }

  componentDidMount() {
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

  AlbumDetail = (id) => {
    this.props.history.push(`Album/AlbumDetail?id=${id}`);
  };

  DeleteFav = (nomAlbum) => {
    const index = this.state.Fav.findIndex((f) => f.nomAlbum === nomAlbum);

    this.setState(
      (state) => ({
        Fav: this.state.Fav.filter((_, i) => i !== index),
      }),
      this.SuppFav
    );
    alert("Album disliker : (");
  };

  SuppFav = () => {
    Service.put("Fav.json", this.state.Fav)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h2 className="text-light"> Vos Favoris:</h2>

        {this.state.Fav.map((F) => (
          <FavorisItem
            key={F.id}
            nomAlbum={F.nomAlbum}
            Annee={F.Annee}
            img={F.img}
            DeleteFav={() => this.DeleteFav(F.nomAlbum)}
            AlbumDetail={() => this.AlbumDetail(F.id)}
          />
        ))}
      </div>
    );
  }
}

export default Favoris;
