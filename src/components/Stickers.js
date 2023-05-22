import React from "react";
import { Text, Heading, VStack, Box, Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
//import { Container } from '@chakra-ui/react'
import FullScreenSection from "./FullScreenSection";

const Stickers = () => {
  return (
      <VStack py={5}>
        <Flex
          gap={10}
          justifyContent="center"
        >
          <Image src={require("../images/unicorn.webp")} height="150px" width="150px" />
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Flex>
      </VStack>
  );
};

export default Stickers;
