import React from "react";
import {
  Banner,
  Brands,
  Browse,
  Explore,
  GIftSets,
  LandPage,
  Products,
  AdSection
} from "../../components";

const LandingPage = () => {
  return (
    <section>
      {/* Landpage  */}
      <LandPage />
      {/* brands  */}
      <Brands />
      {/* explore  */}
      <Explore />
      {/* Browse range  */}
      <Browse />
      {/* our product  */}
      <Products />
      {/* advertisment section  */}
      <AdSection />
      {/* gift sets section  */}
      <GIftSets />
      {/* banner  */}
      <Banner />
    </section>
  );
};

export default LandingPage;
