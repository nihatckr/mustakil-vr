import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { keyFeatures } from "../../data";

const FeaturesKey = () => {
  const [data, setData] = useState(keyFeatures);
  return (
    <VStack>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            direction={{ base: "column", sm: "row" }}
            overflow='hidden'
            variant='outline'
            alignItems={"center"}
          >
            <Icon as={item.icon} boxSize={6} />
            <Stack>
              <CardBody>
                <Heading size='md'>{item.title}</Heading>
                <Text py='2'>
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        );
      })}
    </VStack>
  );
};

export default FeaturesKey;
