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

import Image from 'next/image'

const Home = () => (
<Layout>
  <Container>
    <Box display="block" mt={4}> {/* Remove flexbox and add margin-top */}
      <Box>
        <Heading as="h2" variant="page-title">
          Sid Adam
        </Heading>
        <p>Data Scientist/Computer Vision Engineer</p>
      </Box>

      {/* Move Image to the top-left */}
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ base: 0, md: 0 }}  // Align to the left on all screen sizes
        textAlign="left"  // Align the image to the left
        position="absolute"  // Position it to the top-left of the page
        top="0"
        left="0"
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
  </Container>
</Layout>

<Layout>


    <Section delay={0.1}>
  <Heading as="h3" variant="section-title">
    Bio
  </Heading>
  <BioYear>Name:</BioYear>
  <BioSection>Adam</BioSection>
  <BioYear>Education:</BioYear>
  <BioSection>Sejong University</BioSection>
  <BioYear>Department:</BioYear>
  <BioSection>Computer Engineering</BioSection>
  <BioYear>Status:</BioYear>
  <BioSection>Close to Graduation</BioSection>
  <BioYear>Objective:</BioYear>
  <BioSection>Gain Hands-On Experience</BioSection>
  <BioYear>Employment Status:</BioYear>
  <BioSection>Open to Full-Time Opportunities</BioSection>

  <Box textAlign="center" my={4}>
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
    Work
  </Heading>
 
  <BioYear>2019-2022</BioYear>
  <BioSection>
  3-Time Winner in National Computer Science Competitions 
  </BioSection>
  <BioSection>
  (Over 200 Participants)
  </BioSection>
  <BioYear>2023</BioYear>
  <BioSection>
  Internship at{" "}
  <Link href="https://www.technaxis.com/" target="_blank">
  Technaxis
    </Link>
  .
  </BioSection>
  <BioYear>2024</BioYear>
  <BioSection>
  Participated in a{" "}
  <Link href="https://www.seoultechimpact.com/about" target="_blank">
     Seoul Tech Impact Hackathon
  </Link>
  .
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
