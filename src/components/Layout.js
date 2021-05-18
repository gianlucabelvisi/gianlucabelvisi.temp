/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'

import Header from './Header'
import {GlobalStyle} from "./styles/GlobalStyles";
import Footer from "./Footer";

const Layout = ({children}) => {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout
