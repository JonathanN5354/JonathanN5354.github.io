import * as React from "react";
import { VStack } from "@chakra-ui/react";
import Stickers from "./Stickers";
import Bio from "./BioSection";

const FullScreenSection = () => {
  return (
    <VStack
      backgroundColor="pink"
    >
      <VStack maxWidth="1280px" minHeight="100vh">
        <Stickers />
        <Bio />
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
