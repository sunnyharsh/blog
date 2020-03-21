import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Routes from "../routing/index.routing";
import { Grid } from "@material-ui/core";
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { _websiteColor } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={11}>
            <Routes />
          </Grid>
        </Grid>
        <style jsx>
          {`
            body {
              background-color: ${_websiteColor && _websiteColor.bgColor};
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

const mapState = ({ websiteColor }) => {
  return {
    _websiteColor: websiteColor
  };
};
const mapDispatch = dispatchEvent => ({});
export default connect(mapState, mapDispatch)(App);
