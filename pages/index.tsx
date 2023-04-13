import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import PopularJobLocation from "../components/Home/PopularJobLocation";
import JobCategories from "../components/Home/JobCategories";

const Home: NextPage = () => {
  return <>
  <Hero />
  <PopularJobLocation />
  <JobCategories />
  </>
};

export default Home;
