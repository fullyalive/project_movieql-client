// client.js
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql-osezlvyqsg.now.sh/" // 어떻게 graphQL API를 찾느냐에 대한 것
});

export default client;