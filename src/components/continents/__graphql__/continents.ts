// tslint:disable
import * as Types from "../../../graphql/types.d";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";

export type ContinentsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ContinentsQuery = { __typename?: "Query" } & {
  continents: Array<
    { __typename?: "Continent" } & Pick<Types.Continent, "name" | "code">
  >;
};

export const ContinentsDocument = gql`
  query Continents {
    continents {
      name
      code
    }
  }
`;

/**
 * __useContinentsQuery__
 *
 * To run a query within a React component, call `useContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ContinentsQuery,
    ContinentsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ContinentsQuery, ContinentsQueryVariables>(
    ContinentsDocument,
    baseOptions
  );
}
export function useContinentsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ContinentsQuery,
    ContinentsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ContinentsQuery,
    ContinentsQueryVariables
  >(ContinentsDocument, baseOptions);
}
export type ContinentsQueryHookResult = ReturnType<typeof useContinentsQuery>;
export type ContinentsLazyQueryHookResult = ReturnType<
  typeof useContinentsLazyQuery
>;
export type ContinentsQueryResult = ApolloReactCommon.QueryResult<
  ContinentsQuery,
  ContinentsQueryVariables
>;
