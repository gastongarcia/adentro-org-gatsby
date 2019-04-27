import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import './layout.css'
import Navbar from "./navbar";
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
        
        <div className>
          <Navbar />

          <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>

          <Footer />
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
