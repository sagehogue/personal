import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import GlobalStyles from "../themes/globals"
import Theme from "../themes/theme"
import { colors } from "../themes/theme"


const Error404 = () => {
    return (
        <>
        <Layout>
            <Theme>
                <main style={{backgroundColor: `${colors.offwhite}`}}>
                <h1>Uh oh! Looks like you loaded a page that isn't here.</h1>
                <h3>Click <Link to="/">here</Link> to go back.</h3>
                </main>
            </Theme>
        </Layout>
        <GlobalStyles />
        </>
    )
}

export default Error404