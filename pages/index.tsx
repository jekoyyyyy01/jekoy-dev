import * as React from "react";
import { useMediaQuery } from 'react-responsive';
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
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiGitCommit,
  FiGitMerge,
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
import { SectionTitle } from 'components/section'

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
        title="Jekoy"
        description=""
      />
      <Box>
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <Experience />

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
    <Box overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                <>
                  I'm Jericho Cosico
                  <Br /> Software Engineer
                </>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <>
                  <Br />
                  "Every software engineer has their own unique talents, skills, and logical thinking. If there are beginners, we shouldn't belittle them we should teach them. After all, when you were starting out, you were once like them." 
                </>
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
                  src="/static/images/dev6.png"
                  loading="lazy"
                  width={700}
                  height={600}
                  alt="dev image"
                  quality="70"
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

/* About */
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
          Hi Everyone, I am Jericho Cosico, also known as <b>Jekoy</b>, from Lian Batangas, Philippines.
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
              with five years of experience, and I love the challenge of turning ideas into reality through code. My passion lies in crafting efficient and elegant solutions.
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

/* Skills */
const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Codeigniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
  ];

  return (
    <Box overflow="hidden">
      <Container id="skills" maxW="container.xl">
        <Flex direction="column" align="center" justify="center" py={10}>
          <Heading as="h2" mb={25}>
            MY SKILLS
          </Heading>

          <Wrap justify="center" spacing={{ base: 3, md: 10 }}>
            {skills.map((skill, index) => (
              <SkillWrapItem key={index} name={skill.name} icon={skill.icon} />
            ))}
          </Wrap>
        </Flex>
      </Container>
    </Box>
  );
};
const SkillWrapItem = ({ name, icon }) => {
  return (
    <WrapItem>
      <SkillItem name={name} icon={icon} />
    </WrapItem>
  );
};
const SkillItem = ({ name, icon }) => {
  const { colorMode } = useColorMode();
  const imgH         = useBreakpointValue({ base: "50px", md: "100px" });
  const imgW         = useBreakpointValue({ base: "50px", md: "100px" });
  const textFontSize = useBreakpointValue({ base: "sm", md: "xl" });

  return (
    <Box
      bg={ colorMode === 'light' ? '#E7E4F7' : '#27284C' }
      color={ colorMode === 'light' ? 'black' : 'white' }
      borderRadius="md"
      p={4}
      textAlign="center"
      boxShadow="md"
      w={{ base: "100px", md: "200px" }}
      h={{ base: "100px", md: "200px" }}
      position="relative"
      style={{ transition: "transform 0.3s ease-in-out" }}
      _hover={{ transform: "scale(1.1)" }}
    >
      <Text
        fontWeight="bold"
        fontSize={textFontSize}
        mb={{ base: 2, md: 4 }}
        top={{ base: 2, md: 4 }}
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
      >
        {name}
      </Text>

      <Flex justify="center" align="center" h="100%">
        <img
          src={icon}
          style={{ width: imgW, height: imgH, marginTop: "10px" }}
        />
      </Flex>
    </Box>
  );
};

/* Experience */
const Experience = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 768); // Adjust threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box overflow="hidden">
      <Container id="experience" maxW="container.xl">
        <Features
          id="experience"
          title='MY EXPERIENCE'
          columns={[1]}
          iconSize={8}
          spacing={20}
          features={[
            {
              title: "Jr. Web Developer",
              icon: FiGitCommit,
              description: (
                <>
                  <Br />
                  Avasia Information Systems
                  <Br />
                  5th Floor Bloomingdale Plaza, Shaw Blvd, Pasig, Metro Manila
                  <Br />
                  Nov 2019 to Nov 2020

                  <Br />
                  <Br />
                  &bull; Trained about their systems, technologies and new programming language to be used.
                  <Br />
                  &bull; Participated in new project meetings with the whole team.
                  <Br />
                  &bull; Designed and developed POS & Internal system using Vue.js and Node.js.
                  <Br />
                  &bull; Learned to use Api’s.
                  <Br />
                  &bull; Experienced to use the bitbucket and github
                  <Br />
                </>
              ),
              variant: isMobileDevice ? '' : 'inline',
              iconPosition: "top",
              delay: 0.6,
            },
            {
              title: "Software Engineer",
              icon: FiGitMerge,
              description: (
                <>
                  <Br />
                  OrangeApps, Inc.
                  <Br />
                  39 Sct. Rallos St, Diliman, Quezon City, 1103 Metro Manila
                  <Br />
                  Dec 2020 to Present

                  <Br />
                  <Br />
                  &bull; Learned about PHP, Javascript, jQuery, MySQL, Codeigniter and Laravel frameworks.
                  <Br />
                  &bull; Designed and developed complex modules in school platform.
                  <Br />
                  &bull; Maintained and enhanced functionality within multiple legacy system.
                  <Br />
                  &bull; Learned and recoded outdated backend systems to modernize functionality.
                  <Br />
                  &bull; Learned Server Side Like Google Cloud Platform (GCP) and Linux Server.
                  <Br />
                  &bull; Learned about cross-platform API backend integration.
                  <Br />
                  &bull; Learned about third party integration like WKHTMLTOPDF/SnappyPDF/Tcpdf, Laravel Excel/PHPExcel and Oauth2.
                  <Br />
                  &bull; Learned importing big data into their Database.
                  <Br />
                  &bull; Experienced big meeting to outline objectives and tactics for upcoming major projects.
                  <Br />
                  &bull; Experienced in mentoring and guiding junior software engineers through training and onboarding processes.
                  <Br />
                  &bull; Attend to a seminar like Fundamentals of Leadership & Management.
                </>
              ),
              variant: isMobileDevice ? '' : 'inline',
              iconPosition: "top",
              delay: 1,
            },
          ]}
          reveal={FallInPlace}
        />
      </Container>
    </Box>
  );
}

export default Home;