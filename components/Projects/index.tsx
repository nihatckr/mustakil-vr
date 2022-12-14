import {
  VStack,
  Heading,
  Divider,
  Text,
  SimpleGrid,
  Box,
  Flex,
  Icon,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <VStack
      width={"full"}
      bgColor={"gray.100"}
      py={6}
      as={"section"}
      id={"projects"}
    >
      <VStack pb={6}>
        <Heading color={"gray.400"}>Projects</Heading>
        <Divider width={"100px"} />
        <Text color={"gray.500"}>Spruha Main Features</Text>
        <Text fontSize={"12px"} textAlign={"center"} color={"gray.500"}>
          The Spruha admin template comes with ready-to-use features that are
          completely easy-to-use for any user, even for a beginner.
        </Text>
      </VStack>
      <SimpleGrid
        width={"full"}
        minChildWidth='240px'
        spacing='40px'
        padding={4}
      >
        <Box
          borderColor={"gray.200"}
          borderRadius={6}
          borderWidth={1}
          cursor={"pointer"}
          px={6}
          _hover={{
            borderColor: "#403fad",
            transition: "  0.6s ease-in-out",
          }}
        >
          <Flex padding={15} flexDir={"column"} alignItems={"center"}>
            <Icon
              boxSize={16}
              marginBottom={4}
              color={"gray.500"}
              _hover={{
                color: "#403fad",
                transition: "  0.6s ease-in-out",
              }}
            />
            <Stack>
              <Flex flexDir={"column"} alignItems={"center"}>
                <Heading
                  size='md'
                  textAlign={"center"}
                  color={"gray.500"}
                ></Heading>
                <Text
                  py='2'
                  textAlign={"center"}
                  fontSize={"10px"}
                  color={"gray.500"}
                >
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
