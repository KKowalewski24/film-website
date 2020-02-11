import React from "react";
import TextPanel from "../../../component/text-panel/TextPanel";
import GlobalStyles from "../../../main/GlobalStyles";

export const AboutPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-md text-white">
      <TextPanel
        title={"About Project"}
        content={"Film Website is decicated to movie enthusiasts. " +
        "Provides possibility to search movie, read information about them. " +
        "Registered user can add movie to favourites and share best movies with friends."}
        backgroundColorStyles={globalStyles.materialBlueBackground}
      />
    </div>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
    