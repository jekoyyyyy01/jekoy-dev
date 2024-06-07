import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
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
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
  TagLabel,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiCoffee
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Cosico"
        description=""
      />
      <Box>
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        {/*
        <HighlightsSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />*/}
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="home" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                I'm Jericho Cosico
                <Br /> Software Engineer
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Br />
                "Every software engineer has their own unique talents, skills, and logical thinking. If there are beginners, we shouldn't belittle them; we should teach them. After all, when you were starting out, you were once like them." 
              </FallInPlace>
            }
          >
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="600"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="50%">
                <Image
                  src="/static/images/dev.png"
                  layout="fixed"
                  width={700}
                  height={600}
                  alt="dev image"
                  quality="70"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      {/*<Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Accessible",
            icon: FiSmile,
            description: "All components strictly follow WAI-ARIA standards.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Themable",
            icon: FiSliders,
            description:
              "Fully customize all components to your brand with theme support and style props.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Composable",
            icon: FiGrid,
            description:
              "Compose components to fit your needs and mix them together to create new ones.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Productive",
            icon: FiThumbsUp,
            description:
              "Designed to reduce boilerplate and fully typed, build your product at speed.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />*/}
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const AboutSection = () => {
  return (
    <Features
      id="about"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          About me.
          <Br />
        </Heading>
      }
      description={
        <>
          Hi Everyone, I am Jericho Cosico from Lian Batangas, Philippines.
          <Br />
        </>
      }
      align="left"
      columns={[1]}
      iconSize={4}
      features={[
        {
          title: "I am a software engineer",
          icon: FiCoffee,
          description: (
            <>
              with four years of experience, and I love the challenge of turning ideas into reality through code. My passion lies in crafting efficient and elegant solutions.
              <Br/>
              <Br/>
              Growing up in the province is tough you need to learn how to make a living. When I was a kid, I was always curious about everything. I always wanted to learn new things, like playing basketball, chess, and more.
              <Br/>
              <Br/>
              Before I started college, I thought about what course I should take, and I can proudly say that my skills are really in computers. That's why I chose Information Technology as my course. Now, I have no regrets about my decision, and I am able to help with the expenses here in Batangas.
              <Br/>
              <Br/>
              And here I am now, living my dream as a software engineer.
            </>
          ),
          variant: "inline",
        },

      ]}
    />
  );
};
const SkillsSection = () => {
  return (
    <Container id="skills" maxW="container.xl" pt={{ base: 40, lg: 10 }} pb="40">
      <Flex direction="column" align="center" justify="center" py={10}>
        <Heading as="h2" mb={6}>
          MY SKILLS
        </Heading>

        <Flex justify="center">
          <Stack direction="row" spacing={10}>
            <SkillItem 
              name="HTML" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" />
            <SkillItem 
              name="PHP" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg" />
            <SkillItem 
              name="Laravel" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
              } />
            <SkillItem 
              name="Codeigniter" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" />
            <SkillItem 
              name="JavaScript" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </Stack>
        </Flex>
        <Br />

        <Flex justify="center">
          <Stack direction="row" spacing={10}>
            <SkillItem 
              name="jQuery" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
            <SkillItem 
              name="Vue.js" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
            <SkillItem 
              name="Node.js" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            <SkillItem 
              name="Next.js" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
            <SkillItem 
              name="CSS" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
          </Stack>
        </Flex>
        <Br />

        <Flex justify="center">
          <Stack direction="row" spacing={10}>
            <SkillItem 
              name="Bootstrap" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            <SkillItem 
              name="SASS" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
            <SkillItem 
              name="Git" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <SkillItem 
              name="MySQL" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};
const SkillItem = ({ name, icon }) => {
  return (
    <Box
      bg="#27284C"
      color="white"
      borderRadius="md"
      p={4}
      textAlign="center"
      boxShadow="md"
      w="200px"
      h="200px"
      position="relative"
      style={{ transition: "transform 0.3s ease-in-out" }}
      _hover={{ transform: "scale(1.1)" }}
    >
      <Text fontWeight="bold" mb={2} position="absolute" top="4" left="50%" transform="translateX(-50%)">
        {name}
      </Text>
      <Flex justify="center" align="center" h="100%">
        <img 
          src={icon} 
          style={{ width: "100px", height: "100px", marginTop: "10px" }} 
          />
      </Flex>
    </Box>
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;