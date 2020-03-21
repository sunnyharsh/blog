import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import Header from "../Common/Header";
class Contacts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  redirect = url => {
    window.location = url;
  };
  render() {
    const { _websiteColor } = this.props;
    console.log("hi");
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
            <Typography className="find" variant="h4">
              You can find me on...{" "}
            </Typography>
            <Grid>
              <Grid style={{ display: "flex", alignItems: "center" }}>
                <Grid>
                  <Typography style={{ display: "inline-block" }}>
                    <p
                      className="twitterLink"
                      onClick={() =>
                        this.redirect("https://github.com/sunnyharsh")
                      }
                    >
                      twitter
                    </p>
                  </Typography>
                </Grid>
                <Grid style={{ padding: "1rem 0rem 0.5rem 1rem" }}>
                  <Typography style={{ display: "inline-block" }}>
                    <TwitterIcon className="iconColor" />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-2rem"
                }}
              >
                <Grid>
                  <Typography style={{ display: "inline-block" }}>
                    <p
                      className="twitterLink"
                      onClick={() =>
                        this.redirect("https://github.com/sunnyharsh")
                      }
                    >
                      github
                    </p>
                  </Typography>
                </Grid>
                <Grid style={{ padding: "1rem 0rem 0.5rem 1rem" }}>
                  <Typography style={{ display: "inline-block" }}>
                    <GitHubIcon className="iconColor" />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-2rem"
                }}
              >
                <Grid>
                  <Typography style={{ display: "inline-block" }}>
                    <p
                      className="twitterLink"
                      onClick={() =>
                        this.redirect(
                          "https://www.linkedin.com/in/sunny-kumar-singh-94a385166/"
                        )
                      }
                    >
                      linkedien
                    </p>
                  </Typography>
                </Grid>
                <Grid style={{ padding: "1rem 0rem 0.5rem 1rem" }}>
                  <Typography style={{ display: "inline-block" }}>
                    <LinkedInIcon className="iconColor" />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-2rem"
                }}
              >
                <Grid container justify="center">
                  <Grid style={{ padding: "2rem 0rem" }}>
                    <Typography
                      className="find"
                      style={{ letterSpacing: "3px" }}
                    >
                      ------ or -------
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-2rem"
                }}
              >
                <Grid>
                  <Typography style={{ display: "inline-block" }}>
                    <p
                      className="twitterLink"
                      onClick={() =>
                        this.redirect(
                          "mailto:sunnyharshsunny12345@gmail.com.com"
                        )
                      }
                    >
                      sunny.kr.hr@gmail.com
                    </p>
                  </Typography>
                </Grid>
                <Grid style={{ padding: "1rem 0rem 0.5rem 1rem" }}>
                  <Typography style={{ display: "inline-block" }}>
                    <MailIcon className="iconColor" />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <style jsx="true">
          {`
            .find {
              color: ${_websiteColor && _websiteColor.textColor};
            }
            .iconColor {
              color: ${_websiteColor && _websiteColor.HeaderconColor};
            }
            .twitterLink {
              font-size: 1.2rem;
              color: ${_websiteColor && _websiteColor.textColor};
              line-height: 4;
              text-decoration: none;
              letter-spacing: 2.2px;
            }
            .twitterLink:hover {
              text-decoration: underline;
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
export default connect(mapState, mapDispatch)(Contacts);
