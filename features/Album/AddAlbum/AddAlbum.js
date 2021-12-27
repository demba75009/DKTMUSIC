import { Component } from "react";
import { Formik } from "formik";
import Service from "../../../config/Api.Config";
import firebase from "../../../firebase/firebase";
class AddAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Piste: [],
      progress: 0,
      downloadURL: [],
    };
  }

  submit = (value, actions) => {
    let file = [];
    const file2 = [...file, ...this.state.Piste];
    console.log(file2);
    const storage = firebase.storage();
    const storageRef = storage.ref();

    let uploadTask;
    file2.map((f) => {
      uploadTask = storageRef.child("/Piste/" + f.name).put(f);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.setState({ progress });
        },
        (error) => {
          throw error;
        },
        () => {
          // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            // for (let i = 0; i < file2.length; i++) {
            //   console.log(url);
            //   this.setState({ downloadURL: [...this.state.downloadURL, url] });
            //   console.log(i);
            //   console.log(file2.length);
            //   if (i === file2.length - 1) {
            //     let Album = value;
            //     Album.Piste = [this.state.downloadURL];
            //     Service.post("Album.json", Album)
            //       .then((res) => console.log(res.data))
            //       .catch((err) => console.log(err));
            //     setTimeout(() => {
            //       actions.isSubmitting = false;
            //       actions.resetForm();
            //     }, 1000);
            //   }
            // }
          });
        }
      );
    });

    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
      for (let i = 0; i < file2.length; i++) {
        console.log(url);
        this.setState({ downloadURL: [...this.state.downloadURL, url] });
        console.log(i);
        console.log(file2.length);

        if (i === file2.length - 1) {
          let Album = value;

          Album.Piste = [...this.state.downloadURL];
          Service.post("Album.json", Album)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
          setTimeout(() => {
            actions.isSubmitting = false;
            actions.resetForm();
          }, 1000);
        }
      }
    });
  };

  handleChange1 = (selectorFiles) => {
    console.log(selectorFiles);
  };

  render() {
    return (
      <div
        className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center"
      >
        <Formik
          onSubmit={this.submit}
          initialValues={{
            nomAlbum: "",
            Artiste: "",
            img: "",
            description: "",
            Annee: 0,
            Track1: "",
            Track2: "",
            Track3: "",
            Track4: "",
            Track5: "",
            Track6: "",
            Track7: "",
            Track8: "",
            Track9: "",
            Track10: "",
            Track11: "",
            Track12: "",
            Track13: "",
            Track14: "",
            Track15: "",
            Piste: [],
          }}
        >
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-white border p-5 d-flex flex-column"
            >
              <div className="form-group">
                <label>Artiste</label>
                <input
                  type="text"
                  name="Artiste"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Artiste}
                />
              </div>

              <div className="form-group">
                <label>nomAlbum</label>
                <input
                  type="text"
                  name="nomAlbum"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>

              <div className="form-group">
                <label>Descritiption</label>
                <textarea
                  style={{ width: 200, height: 300 }}
                  type="text"
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </div>

              <div className="form-group">
                <label>Img</label>
                <input
                  type="text"
                  name="img"
                  placeholder="https//"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.img}
                />
              </div>

              <div className="form-group">
                <label>Annee</label>
                <input
                  type="number"
                  name="Annee"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Annee}
                />
              </div>

              <div className="form-group">
                <label>Track1</label>
                <input
                  type="text"
                  name="Track1"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track1}
                />
              </div>

              <div className="form-group">
                <label>Track2</label>
                <input
                  type="text"
                  name="Track2"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track2}
                />
              </div>

              <div className="form-group">
                <label>Track3</label>
                <input
                  type="text"
                  name="Track3"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track3}
                />
              </div>
              <div className="form-group">
                <label>Track4</label>
                <input
                  type="text"
                  name="Track4"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track4}
                />
              </div>
              <div className="form-group">
                <label>Track5</label>
                <input
                  type="text"
                  name="Track5"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track5}
                />
              </div>
              <div className="form-group">
                <label>Track6</label>
                <input
                  type="text"
                  name="Track6"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track6}
                />
              </div>

              <div className="form-group">
                <label>Track7</label>
                <input
                  type="text"
                  name="Track7"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track7}
                />
              </div>
              <div className="form-group">
                <label>Track8</label>
                <input
                  type="text"
                  name="Track8"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track8}
                />
              </div>

              <div className="form-group">
                <label>Track9</label>
                <input
                  type="text"
                  name="Track9"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track9}
                />
              </div>

              <div className="form-group">
                <label>Track10</label>
                <input
                  type="text"
                  name="Track10"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track10}
                />
              </div>

              <div className="form-group">
                <label>Track11</label>
                <input
                  type="text"
                  name="Track11"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track11}
                />
              </div>

              <div className="form-group">
                <label>Track12</label>
                <input
                  type="text"
                  name="Track12"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track12}
                />
              </div>

              <div className="form-group">
                <label>Track13</label>
                <input
                  type="text"
                  name="Track13"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track13}
                />
              </div>

              <div className="form-group">
                <label>Track14</label>
                <input
                  type="text"
                  name="Track14"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track14}
                />
              </div>

              <div className="form-group">
                <label>Track15</label>
                <input
                  type="text"
                  name="Track15"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Track15}
                />
              </div>

              <div className="form-group">
                <label>Piste</label>
                <input
                  type="file"
                  multiple
                  name={this.state.Piste}
                  className="form-control"
                  onChange={(e) => {
                    for (let i = 0; i < e.target.files.length; ++i) {
                      const newFile = e.target.files[i];
                      newFile["track"] = Math.random();
                      this.setState({
                        Piste: [...this.state.Piste, newFile],
                      });
                      console.log(this.state.Piste);
                    }
                  }}
                  onBlur={handleBlur}
                />
              </div>

              <progress value={this.state.progress} max="100" />

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Ajouter
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default AddAlbum;
