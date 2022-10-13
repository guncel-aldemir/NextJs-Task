import React from "react";
import Navbar from "../components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "../components/header";
const Sport = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
    </div>
  )
};

export default Sport;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["navbar","header"],
     
    )),
  },
});