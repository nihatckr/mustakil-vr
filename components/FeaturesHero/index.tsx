import {
  Heading,
  VStack,
  Text,
  Flex,
  Badge,
  Highlight,
  Button,
  Icon,
  Box,
  Stack,
  HStack,
  IconButton,
} from "@chakra-ui/react";

import NextImage from "next/image";

const FeaturesHero = ({ data }) => {
  console.log(data.side);
  return (
    <VStack
      display={"flex"}
      marginTop={10}
      width={"full"}
      flexDir={"row"}
      padding={4}
      style={{ margin: 0, backgroundColor: "#7B61ff09" }}
    >
      <HStack width={"full"}>
        {data.side === true ? (
          <>
            <Flex alignItems={"flex-end"} width={"full"}>
              <Heading>Images</Heading>
            </Flex>
            <Flex
              style={{
                margin: 0,
                alignItems: "flex-start",
                flexDirection: "column",
              }}
              width={"full"}
            >
              <Flex maxW={"400px"}>
                <Heading lineHeight='tall'>
                  <Highlight
                    query={["Virtual Reality"]}
                    styles={{ px: "2", py: "1", rounded: "full", bg: "pink" }}
                  >
                    {data.title}
                  </Highlight>
                </Heading>
              </Flex>
              <Text maxW={"400px"}>{data.subtitle}</Text>
              <VStack marginTop={4} alignItems={"flex-start"}>
                {data.data.map((item) => {
                  return (
                    <Flex key={item.id} alignItems={"flex-start"}>
                      <Icon as={item.icon} boxSize={6} />
                      <Text marginLeft={4} maxW={"400px"}>
                        {item.title}
                      </Text>
                    </Flex>
                  );
                })}
              </VStack>
            </Flex>
          </>
        ) : (
          <>
            <Flex
              style={{
                margin: 0,
                alignItems: "flex-start",
                flexDirection: "column",
              }}
              width={"full"}
            >
              <Flex maxW={"400px"}>
                <Heading lineHeight='tall'>
                  <Highlight
                    query={["Virtual Reality"]}
                    styles={{ px: "2", py: "1", rounded: "full", bg: "pink" }}
                  >
                    {data.title}
                  </Highlight>
                </Heading>
              </Flex>
              <Text maxW={"400px"}>{data.subtitle}</Text>
              <VStack marginTop={4} alignItems={"flex-start"}>
                {data.data.map((item) => {
                  return (
                    <Flex key={item.id} alignItems={"flex-start"}>
                      <Icon as={item.icon} boxSize={6} />
                      <Text marginLeft={4} maxW={"400px"}>
                        {item.title}
                      </Text>
                    </Flex>
                  );
                })}
              </VStack>
            </Flex>
            <Flex alignItems={"flex-end"} width={"full"}>
              <Heading>Images</Heading>
            </Flex>
          </>
        )}
      </HStack>
    </VStack>
  );
};

export default FeaturesHero;
