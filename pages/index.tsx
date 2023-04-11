import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import PopularJobLocation from "@/components/Home/PopularJobLocations";

const Home: NextPage = () => {
  return <>
  <Hero />
  <PopularJobLocation />
  </>
};

export default Home;
