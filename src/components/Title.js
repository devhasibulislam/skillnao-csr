import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <section>
      <Helmet>
        <title>Plannao - {title}</title>
      </Helmet>
    </section>
  );
};

export default Title;
