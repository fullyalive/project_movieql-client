import React from "react";
import { Query } from "react-apollo"; // react-apollo는 리액트에 연결하는 방법
import { HOME_PAGE } from "./queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something happened</span>;
      if (data) {
        return data.movies.map(movie => (
          <h2 key={movie.id}>
            {movie.title} / {movie.rating}
          </h2>
        ));
      }
    }}
  </Query>
);

export default Home;
