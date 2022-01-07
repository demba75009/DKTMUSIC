import { Component } from "react";
import Service from "../../../config/Api.Config";
import AlbumDetailItem from "./AlbumDetailItem/AlbumDetailItem";
class AlbumDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Album: [],
      index: "",
    };
  }

  componentDidMount() {
    let userId;
    const params = new URL(window.location.href);

    userId = params.searchParams.get("id");

    this.setState({ index: userId });
    Service.get("Album.json").then((res) => {
      console.log(res);
      let liste = [];

      for (let key in res.data) {
        liste.unshift({
          ...res.data[key],
          id: key,
        });
      }

      this.setState({ Album: liste });
    });
  }

  Single = (id1) => {
    let SingleId;
    console.log(id1);
    const params = new URL(window.location.href);

    SingleId = params.searchParams.get("id");

    this.props.history.push(
      `/Album/AlbumDetail/Single?id=${SingleId}&Piste=${id1}`
    );
  };

  ChangeId1 = (id) => {
    this.Single(id);
  };
  ChangeId2 = (id) => {
    this.Single(id);
  };
  ChangeId3 = (id) => {
    this.Single(id);
  };
  ChangeId4 = (id) => {
    this.Single(id);
  };
  ChangeId5 = (id) => {
    this.Single(id);
  };
  ChangeId6 = (id) => {
    this.Single(id);
  };
  ChangeId7 = (id) => {
    this.Single(id);
  };
  ChangeId8 = (id) => {
    this.Single(id);
  };
  ChangeId9 = (id) => {
    this.Single(id);
  };
  ChangeId10 = (id) => {
    this.Single(id);
  };
  ChangeId11 = (id) => {
    this.Single(id);
  };
  ChangeId12 = (id) => {
    this.Single(id);
  };
  ChangeId13 = (id) => {
    this.Single(id);
  };
  ChangeId14 = (id) => {
    this.Single(id);
  };
  ChangeId15 = (id) => {
    this.Single(id);
  };
  ChangeId16 = (id) => {
    this.Single(id);
  };
  ChangeId17 = (id) => {
    this.Single(id);
  };
  ChangeId18 = (id) => {
    this.Single(id);
  };

  back = () => {
    this.props.history.push("/Album");
  };
  render() {
    return (
      <div className="App">
        {this.state.Album.filter((e) => e.id === this.state.index).map((A) => (
          <AlbumDetailItem
            key={A.id}
            Annee={A.Annee}
            nomAlbum={A.nomAlbum}
            img={A.img}
            Artiste={A.Artiste}
            Piste={A.Piste}
            back={() => {
              this.back();
            }}
            ChangeId1={() => {
              let id = [0, 1];
              this.ChangeId1(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId2={() => {
              let id = [1, 2];
              this.ChangeId2(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId3={() => {
              let id = [2, 3];
              this.ChangeId3(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId4={() => {
              let id = [3, 4];
              this.ChangeId4(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId5={() => {
              let id = [4, 5];
              this.ChangeId5(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId6={() => {
              let id = [5, 6];
              this.ChangeId6(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId7={() => {
              let id = [6, 7];
              this.ChangeId7(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId8={() => {
              let id = [7, 8];
              this.ChangeId8(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId9={() => {
              let id = [8, 9];
              this.ChangeId9(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId10={() => {
              let id = [9, 10];
              this.ChangeId10(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId11={() => {
              let id = [10, 11];
              this.ChangeId11(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId12={() => {
              let id = [11, 12];
              this.ChangeId12(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId13={() => {
              let id = [12, 13];
              this.ChangeId13(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId14={() => {
              let id = [13, 14];
              this.ChangeId14(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId15={() => {
              let id = [14, 15];
              this.ChangeId15(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId16={() => {
              let id = [15, 16];
              this.ChangeId15(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId17={() => {
              let id = [16, 17];
              this.ChangeId15(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            ChangeId18={() => {
              let id = [17, 18];
              this.ChangeId15(id);
              this.Single(A.Piste.slice(id[0], id[1]));
            }}
            Track1={A.Track1}
            Track2={A.Track2}
            Track3={A.Track3}
            Track4={A.Track4}
            Track5={A.Track5}
            Track6={A.Track6}
            Track7={A.Track7}
            Track8={A.Track8}
            Track9={A.Track9}
            Track10={A.Track10}
            Track11={A.Track11}
            Track12={A.Track12}
            Track13={A.Track13}
            Track14={A.Track14}
            Track15={A.Track15}
            Track16={A.Track16}
            Track17={A.Track17}
            Track18={A.Track18}
          />
        ))}
      </div>
    );
  }
}

export default AlbumDetail;
