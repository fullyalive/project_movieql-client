import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo"; // react-apollo는 리액트에 연결하는 방법
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #b4b4b4;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Header>
      <span style={{ fontSize: 24, fontWeight: "700" }}>
        Best Movie over rating 8.5
      </span>
      <span style={{ fontSize: 14 }}>by fullyalive</span>
    </Header>
    <CardContainer>
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
    </CardContainer>
  </Container>
);

export default Home;
