import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Box,
  Heading
} from '@chakra-ui/react'
import { TitleAI, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="AttiinDance">
    <Container>
      <TitleAI>
        AttiinDance <Badge>Automated Face Recognition Attendance</Badge>
      </TitleAI>
      <P>
        In this innovative project, I designed and developed a comprehensive
        attendance tracking system that integrates hardware, backend
        infrastructure, and frontend application to offer a sophisticated
        solution for educational institutions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Django, OpenCV (cv2), Dlib </span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <span>It is not uploaded on AppStore or PlayStore</span>
        </ListItem>
      </List>
      <P>The system is built on a three-layered architecture:</P>
      <P>1. Data Collection & Recognition Layer</P>
      <P>2. Backend & Data Management Layer</P>
      <P>3. Frontend & Data Presentation Layer</P>
      <Box my={4}>
        <WorkImage
          src="/images/works/attandance_workflow.png"
          alt="Attandance"
        />
        <WorkImage
          src="/images/works/attandance_workflow2.png"
          alt="Attandance"
        />
      </Box>
      <Box>
        <Link as={NextLink} href="/works/attandance">
          AI
        </Link>
        <span>
          {' '}
          <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          Layer 1 <Badge>Data Collection & Recognition Layer</Badge>
        </Heading>
      </Box>
      <P>
        In the Data Collection & Recognition Layer, I integrated advanced
        software libraries with webcam hardware to create an efficient facial
        recognition system for attendance tracking. This layer employs:
      </P>
      <List my={4}>
        <ListItem>
          <Meta>OpenCV (cv2) :</Meta>{' '}
          <P>
            For real-time video capture and image processing, enabling frame
            analysis for face detection.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Face Recognition:</Meta>
          <P>
            Utilizes Dlib&apos;s algorithms for accurate facial feature encoding and
            identification against a database of known faces.
          </P>
        </ListItem>
        <ListItem>
          <Meta>NumPy:</Meta>
          <P>
            NumPy: Manages data structures for facial encodings, facilitating
            efficient computation.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Requests:</Meta>
          <P>
            Requests: Sends identified attendance records, including name,
            subject, and timestamp, to the backend Django API for processing.
          </P>
        </ListItem>
      </List>
      <WorkImage src="/images/works/attandance6.jpeg" alt="Attandance" />
      <Box>
        <Link as={NextLink} href="/works/attandance">
          AI
        </Link>
        <span>
          {' '}
          <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          Layer 2 <Badge>Backend & Data Management Layer</Badge>
        </Heading>
      </Box>

      <P>
        The Backend & Data Management Layer, pivotal in orchestrating the
        attendance system, is powered by Django, a high-level Python web
        framework known for its robustness and efficiency. This layer is
        designed to:
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Process Incoming Data:</Meta>{' '}
          <P>
            It handles data received from the recognition layer, parsing and
            processing attendance records for further action.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Database Management: </Meta>
          <P>
            Utilizes Django&apos;s ORM capabilities for seamless database
            interactions, ensuring that attendance records, subject details, and
            user information are accurately stored and easily retrievable.
          </P>
        </ListItem>
        <ListItem>
          <Meta>API Endpoints:</Meta>
          <P>
            Features custom-built API endpoints for a range of functionalities
            including adding attendance records, fetching them by subject, and
            managing subject details. These endpoints facilitate the
            communication between the backend and the frontend layers, as well
            as with the recognition layer for data submission
          </P>
        </ListItem>
      </List>
      <Box>
        <Link as={NextLink} href="/works/attandance">
          AI
        </Link>
        <span>
          {' '}
          <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          Layer 3 <Badge>Frontend & Data Presentation Layer</Badge>
        </Heading>
      </Box>

      <P>
        The Frontend & Data Presentation Layer is where the attendance tracking
        system becomes accessible and interactive for end-users, such as
        students and teachers. Developed using React Native, this layer
        provides:
      </P>

      <List my={4}>
        <ListItem>
          <Meta>Intuitive User Interface (UI): </Meta>{' '}
          <P>
            Leveraging React Native&apos;s component-based architecture, the UI is
            designed to be user-friendly, ensuring that information is presented
            clearly and interactions are straightforward.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Real-Time Data Presentation:</Meta>
          <P>
            Integrates with the backend via API calls to display up-to-date
            attendance records, allowing users to view attendance by subject or
            date seamlessly.
          </P>
        </ListItem>
        <ListItem>
          <Meta>Cross-Platform Compatibility:</Meta>
          <P>
            Thanks to React Native, the application offers a consistent
            experience across both iOS and Android devices, making it widely
            accessible. Performance and Responsiveness: The use of React Native
            ensures that the application is not only performant but also
            responds swiftly to user inputs, enhancing the overall user
            experience.
          </P>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/attandance2.jpg" alt="Attandance" />
        <WorkImage src="/images/works/attandance3.jpg" alt="Attandance" />
        <WorkImage src="/images/works/attandance4.jpg" alt="Attandance" />
        <WorkImage src="/images/works/attandance5.jpg" alt="Attandance" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
