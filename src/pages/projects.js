import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VisibleBR from '../components/UI/VisibleBR/VisibleBR';

import GlobalStyles from "../themes/globals"
import Theme from "../themes/theme"
import { colors } from "../themes/theme"

import Card from "../components/UI/Card/CardSides"
import { FaBookOpen, FaComment, FaTree } from "react-icons/fa"

const Header = styled.header`
display: flex;
flex-direction: column;
width: 100vw;
justify-content: space-between;
height: 20vh;
background-color: ${colors.deepblue};
& h2, & h3 {
    display: block;
    margin: 0 auto;
}

& h2 {
    padding-top: 1.75rem;
    color: ${colors.offwhite};
    font-size: 2rem;
    line-height: 3rem;
    width: 85%;
}

& h3 {
    text-align: end;
    font-weight: 400;
    padding-bottom: 1.75rem;
    color: ${colors.offwhite};
    font-size: 1.5rem;
    width: 85vw;
}
`

const ProjectGrid = styled.main`
display: flex;
justify-content: space-around;
max-width: 85vw;
margin: auto;`

const projects = () => {
    return (
        <>
        <Layout>
            <Theme>
                <Header>
                    <h2>Here I've catalogued the knick-knacks I've made along the way.</h2>
                    <h3>Click a card icon to open a project.</h3>
                </Header>
                <ProjectGrid>
                <Card 
                icon={<Link to="/story"><FaBookOpen onClick={(e) => {e.stopPropagation()}}/></Link>} 
                title={"Vistelse"} 
                description={`A 'choose your own adventure' experience`}/>
                <Card 
                icon={<FaTree onClick={(e) => {e.stopPropagation()}}/>} 
                title={"Canvas Animation"} 
                description={`Fractal animation.`}/>
                <Card 
                icon={<FaComment onClick={(e) => {e.stopPropagation()}}/>} 
                title={"Chat Application"} 
                description={`No storage socket.io application`}/>
                </ProjectGrid>
            </Theme>
        </Layout>
        <GlobalStyles />
        </>
    )
}

export default projects