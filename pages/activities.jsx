import React from "react";
import Navbar from "../components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "../components/header";
import Main from "../components/main";
const Activities = () => {
  return (<div>
    <Navbar/>
    <Header/>
    <Main/>
  </div>)
};

export default Activities;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["navbar","header","main"],
     
    )),
  },
});