import {makeStyles} from "@material-ui/core/styles";

export const GlobalStyles = makeStyles(it => ({
  materialBlueBackground: {
    backgroundColor: it.palette.primary.main,
  },
  materialBlueFont: {
    color: it.palette.primary.main,
  },
}));

export default GlobalStyles;
    