import React from "react";
import requests from "../Request";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { UserAuth } from "../contextAPI/Authcontext";
import Modal from "../components/Modal";

const Home = () => {
  const { showModal } = UserAuth();
  return (
    <div className="scrollbar-hide">
      {showModal && (<Modal />)}
    {/* <Modal /> */}
      <Banner />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Action" fetchURL={requests.requestAction} />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
