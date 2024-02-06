import React, { useEffect } from "react";
import { InfoSection, Pricing } from "../../components";

import config from "../../config.json";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));
    if (element) element.scrollIntoView();
  }, [location]);
  return (
    <>
      {config.contents.map((content, index) => (
        <InfoSection index={index} content={content} />
      ))}
    </>
  );
};

export default Home;
