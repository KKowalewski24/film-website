import React from "react";
import propTypes from "prop-types";
import ErrorMessage from "../error-message/ErrorMessage";
// import LinearProgress from "@material-ui/core/LinearProgress";

/* Sample usage of axios get to copy and redone
----------------------------------------------------------------
const [data, setData] = useState();
const [isLoaded, setIsLoaded] = useState(false);
const [isError, setIsError] = useState(false);

useEffect(() => {
  axios.get(LINK, {
    params: {

    }
  })
    .then((res) => {
      setData(res.data);
      setIsLoaded(true);
      setIsError(false);
    })
    .catch((err) => {
      setIsLoaded(true);
      setIsError(true);
    });
}, []);
----------------------------------------------------------------
*/

export const FetchDataController = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  if (props.isLoaded) {
    if (!props.isError) {
      return (
        props.children
      );
    } else {
      return (
        <ErrorMessage
          title={props.errorMessageObject.title}
          message={props.errorMessageObject.message}
          redirectPath={props.errorMessageObject.redirectPath}
          redirectMessage={props.errorMessageObject.redirectMessage}
          styles={props.errorMessageObject.styles}
        />
      );
    }
  } else {
    return (
      //TODO REPLACE WITH SELECTED PROGRESS BAR
      <h3>Loading</h3>
      // <LinearProgress
      //   variant="query"
      //   color="secondary"
      // />
    );
  }
};

FetchDataController.propTypes = {
  isLoaded: propTypes.bool.isRequired,
  isError: propTypes.bool.isRequired,
  errorMessageObject: propTypes.object.isRequired,
};

export default FetchDataController;
