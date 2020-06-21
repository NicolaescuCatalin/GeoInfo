// tslint:disable
import * as Types from "../../../graphql/types.d";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";

export type CountryInfoQueryVariables = Types.Exact<{
  code: Types.Scalars["ID"];
}>;

export type CountryInfoQuery = { __typename?: "Query" } & {
  country?: Types.Maybe<
    { __typename?: "Country" } & Pick<
      Types.Country,
      "name" | "native" | "phone" | "capital" | "currency" | "emoji"
    > & {
        continent: { __typename?: "Continent" } & Pick<Types.Continent, "name">;
        languages: Array<
          { __typename?: "Language" } & Pick<Types.Language, "code" | "name">
        >;
        states: Array<{ __typename?: "State" } & Pick<Types.State, "name">>;
      }
  >;
};

export const CountryInfoDocument = gql`
  query CountryInfo($code: ID!) {
    country(code: $code) {
      name
      native
      phone
      continent {
        name
      }
      capital
      currency
      languages {
        code
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;

/**
 * __useCountryInfoQuery__
 *
 * To run a query within a React component, call `useCountryInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryInfoQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CountryInfoQuery,
    CountryInfoQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<CountryInfoQuery, CountryInfoQueryVariables>(
    CountryInfoDocument,
    baseOptions
  );
}
export function useCountryInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CountryInfoQuery,
    CountryInfoQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    CountryInfoQuery,
    CountryInfoQueryVariables
  >(CountryInfoDocument, baseOptions);
}
export type CountryInfoQueryHookResult = ReturnType<typeof useCountryInfoQuery>;
export type CountryInfoLazyQueryHookResult = ReturnType<
  typeof useCountryInfoLazyQuery
>;
export type CountryInfoQueryResult = ApolloReactCommon.QueryResult<
  CountryInfoQuery,
  CountryInfoQueryVariables
>;
