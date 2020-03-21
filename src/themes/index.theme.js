import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
export default createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "0.2rem",
        color: "#707076",
        border: "1px solid #A3AEB9"
      },

      underline: {
        "&:after": {
          borderBottom: "none"
        },
        "&:before": {
          borderBottom: "none"
        },
        "&:hover": {}
      }
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#fff ",
        borderRadius: "2px",
        color: "grey"
      },
      underline: {
        "&:before": {
          borderBottom: "none"
        },
        "&:after": {
          borderBottom: "none"
        }
      }
    },

    //Drawer
    MuiListItemIcon: {
      root: {
        width: "1rem"
      }
    },
    //label of input box
    MuiFormLabel: {
      root: {
        color: "grey",
        "&$focused": {
          fontSize: "1rem",
          color: "grey",
          borderBottom: "none",
          margin: "0rem 0.2rem"
        },
        "&$error": {
          color: "grey"
        }
      }
    },
    MuiFormHelperText: {
      root: {
        "&$error": {
          color: "red"
        }
      },

      contained: {
        marginLeft: "0px"
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#fff",
        "&$focused": {
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#fff",
          borderBottom: "none"
        }
      },
      underline: {
        "&:before": {
          borderBottom: "none"
        },
        "&:after": {
          borderBottom: "none"
        },
        "&:hover": {
          borderBottom: "none",
          backgroundColor: "#fff"
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: "#fff",
        backgroundColor: "#1976d2"
      }
    },

    MuiCardActionArea: {
      focusHighlight: {
        opacity: 0
      }
    },
    MuiButton: {
      textPrimary: {
        color: "#fff !important",
        "&:hover": {}
      },

      outlined: {
        "&$disabled": {
          border: "1px solid #374f21 !important",
          color: "#374f21 !important"
        }
      },
      text: {
        "&$disabled": {
          // color: "#002D61 !important",
          // fontSize: "14px"
        }
      },
      raised: {
        boxShadow: "none"
      }
    },
    MuiRadio: {
      root: {
        color: "grey",
        fontSize: "42px"
      }
    },
    MuiIconButton: {
      root: {
        padding: "0px"
      },
      label: {
        color: "#002D61"
      }
    },
    MuiSvgIcon: {
      root: {
        // border: "1px solid grey"
      }
    }
  },
  palette: {
    primary: {
      main: "#000", //color red here
      contrastText: "#fff"
    },
    secondary: {
      main: "#15b4f1",
      contrastText: "#15b4f1"
    },
    thirdColor: {
      main: "green",
      contrastText: "#fff"
    },
    text: {
      primary: "#000",
      secondary: "#fff"
    },
    background: {
      default: "#0f2140"
    }
  },
  typography: {
    useNextVariants: true
  }
});
