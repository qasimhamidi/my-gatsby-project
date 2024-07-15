import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import ProfessionalSummary from "../components/ProfessionalSummary";
import WorkHistory from "../components/WorkHistory";
import Education from "../components/Education";
import TechnicalSkills from "../components/TechnicalSkills";
import Languages from "../components/Languages";
import Skills from "../components/Skills";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <ProfessionalSummary />
      <WorkHistory />
      <Education />
      <TechnicalSkills />
      <Languages />
      <Skills />
    </Layout>
  );
};

export default IndexPage;
