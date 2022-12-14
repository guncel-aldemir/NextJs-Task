import React from "react";
import Navbar from "../components/navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
const Restaurants = () => {
  return (
<div>
    <Navbar/>
    <Header/>
    <Main/>
    <Footer/>
</div>
  )
};

export default Restaurants;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["navbar","header","main","footer","footerOne","footerTwo"],
     
    )),
  },
});