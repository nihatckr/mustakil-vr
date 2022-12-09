import Layout from "../layout";
import Hero from "../components/Hero";

import FeaturesHero from "../components/FeaturesHero";
import React, { useState } from "react";
import { featuresOne, featuresThree, featuresTwo, price } from "../data";
import Pricing from "../components/Pricing";
import FeaturesKey from "../components/FeaturesKey";

export default function Home() {
  const [one, setOne] = useState(featuresOne);
  const [two, setTwo] = useState(featuresTwo);
  const [three, setThree] = useState(featuresThree);
  const [prices, setPrices] = useState(price);
  return (
    <Layout>
      <Hero />
      <FeaturesHero data={one} />
      <FeaturesHero data={two} />
      <FeaturesHero data={three} />
      <Pricing data={price} />
      <FeaturesKey />
    </Layout>
  );
}
