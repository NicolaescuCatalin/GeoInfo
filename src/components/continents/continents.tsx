import * as React from "react";
import { useContinentsQuery } from "./__graphql__/continents";
import { Text } from "grommet";
const Continents = () => {
  const { data, loading, error } = useContinentsQuery();
  if (loading) return <div>Loading...</div>;
  console.log(data);
  if (error) return <div>Error</div>;
  return (
    <div>
      {data.continents.map((elem) => (
        <div>
          <a href={`/countriesOnContinent/${elem.code}`}>
            <Text color="#4287f5" size="large">
              {elem.name}
            </Text>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Continents;
