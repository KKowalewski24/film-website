import React from "react";
import TextPanel from "../../../component/text-panel/TextPanel";
import GlobalStyles from "../../../main/GlobalStyles";

export const ContactPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-md text-white">
      <TextPanel
        title={"Contact"}
        content={
          "Kamil Kowalewski\n" +
          "Email: KamilKowalewski@gmail.com\n" +
          "GitHub: KKowalewski24\n"
        }
        backgroundColorStyles={globalStyles.materialBlueBackground}
        isContentCentered={true}
      />
    </div>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
    