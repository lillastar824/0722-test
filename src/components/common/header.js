import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = ({ siteTitle, bgcolor, showPopup }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [scrolledTop, setScrolledTop] = useState(true);
  const handleCollapse = (value) => {
    setCollapsed(!collapsed);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setScrolledTop(true);
      } else {
        setScrolledTop(false);
      }
    });
  }

  return (
    <div
      className={`${
        scrolledTop ? "" : "fixed-top top_menu"
      }  px-12px py-12px py-md-26px bg-${bgcolor} ${
        collapsed ? "" : "h-100"
      }`}
    >
      <Container>
      </Container>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
