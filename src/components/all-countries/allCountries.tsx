import * as React from "react";
import { useAllCountriesQuery } from "./__graphql__/allCountries";
import { TextInput } from "grommet";
import "./index.css";
const AllCountries = () => {
  let [search, setSearch] = React.useState("");

  const { loading, error, data } = useAllCountriesQuery();

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const countries = data.countries
    .filter((country) =>
      country.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    .map(({ name, code }, index) => (
      <div key={index}>
        <a href={`/country/${code}`}>{name} </a>
      </div>
    ));

  return (
    <div style={{ width: "100%" }}>
      <TextInput
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="grid3">{countries}</div>
    </div>
  );
};

export default AllCountries;
