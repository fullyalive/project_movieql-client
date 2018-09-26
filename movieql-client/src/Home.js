import React from "react";
import Query from "react-apollo"; // react-apollo는 리액트에 연결하는 방법
import { HOME_PAGE } from "./queries";

const Home = () => <Query query={HOME_PAGE}>{}</Query>;

export default Home;
