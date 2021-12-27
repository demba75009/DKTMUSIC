import { Component } from "react";
import Service from "../../../config/Api.Config";
import SingleItem from "./SingleItem/SingleItem";
class Single extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Album: [],
      index: "",
      Piste: "",
      Track: "",
      Lecture: true,
    };
  }

  updateTrack = (piste) => {
    const p1 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(0, 1)
    );

    const t1 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track1
    );

    const p2 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(1, 2)
    );

    const t2 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track2
    );

    const p3 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(2, 3)
    );

    const t3 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track3
    );

    const p4 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(3, 4)
    );

    const t4 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track4
    );

    const p5 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(4, 5)
    );

    const t5 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track5
    );

    const p6 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(5, 6)
    );

    const t6 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track6
    );

    const p7 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(6, 7)
    );

    const t7 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track7
    );

    const p8 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(7, 8)
    );

    const t8 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track8
    );

    const p9 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(8, 9)
    );

    const t9 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track9
    );

    const p10 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(9, 10)
    );

    const t10 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track10
    );

    const p11 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(10, 11)
    );

    const t11 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track11
    );
    const p12 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(11, 12)
    );

    const t12 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track12
    );
    const p13 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(12, 13)
    );

    const t13 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track13
    );

    const p14 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(13, 14)
    );

    const t14 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track14
    );

    const p15 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(14, 15)
    );

    const t15 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track15
    );

    const p16 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(15, 16)
    );

    const t16 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track16
    );

    const p17 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(16, 17)
    );

    const t17 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track17
    );

    const p18 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Piste.slice(17, 18)
    );

    const t18 = this.state.Album.filter((e) => e.id === this.state.index).map(
      (a) => a.Track18
    );
    let p = piste.toString();

    const first = p1[0].toString();
    const second = p2[0].toString();
    const third = p3[0].toString();
    const four = p4[0].toString();
    const five = p5[0].toString();
    const six = p6[0].toString();
    const seven = p7[0].toString();
    const eight = p8[0].toString();
    const nine = p9[0].toString();
    const ten = p10[0].toString();
    const eleven = p11[0].toString();
    const twelve = p12[0].toString();
    const thirteen = p13[0].toString();
    const fourteen = p14[0].toString();
    const fifthteen = p15[0].toString();
    const sixteen = p16[0].toString();
    const seventeen = p17[0].toString();
    const eightteen = p18[0].toString();

    if (p === first) {
      this.setState({ Track: t1.toString() });
    } else if (p === second) {
      this.setState({ Track: t2.toString() });
    } else if (p === third) {
      this.setState({ Track: t3.toString() });
    } else if (p === four) {
      this.setState({ Track: t4.toString() });
    } else if (p === five) {
      this.setState({ Track: t5.toString() });
    } else if (p === six) {
      this.setState({ Track: t6.toString() });
    } else if (p === seven) {
      this.setState({ Track: t7.toString() });
    } else if (p === eight) {
      this.setState({ Track: t8.toString() });
    } else if (p === nine) {
      this.setState({ Track: t9.toString() });
    } else if (p === ten) {
      this.setState({ Track: t10.toString() });
    } else if (p === eleven) {
      this.setState({ Track: t11.toString() });
    } else if (p === twelve) {
      this.setState({ Track: t12.toString() });
    } else if (p === thirteen) {
      this.setState({ Track: t13.toString() });
    } else if (p === fourteen) {
      this.setState({ Track: t14.toString() });
    } else if (p === fifthteen) {
      this.setState({ Track: t15.toString() });
    } else if (p === sixteen) {
      this.setState({ Track: t16.toString() });
    } else if (p === seventeen) {
      this.setState({ Track: t17.toString() });
    } else if (p === eightteen) {
      this.setState({ Track: t18.toString() });
    }
  };

  back = (id) => {
    this.props.history.push(`/Album/AlbumDetail/?id=${id}`);
  };

  previous = (piste) => {
    const piste0 = this.state.Album.filter(
      (e) => e.id === this.state.index
    ).map((p, i) => p.Piste.slice(0, 1));

    console.log(piste0.toString());

    const j = piste.toString();

    if (piste0.toString() !== j) {
      const nodes = this.state.Album.filter(
        (e) => e.id === this.state.index
      ).map((p, i) => ((i = p.Piste.indexOf(j)), p.Piste[i - 1]));
      console.log(nodes);

      this.updateTrack(nodes);

      this.setState({ Piste: nodes });

      this.setState({ Lecture: true });
    } else {
      this.repeat();
      this.setState({ Piste: j });
      this.setState({ Lecture: true });
      this.updateTrack(piste);
    }
  };

  next = (piste) => {
    const piste0 = this.state.Album.filter(
      (e) => e.id === this.state.index
    ).map((p, i) => p.Piste.slice(0, 1));

    const j = piste.toString();

    console.log(j);

    const nodes = this.state.Album.filter((e) => e.id === this.state.index).map(
      (p, i) => ((i = p.Piste.indexOf(j)), p.Piste[i + 1])
    );

    if (nodes[0] === undefined) {
      this.setState({ Piste: piste0.toString() });
      this.setState({ Lecture: true });
      this.updateTrack(piste0);
    } else {
      console.log(nodes);

      this.setState({ Piste: nodes });
      this.setState({ Lecture: true });
      this.updateTrack(nodes);
    }
  };

  stop = () => {
    const audio = document.querySelector("audio");

    audio.pause();
    this.setState({ Lecture: false });
  };

  play = () => {
    const play = document.querySelector("audio");

    play.play();
    this.setState({ Lecture: true });
  };

  repeat = () => {
    const repeat = document.querySelector("audio");
    repeat.currentTime = 0;
    this.play();
  };

  componentDidMount() {
    let userId;
    let PisteId;

    let audio = document.querySelector("audio");

    const params = new URL(window.location.href);

    userId = params.searchParams.get("id");
    PisteId = params.search.slice(31);
    console.log(PisteId);

    this.setState({ index: userId });

    this.setState({ Piste: PisteId });

    Service.get("Album.json").then((res) => {
      console.log(res);
      let liste = [];

      for (let key in res.data) {
        liste.unshift({
          ...res.data[key],
          id: key,
        });
      }

      console.log(this.state.Piste);

      this.setState({ Album: liste });
      this.updateTrack(this.state.Piste);
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.Album.filter((e) => e.id === this.state.index).map((A) => (
          <SingleItem
            key={A.id}
            Annee={A.Annee}
            nomAlbum={A.nomAlbum}
            Track1={this.state.Track}
            Artiste={A.Artiste}
            img={A.img}
            Piste={this.state.Piste}
            back={() => this.back(A.id)}
            previous={() => this.previous(this.state.Piste)}
            next={() => this.next(this.state.Piste)}
            stop={() => this.stop()}
            play={() => this.play()}
            lecture={this.state.Lecture}
          />
        ))}
      </div>
    );
  }
}

export default Single;
