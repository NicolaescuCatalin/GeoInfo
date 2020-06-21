// tslint:disable
import * as Types from "../../../graphql/types.d";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";

export type AllCountriesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type AllCountriesQuery = { __typename?: "Query" } & {
  countries: Array<
    { __typename?: "Country" } & Pick<Types.Country, "name" | "code">
  >;
};

export const AllCountriesDocument = gql`
  query AllCountries {
    countries {
      name
      code
    }
  }
`;

/**
 * __useAllCountriesQuery__
 *
 * To run a query within a React component, call `useAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCountriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    AllCountriesQuery,
    AllCountriesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    AllCountriesQuery,
    AllCountriesQueryVariables
  >(AllCountriesDocument, baseOptions);
}
export function useAllCountriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AllCountriesQuery,
    AllCountriesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    AllCountriesQuery,
    AllCountriesQueryVariables
  >(AllCountriesDocument, baseOptions);
}
export type AllCountriesQueryHookResult = ReturnType<
  typeof useAllCountriesQuery
>;
export type AllCountriesLazyQueryHookResult = ReturnType<
  typeof useAllCountriesLazyQuery
>;
export type AllCountriesQueryResult = ApolloReactCommon.QueryResult<
  AllCountriesQuery,
  AllCountriesQueryVariables
>;
