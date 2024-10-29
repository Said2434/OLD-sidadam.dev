import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbAttendance from '../public/images/works/attandance.webp'
import thumbImageClassification from '../public/images/works/imageClassification1.webp'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        AI Projects
      </Heading>
      {/* <p>Comming Soon</p> */}
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="attandance"
            title="Attiindance"
            thumbnail={thumbAttendance}
          >
            Automated Face Recognition Attendance
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="imageClassification"
            title="Image classification web app"
            thumbnail={thumbImageClassification}
          >
            An image classification web app with streamlit and gradio
          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
