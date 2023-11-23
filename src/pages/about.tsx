import { AboutSection } from "../components/AboutSection";
import { NextSeo } from 'next-seo';
import { Layout } from '../app/layout';

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />
      <AboutSection/>
    </Layout>
  );
}