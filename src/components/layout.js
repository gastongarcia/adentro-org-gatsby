import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "./layout.css";
import "../css/style.css";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="flex flex-col flex-1 md:justify-center w-full md:w-3/5 mx-auto px-4 py-8 md:p-8">
            {children}
          </div>

          <Footer />
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
