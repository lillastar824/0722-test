import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./common/header";
import Popup from "./common/popup";
import Footer from "./common/footer";

import "./layout.scss";
import "./custom.scss";

const Layout = ({ children, bgcolor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [showPopup, setShowPopup] = useState(true);
  const handleHidePopup = () => {
    setShowPopup(false);
  };
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  return (
    <>
      <Popup shown={showPopup} onPopupClose={handleHidePopup} />
      <Header
        showPopup={handleShowPopup}
        siteTitle={data.site.siteMetadata.title}
        bgcolor={bgcolor}
      />
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      {/* <main>{children}</main> */}
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
