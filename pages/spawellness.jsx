import React from "react";
import Navbar from "../components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "../components/header";
const Spawellness = () => {
  return(
    <div>
      <Navbar/>
      <Header/>
    </div>
  )
};

export default Spawellness ;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["navbar","header"],
     
    )),
  },
});