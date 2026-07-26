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
  WrapItem,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
  TagLabel,
  useColorMode,
  SimpleGrid,
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
import { SectionTitle } from "components/section";

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

        <TechStacksSection />

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
                  "I started with curiosity and a lot of questions. Today, as a senior and lead developer, I still believe the best engineers lift others up — because I was once a beginner too, and someone took the time to teach me."
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
            width="600px"
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
          Hey — I'm Jericho Cosico, or just <b>Jekoy</b>. Proudly from Lian, Batangas, Philippines, building software with purpose and heart.
          <Br />
        </>
      }
      align="left"
      columns={[1]}
      iconSize={4}
      features={[
        {
          title: "Software Engineer",
          icon: FiCoffee,
          description: (
            <>
              with {(() => {
                const start = new Date(2019, 11, 1); // December is month 11 (0-indexed)
                const now = new Date();
                let years = now.getFullYear() - start.getFullYear();
                let months = now.getMonth() - start.getMonth();
                if (months < 0 || (months === 0 && now.getDate() < start.getDate())) {
                  years--;
                  months += 12;
                }
                if (now.getDate() < start.getDate()) {
                  months--;
                  if (months < 0) {
                    years--;
                    months += 12;
                  }
                }
                if (months < 0) months = 0;
                return (
                  <>
                    {years} {years === 1 ? "year" : "years"}
                    {months > 0 ? ` and ${months} ${months === 1 ? "month" : "months"}` : ""}
                  </>
                );
              })()} of experience, and I still get excited every time an idea becomes something people can actually use. I care about writing clean, thoughtful code — not just something that works, but something I'm proud of.
              <Br/>
              <Br/>
              Growing up in the province taught me grit. Life wasn't always easy, so I learned early how to work hard and figure things out on my own. As a kid, I was endlessly curious — basketball, chess, tinkering with anything I could get my hands on. That same curiosity is what pulled me into tech.
              <Br/>
              <Br/>
              When it was time to choose a path, I went with what felt right: Information Technology. Looking back, that choice changed everything. It gave me a career I love, and a way to support my family back home in Batangas.
              <Br/>
              <Br/>
              Today, I'm living that dream — building software, leading teams, and still learning every day.
            </>
          ),
          variant: "inline",
        },

      ]}
    />
  );
};

/* Tech Stacks */
const TechStacksSection = () => {
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

  const workflows = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/000000" },
    { name: "Claude AI", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/claude-ai.svg" },
    { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/chatgpt.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
  ];

  return (
    <Box id="tech-stacks" overflow="hidden">
      <Container maxW="container.xl">
        <Flex direction="column" align="center" justify="center" py={10}>
          <Heading as="h2" mb={25}>
            TECH STACKS
          </Heading>

          <Box w="100%">
            <Heading as="h3" size="lg" mb={6} textAlign="center">
              Skills
            </Heading>
            <Wrap justify="center" spacing={{ base: 3, md: 10 }}>
              {skills.map((skill, index) => (
                <SkillWrapItem key={index} name={skill.name} icon={skill.icon} />
              ))}
            </Wrap>
          </Box>

          <Box w="100%" mt={{ base: 12, md: 16 }}>
            <Heading as="h3" size="lg" mb={6} textAlign="center">
              Workflow
            </Heading>
            <SimpleGrid
              columns={{ base: 2, md: 3 }}
              spacing={{ base: 4, md: 8 }}
              w="100%"
              maxW={{ base: "100%", md: "720px" }}
              mx="auto"
              justifyItems="center"
            >
              {workflows.map((workflow, index) => (
                <SkillItem key={index} name={workflow.name} icon={workflow.icon} />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

interface SkillItemProps {
  name: string;
  icon: string;
}

const SkillWrapItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  return (
    <WrapItem>
      <SkillItem name={name} icon={icon} />
    </WrapItem>
  );
};

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={ colorMode == "light" ? "#E7E4F7" : "#27284C" }
      color={ colorMode == "light" ? "black" : "white" }
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
        fontSize={{ base: "sm", md: "xl" }}
        mb={{ base: 2, md: 4 }}
        top={{ base: 2, md: 4 }}
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
      >
        {name}
      </Text>

      <Flex justify="center" align="center" h="100%">
        <Box
          mt="10px"
          w={{ base: "50px", md: "100px" }}
          h={{ base: "50px", md: "100px" }}
          position="relative"
        >
          <Image
            src={icon}
            alt={name}
            fill
            sizes="100px"
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </Box>
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
                  <Br />
                  My career started here — learning how real products are built. I trained on the company's systems, technologies, and programming stack, then quickly moved from observing to contributing.
                  <Br />
                  <Br />
                  I worked closely with the team in project kickoffs and planning sessions, helping shape what we would build next. Together, we designed and developed a POS and internal system using Vue.js and Node.js.
                  <Br />
                  <Br />
                  Along the way, I built and consumed RESTful APIs to connect frontend and backend features, and used Bitbucket and GitHub for version control, collaboration, and pull request workflows — foundations that still guide how I work today.
                </>
              ),
              variant: isMobileDevice ? '' : 'inline',
              iconPosition: "top",
              delay: 0.6,
            },
            {
              title: "Senior and Lead Developer",
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
                  This is where I grew into the engineer and leader I am today. I build and maintain production systems with PHP, JavaScript, jQuery, MySQL, CodeIgniter, and Laravel — designing complex modules for a large-scale school platform used across multiple institutions.
                  <Br />
                  <Br />
                  A big part of my work has been caring for what already exists. I've maintained and improved critical features across legacy systems, modernized outdated backend services, and kept things stable while making them better. I also manage server-side operations on Google Cloud Platform (GCP) and Linux, and develop cross-platform API backends that keep systems talking to each other reliably.
                  <Br />
                  <Br />
                  Beyond the core platform, I've implemented third-party integrations like WKHTMLTOPDF/SnappyPDF/TCPDF, Laravel Excel/PHPExcel, and OAuth2, and designed large-scale data import workflows into production databases. I've also sat in strategic planning sessions — helping define objectives and delivery approaches for major initiatives.
                  <Br />
                  <Br />
                  Leadership became just as important as the code. I mentor and onboard junior engineers, manage their day-to-day work through task assignment and delivery reviews, and completed programs like Fundamentals of Leadership & Management to grow in that role.
                  <Br />
                  <Br />
                  Today, I also utilize AI tools such as Cursor, Claude AI, and ChatGPT to accelerate development, improve code quality, and deliver product features more efficiently — always with the same goal: shipping work that teams and users can trust.
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