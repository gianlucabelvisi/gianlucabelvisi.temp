import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import Stats from "../components/Stats";
import Email from "../components/Email";

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        <Hero/>
        <Trips heading="My favorite stuff"/>
        <Testimonials/>
        <Stats/>
        <Email/>
    </Layout>
)

export default Index
