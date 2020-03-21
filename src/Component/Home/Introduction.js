import React, { PureComponent } from "react";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
class Introduction extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { _websiteColor } = this.props;
    return (
      <React.Fragment>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: `${window.innerHeight - 230}px` }}
        >
          <Grid>
            <Typography variant="h4" className="textColor">
              I'M
            </Typography>
            <Typography variant="h2" className="textColor">
              SUNNY KUMAR
            </Typography>
            <Typography variant="h6" className="textColor">
              FULL STACK DEV.
            </Typography>
          </Grid>
        </Grid>

        <style jsx="true">
          {`
            .textColor {
              font-weight: bold;
              color: ${_websiteColor && _websiteColor.textColor};
              animation-duration: 2s;
              animation-name: bounceIn;
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
export default connect(mapState, mapDispatch)(Introduction);
