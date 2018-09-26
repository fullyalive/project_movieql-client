import React from "react";
import style from "styled-components";
import { Query } from "react-apollo"; // react-apollo는 리액트에 연결하는 방법
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "loading";
        if (error) return "something happened";
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ));
      }}
    </Query>
  </Container>
);

export default Home;
