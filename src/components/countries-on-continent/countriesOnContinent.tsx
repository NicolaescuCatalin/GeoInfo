import * as React from "react";
import { useCountriesOnContinentQuery } from "./__graphql__/countriesOnContinent";
import "./index.css";
interface CountriesOnContinentProps {
  match: { params: { continentCode: string } };
}

const CountriesOnContinent = (props: CountriesOnContinentProps) => {
  const res = useCountriesOnContinentQuery({
    variables: {
      continentCode: props.match.params.continentCode,
    },
  });
  if (res.loading) return <div>Loading...</div>;
  console.log(props);
  if (res.error) return <div>{res.error.message}</div>;
  return (
    <div className="grid3">
      {res.data.countries.map(function (elem) {
        return (
          <a href={`/country/${elem.code}`}>
            {" "}
            {elem.name} <br />
          </a>
        );
      })}
    </div>
  );
};

export default CountriesOnContinent;
