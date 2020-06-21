// tslint:disable
import * as Types from "../../../graphql/types.d";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";

export type CountriesOnContinentQueryVariables = Types.Exact<{
  continentCode: Types.Scalars["String"];
}>;

export type CountriesOnContinentQuery = { __typename?: "Query" } & {
  countries: Array<
    { __typename?: "Country" } & Pick<Types.Country, "name" | "code">
  >;
};

export const CountriesOnContinentDocument = gql`
  query CountriesOnContinent($continentCode: String!) {
    countries(filter: { continent: { eq: $continentCode } }) {
      name
      code
    }
  }
`;

/**
 * __useCountriesOnContinentQuery__
 *
 * To run a query within a React component, call `useCountriesOnContinentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesOnContinentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesOnContinentQuery({
 *   variables: {
 *      continentCode: // value for 'continentCode'
 *   },
 * });
 */
export function useCountriesOnContinentQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CountriesOnContinentQuery,
    CountriesOnContinentQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    CountriesOnContinentQuery,
    CountriesOnContinentQueryVariables
  >(CountriesOnContinentDocument, baseOptions);
}
export function useCountriesOnContinentLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CountriesOnContinentQuery,
    CountriesOnContinentQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    CountriesOnContinentQuery,
    CountriesOnContinentQueryVariables
  >(CountriesOnContinentDocument, baseOptions);
}
export type CountriesOnContinentQueryHookResult = ReturnType<
  typeof useCountriesOnContinentQuery
>;
export type CountriesOnContinentLazyQueryHookResult = ReturnType<
  typeof useCountriesOnContinentLazyQuery
>;
export type CountriesOnContinentQueryResult = ApolloReactCommon.QueryResult<
  CountriesOnContinentQuery,
  CountriesOnContinentQueryVariables
>;
