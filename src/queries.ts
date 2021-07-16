import { gql } from "@apollo/client";

const MOVIE_NODE_FRAGMENT = gql`
  # MOVIE_NODE_FRAGMENT
`;

const TV_SHOW_NODE_FRAGMENT = gql`
  # TV_SHOW_NODE_FRAGMENT
`;

export const TRENDING_QUERY = gql`
  ${MOVIE_NODE_FRAGMENT}
  ${TV_SHOW_NODE_FRAGMENT}

  query trending {
    # ????
  }
`;
