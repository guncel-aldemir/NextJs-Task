import React from "react";
import Navbar from "../components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "../components/header";
import Main from "../components/main";
const Conference = () => {
  return (<div>
    <Navbar/>
    <Header/>
    <Main/>
  </div>)
};

export default Conference;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["navbar","header","main"],
     
    )),
  },
});