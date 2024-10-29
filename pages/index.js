import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,

  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
import Image from 'next/image/'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a  Computer Vision Developer based in Korea!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sid Adam
          </Heading>
          <p>Computer Vision Developer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Adam.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi 👋 I’m Saidov Saidazam, but you can call me Adam—because let’s face it, it’s way easier to pronounce! I’m a Computer Vision Developer who loves diving into data like it’s the latest Netflix series.
        </Paragraph>
        <Paragraph>
        I am studying  at Sejong University in Korea. With a background in computer engineering, I specialize in making sense of complex data, building intelligent solutions, and occasionally convincing my code to cooperate. Proficient in Python and PyTorch, I’m here to solve real-world problems and have some fun along the way!
        </Paragraph>
        I’m actively looking to expand my career in AI development and data science, and I’m excited to solve real-world problems through technology.
        <Paragraph>
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/ai_projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
  <Heading as="h3" variant="section-title">
    Bio
  </Heading>
  <BioYear>2004</BioYear>
  <BioSection>
    Born in Andijan, Uzbekistan.
  </BioSection>
  <BioYear>2019-2022</BioYear>
  <BioSection>
    Participated in and won a few Computer Sci. national competitions.
  </BioSection>
  <BioYear>2022</BioYear>
  <BioSection>
    Got accepted to Computer Science major in Sejong University.
  </BioSection>
  <BioYear>2023</BioYear>
  <BioSection>
    Did an internship at Technaxis 
  </BioSection>
  <BioYear>2024</BioYear>
  <BioSection>
    Participated in a Seoul Tech Impact Hackathon.
  </BioSection>
</Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Cars, Music, Computers Hardware, Gaming, Machine Learning and of course
          wrestling!
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Said2434" target="_blank">
              <Button
                variant="ghost"
                aaa
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Said2434
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/saidazam-saidov-a1a950279/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @saidazam
                </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/sai_d_azam/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @sai_d_azam
                </Button>
            </Link>
          </ListItem>
        </List>
        <Paragraph>
          Feel free to contact me on the above links to join me in my coding
          journey.
        </Paragraph>
        <Paragraph>
         Always open to good opportunities, discussions and
          collaborations.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
