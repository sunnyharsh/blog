import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
class Content extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { _websiteColor } = this.props;
    return (
      <React.Fragment>
        <Grid>
          <Header homeDatahange={this.homeDatahange} />
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: `${window.innerHeight - 230}px` }}
        >
          <Grid>
            <Link to="/" className="links">
              <Typography variant="h3" className="urls">
                HOME
              </Typography>
            </Link>
            <Link to="/" className="links">
              <Typography variant="h3" className="urls">
                PROJECTS
              </Typography>
            </Link>
            <Link to="/" className="links">
              <Typography variant="h3" className="urls">
                BLOG
              </Typography>
            </Link>
            <Link to="/about" className="links">
              <Typography variant="h3" className="urls">
                ABOUT
              </Typography>
            </Link>
            <Link to="/contact" className="links">
              <Typography variant="h3" className="urls">
                CONTACT
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <style jsx="true">
          {`
            .links {
              text-decoration: none;
            }
            .urls {
              color: ${_websiteColor && _websiteColor.textColor};
              padding: 1rem 0rem;
              animation-duration: 2s;
              animation-name: bounceIn;
            }
            .urls:hover {
              color: #0746a5;
            }
            @keyframes bounceIn {
              0% {
                transform: scale(0.1);
                opacity: 0;
              }
              60% {
                transform: scale(1.2);
                opacity: 1;
              }
              100% {
                transform: scale(1);
              }
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
export default connect(mapState, mapDispatch)(Content);
