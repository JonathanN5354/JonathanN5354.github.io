import React from "react";
import { Text, Heading, VStack, Box, Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
//import { Container } from '@chakra-ui/react'
import FullScreenSection from "./FullScreenSection";

const Bio = () => {
  return (
    <VStack py={5} bgColor="white">
      <Flex
        justifyContent="center"
      >
        <Box p={2}>
          <Heading pb={3} as="h1">
            About Me
          </Heading>
          <Text py={3}>
            Hi there! My name is Terry Lam and I am a post-graduate computer
            science student at Monash University and a volunteer front-end web
            developer at a not-for-profit organisation.
          </Text>
          <Text py={3}>
            During my Bachelor of Information Technology education in Australia,
            I was exposed to many fields of the IT industry, such as, machine
            learning, software engineering, and ICT project management. However,
            nothing interested me as much as web development did. I have always
            been fascinated by the intersection of technology and design, and
            web development is the perfect field to bring those two together.
          </Text>
          <Text py={3}>
            Throughout my academic studies, I have taken courses in web design
            and programming, which have helped me develop a strong foundation in
            HTML, CSS, and JavaScript, along with other web development
            frameworks and libraries. I am currently pursuing a professional
            certificate course in front-end web development provided by Meta to
            equip myself with industry-standard skills and prepare myself for a
            job-ready environment.
          </Text>
          <Text py={3}>
            Aside from web development, I have also acquired knowledge in
            various programming languages such as Python and Java, as well as
            ICT project management methodologies and approaches.
          </Text>
          <Text py={3}>
            My short-term goal is to secure a position as a front-end web
            developer, which will allow me to gain real-world industry
            experience and expand my technical and workplace knowledge. In the
            long term, I aim to further develop my skills by exposing myself to
            back-end web development and eventually become a full-stack
            developer.
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Bio;
