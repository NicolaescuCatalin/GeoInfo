import * as React from "react";
import { Header, Button, Image, Text } from "grommet";
const MyHeader = () => {
  return (
    <div>
      <Header background="#b3cfff">
        <Button
          href="/"
          icon={
            <Image
              src="https://i.imgur.com/GMfy6kG.png"
              width={50}
              height={50}
            />
          }
          hoverIndicator
        />
        <Text weight="bold" size="large">
          Study with us
        </Text>
        <Button color="#9ec2ff" label="About Us" />
      </Header>
    </div>
  );
};

export default MyHeader;
