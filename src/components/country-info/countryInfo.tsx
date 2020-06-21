import * as React from "react";
import { useCountryInfoQuery } from "./__graphql__/countryInfo";
import { Text } from "grommet";
import "./index.css";
interface CountryInfoProps {
  match: { params: { ID: string } };
}
const CountryInfo = (props: CountryInfoProps) => {
  const res = useCountryInfoQuery({
    variables: {
      code: props.match.params.ID,
    },
  });
  if (res.loading) return <div>Loading...</div>;
  if (res.error) return <div>Error</div>;
  const {
    name,
    code,
    native,
    phone,
    capital,
    currency,
    languages,
    states,
  } = res.data.country;

  const names = [
    ["Name", name],
    ["Code", code],
    ["Native name", native],
    ["Phone code", phone],
    ["Capital", capital],
    ["Currency", currency],
    ["Languages", languages],
    ["States", states],
  ];
  let langs = [];
  let stats = [];
  languages.map((lan) => langs.push(lan.name));
  states.map((s) => stats.push(s.name));
  console.log(stats);
  return (
    <div>
      <Text size="30">
        <div className="grid2">
          <b>Name:</b>
          <div>{name}</div>
          <b>Code:</b>
          <div>{code}</div>
          <b>Native name:</b>
          <div>{native}</div>
          <b>Phone code:</b>
          <div>+{phone}</div>
          <b>Capital:</b>
          <div>{capital}</div>
          <b>Currency:</b>
          <div>{currency}</div>
          <b>Languages:</b>
          <div>{langs.join(",")}</div>
          {stats.length > 0 ? (
            <>
              <b>States:</b>
              <div>
                {stats.map((elem) => (
                  <div>{elem}</div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </Text>
    </div>
  );
};

export default CountryInfo;
