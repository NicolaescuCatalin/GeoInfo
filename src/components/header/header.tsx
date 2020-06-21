import * as React from "react";
import { Header, Button, Image, Text } from "grommet";
const MyHeader = () => {
  return (
    <div>
      <Header className="container" background="#b3cfff" width="100%">
        <div>
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
        </div>
        <Text weight="bold" size="large">
          Study with us
        </Text>
        <Button color="#9ec2ff" label="About Us" />
      </Header>
    </div>
  );
};

export default MyHeader;
