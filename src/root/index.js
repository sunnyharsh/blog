import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import DocumentTitle from "react-document-title";
import { ThemeProvider } from "@material-ui/core/styles";
import store from "../store/index.store";
import theme from "../themes/index.theme";
import App from "../App/App";
class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <DocumentTitle title={"sunny-blog"}>
          <ThemeProvider theme={theme}>
            <Provider store={store()}>
              <React.Fragment>
                <BrowserRouter>
                  <Grid>
                    <App />
                  </Grid>
                </BrowserRouter>
              </React.Fragment>
            </Provider>
          </ThemeProvider>
        </DocumentTitle>
      </React.Fragment>
    );
  }
}
export default Index;
