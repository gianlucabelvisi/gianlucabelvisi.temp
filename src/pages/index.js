import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        <Hero/>
        <Testimonials/>
    </Layout>
)

export default Index
