import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import Stats from "../components/Stats";

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        <Hero/>
        <Trips heading="My favorite stuff"/>
        <Testimonials/>
    </Layout>
)

export default Index
