import * as React from "react";
import { useMediaQuery } from 'react-responsive';
import type { NextPage } from "next";

import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
  TagLabel,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link, Br } from "@saas-ui/react";

import { BackgroundGradient } from "components/gradients/background-gradient";
import { FallInPlace } from "components/motion/fall-in-place";

import { SEO } from "components/seo/seo";

import { Features } from "components/features";

const Charms: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Jekoy"
        description=""
      />

      <Box>
        <IloveyouSection />
      </Box>
    </Box>
  )
}

const IloveyouSection: React.FC = () => {
  const [isBeating, setIsBeating] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true); // Ensures this runs only on the client
  }, []);

  if (!mounted) return null;

  return (
    <Box overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />

      <Features
        id="about"
        title={
          <>
          </>
        }
        description={
          <>
            <Br />
            <Br />
            <Br />
            <Br />
            <Br />
            <FallInPlace>
              <Text as="h1" textStyle="h1" textAlign="left">
                I LOVE YOU BABY
              </Text>
            </FallInPlace>
            
            <div className="heart-container" onClick={() => setIsBeating(!isBeating)}>
            <div className={`heart ${isBeating ? 'beating' : ''}`}></div>

            <style jsx>{`
              .heart-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50vh;
              }
              .heart {
                width: 100px;
                height: 90px;
                background-color: red;
                position: relative;
                transform: rotate(-45deg);
                cursor: pointer;
                transition: transform 0.2s ease-in-out;
              }
              .heart::before,
              .heart::after {
                content: '';
                width: 100px;
                height: 90px;
                background-color: red;
                border-radius: 50%;
                position: absolute;
              }
              .heart::before {
                top: -50px;
                left: 0;
              }
              .heart::after {
                left: 50px;
                top: 0;
              }
              .beating {
                animation: beat 0.9s infinite;
              }
              @keyframes beat {
                0%, 100% {
                  transform: scale(1) rotate(-45deg);
                }
                50% {
                  transform: scale(1.2) rotate(-45deg);
                }
              }
            `}</style>
          </div>
            <Br />
            <Br />
            <Br />
            <Br />
            <Br />
            
          </>
        }
        align="center"
        columns={[1]}
        iconSize={4}
        features={[]}
      />
    </Box>
  )
}

export default Charms;