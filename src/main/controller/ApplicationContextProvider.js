import React, {createContext, useEffect, useReducer, useState} from "react";

/**
 * Context Initialization
 * @type {React.Context<unknown>}
 */
export const ApplicationContext = createContext(null);

/**
 * Provider of Application Context - it works but there is an issue with different component
 * that it is required to double click to assign value to variable in context
 *
 * usage:
 * 1* const [state, dispatch] = useContext(ApplicationContext);
 * 2*
 * @param props
 * @returns {*}
 * @constructor
 */
export const ApplicationContextProvider = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /* 1*
  const initialState = {
    value: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Change This value to yours from constants": {
        return {
          ...state,
          value: action.data,
        }
      }

      default: {
        return state;
      }
    }
  };
  */

  /* 2*
  const [data, setData] = useState(null);

  useEffect(() => {
    //  Assigning operations
  }, []);

  const changeName = (data) => {
    setData(data);
  };
  */

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <ApplicationContext.Provider value={{}}
      // 1* value={useReducer(reducer, initialState)}
      // 2* value={{data, changeName}}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

ApplicationContextProvider.propTypes = {};

export default ApplicationContextProvider;
    