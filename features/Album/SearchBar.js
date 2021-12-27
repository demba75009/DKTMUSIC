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

    console.log(query.charAt(0).toUpperCase() + query.slice(1));

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
            e.Artiste === query.charAt(0).toUpperCase() + query.slice(1) ||
            e.Artiste[0] === query.charAt(0).toUpperCase() ||
            e.nomAlbum === query
        ).map((a) => a);
        console.log(album1);

        actions.setSubmitting(false);

        this.setState({ Album: album1 });
        this.props.history.push("/Album/Name");
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
          {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
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
                Submit
              </button>
            </form>
          )}
        </Formik>

        {this.state.Album.map((A) => (
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
        ))}
      </>
    );
  }
}
