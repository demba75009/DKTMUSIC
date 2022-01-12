import React, { Component } from "react";
import { Formik } from "formik";
import Service from "../../config/Api.Config";
import AlbumItem from "./AlbumItem/AlbumItem";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Album: [],
      Fav: [],
      i: false,
    };
  }

  submit = (values, actions) => {
    console.log(values.query);
    const query = values.query;
    this.setState({ i: true });

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

        const album1 = this.state.Album.filter(
          (e) =>
            e.Artiste[0] === query.charAt(0).toUpperCase() &&
            e.Artiste[1] === query.charAt(1)
        ).map((a) => a);

        const albumC = this.state.Album.filter(
          (e) => e.Artiste === query.charAt(0).toUpperCase() + query.slice(1)
        ).map((a) => a);

        const album2 = this.state.Album.filter(
          (e) =>
            e.Artiste[0] === query.charAt(0).toUpperCase() &&
            e.Artiste[1] === query.charAt(1) &&
            e.Artiste[2] === query.charAt(2)
        ).map((a) => a);

        const albumM = this.state.Album.filter(
          (e) => e.Artiste[0] === query.charAt(0).toUpperCase()
        ).map((a) => a);

        console.log(!(query[0].toUpperCase() + query.slice(1) === query));

        actions.setSubmitting(false);

        if (!query[0].toUpperCase() + query.slice(1) === query) {
          console.log("ok");
        } else this.setState({ Album: albumC });

        if (query[0].toUpperCase() && query[1]) {
          this.setState({ Album: album1 });

          this.props.history.push("/Album/Name");
        }

        if (query[0].toUpperCase() && query[1] && query[2]) {
          this.setState({ Album: album2 });

          this.props.history.push("/Album/Name");
        }
        if (query[0].toUpperCase() && !query[1]) {
          this.setState({ Album: albumM });
          this.props.history.push("/Album/Name");
        }
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
  };

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
      <>
        <Formik onSubmit={this.submit} initialValues={{ query: "" }}>
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
              <input
                name="query"
                className="flex-fill form-control mr-2"
                placeholder="Search ..."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button
                className="btn btn-small btn-success"
                type="submit"
                disabled={isSubmitting}
              >
                <i class="fas fa-search"></i>{" "}
              </button>
            </form>
          )}
        </Formik>

        {this.state.Album.length > 0 ? (
          this.state.Album.map((A) => (
            <AlbumItem
              key={A.id + A.nomAlbum}
              Annee={A.Annee}
              nomAlbum={A.nomAlbum}
              img={A.img}
              Artiste={A.Artiste}
              AlbumDetail={() => this.AlbumDetail(A.id)}
              AddFav={() => this.AddFav(A.nomAlbum)}
              RemoveFav={() => this.RemoveFav(A.nomAlbum)}
              Liker={this.state.Fav.map((f) => f.nomAlbum).includes(A.nomAlbum)}
            />
          ))
        ) : (
          <h1 className="text-center text-white">
            Aucun <p>veuillez entrez un artiste</p>
          </h1>
        )}
      </>
    );
  }
}
