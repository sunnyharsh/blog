import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Header from "../Common/Header";
import { Grid, Typography } from "@material-ui/core";

class About extends PureComponent {
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
          <Grid item xs={4}>
            <Typography variant="h1" className="textColor">
              Hello
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <Grid style={{ display: "flex" }}>
              <Grid className="varticalLine"></Grid>
              <Grid>
                {" "}
                <Typography variant="h3" className="textColor">
                  {" "}
                  I'm Sunny
                </Typography>
                <Typography variant="p" className="aboutMe">
                  I'm a Full-Stack Developer (MEAN/MERN) 🤘. I was born in 1994
                  (calculate my age). Currently living in Banglore, India. Done
                  bachelors in IT and MCA (finally 🕺). Besides that, I make
                  stupid stuff on the Web 🕸. I code with React, Angular and
                  Node.js (w/ GraphQl). Interested in DevOps and Machine
                  Learning 🤖 (next goal). I'm also learning Python 🐍. Read
                  about what I'm learning on my blog. Apart from coding I also
                  debug 🐞 code and play Cricket 🎸.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <style jsx="true">
          {`
            .textColor {
              color: ${_websiteColor && _websiteColor.textColor};
            }
            .varticalLine {
              height: 45%;
              width: 3px;
              background: ${_websiteColor && _websiteColor.textColor};
            }
            .aboutMe {
              line-height: 2;
              font-size: 1.2rem;
              color: ${_websiteColor && _websiteColor.textColor};
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
export default connect(mapState, mapDispatch)(About);
