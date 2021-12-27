const updateTrack = (piste) => {
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

  const p = piste.toString();

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
  } else {
    this.setState({ Track: "" });
  }
};

export default updateTrack;
