import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { HomepageHeader } from "../components/HomepageHeader";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { UnderConstructionComponent } from "../components/UnderConstructionComponent";
import { FooterView } from "../components/FooterView";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const isUnderConstruction = false;

  return isUnderConstruction ? (
    <UnderConstructionComponent />
  ) : (
    <Layout title={siteConfig.title}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <FooterView />
    </Layout>
  );
}
