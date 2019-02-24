import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const uri = "https://us1.prisma.sh/saul-shanabrook-202a93/coopteaching/dev";
export const client = new ApolloClient({
  uri
});

export const POSTS = gql`
  {
    posts {
      id
      topic
      location
      description
      expectations
      name
      email
      phone
      createdAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($post: PostCreateInput!) {
    createPost(data: $post) {
      id
      topic
      location
      description
      expectations
      name
      email
      phone
      createdAt
    }
  }
`;
