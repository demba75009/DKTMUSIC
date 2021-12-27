import { Component } from "react";
import "./App.css";
import {
  Album,
  AddAlbum,
  AlbumDetail,
  Tendance,
  Single,
  Favoris,
  TheHeader,
  SearchBar,
} from "./features";

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TheHeader />

          <Switch>
            <Route exact path="/tendance" component={Tendance} />
            <Route exact path="/Album" component={Album} />
            <Route exact path="/Album/AlbumDetail" component={AlbumDetail} />
            <Route exact path="/Favoris" component={Favoris} />
            <Route exact path="/AddAlbum" component={AddAlbum} />
            <Route exact path="/Album/Name" component={SearchBar} />

            <Route exact path="/Album/AlbumDetail/Single" component={Single} />
            <Redirect to="/Album" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
