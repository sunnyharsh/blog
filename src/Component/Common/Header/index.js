import React, { PureComponent } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import Brightness2SharpIcon from "@material-ui/icons/Brightness2Sharp";
import { primaryColors } from "../../../utils/webSitecolors/primaryColors";
import { secondaryColors } from "../../../utils/webSitecolors/secondaryColors";
import { websiteColor } from "../../../store/actions/index.action";
class Header extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (window.localStorage) {
      let color = localStorage.getItem("websitemode");
      this.setState(
        {
          websitemode: JSON.parse(color) ? JSON.parse(color) : false
        },
        () => {
          const { websitemode } = this.state;
          let colors = websitemode ? primaryColors : secondaryColors;
          this.props.$websiteColor(colors);
        }
      );
    }
  }
  colorChange = () => {
    this.setState(
      {
        websitemode: !this.state.websitemode
      },
      () => {
        const { websitemode } = this.state;
        let colors = websitemode ? primaryColors : secondaryColors;
        this.props.$websiteColor(colors);
        if (window.localStorage) {
          localStorage.setItem("websitemode", websitemode);
        }
      }
    );
  };

  render() {
    const { _websiteColor } = this.props;
    return (
      <React.Fragment>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ padding: "1rem 0rem" }}
        >
          <Grid item>
            <Link to="/">
              <HomeIcon
                style={{
                  fontSize: 30,
                  color: _websiteColor && _websiteColor.HeaderconColor
                }}
              />
            </Link>
          </Grid>
          <Grid item>
            <Grid style={{ display: "inline-block" }}>
              <Brightness2SharpIcon
                style={{
                  fontSize: 30,
                  color: _websiteColor && _websiteColor.HeaderconColor
                }}
                onClick={this.colorChange}
              />
            </Grid>
            <Grid style={{ display: "inline-block", paddingLeft: "1rem" }}>
              <Link to="/content">
                <MenuSharpIcon
                  style={{
                    fontSize: 30,
                    color: _websiteColor && _websiteColor.HeaderconColor
                  }}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapState = ({ websiteColor }) => {
  return {
    _websiteColor: websiteColor
  };
};
const mapDispatch = dispatchEvent => ({
  $websiteColor: values => dispatchEvent(websiteColor(values))
});
export default connect(mapState, mapDispatch)(withRouter(Header));
