import React, { PureComponent } from "react";
import { Grid } from "@material-ui/core";
import Header from "../Common/Header";
import Introduction from "./Introduction";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (window.localStorage) {
      let isHomeSwitch = localStorage.getItem("isHomeSwitch");
      this.setState({
        isHome: JSON.parse(isHomeSwitch) ? JSON.parse(isHomeSwitch) : false
      });
    }
  }
  homeDatahange = data => {
    if (window.localStorage) {
      localStorage.setItem("isHomeSwitch", data);
    }
    this.setState({
      isHome: data
    });
  };
  render() {
    const { isHome } = this.state;
    return (
      <React.Fragment>
        <Grid>
          <Header homeDatahange={this.homeDatahange} />
        </Grid>
        <Grid>
          <Introduction />{" "}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Home;
