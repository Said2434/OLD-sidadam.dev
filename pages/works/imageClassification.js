import {
  Container,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { TitleAI, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout Title="Image Classification Web App">
    <Container>
      <TitleAI>Image Classification Web App</TitleAI>

      <P>
        In this project, I built an image classification network on Animal-10
        dataset. I used ResNet-18 architecture as my model baseline and ClearML
        to track my experiments. Then I create a web app in Streamlit
        frameworks, and deploy it on huggingface.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo</Meta>
          <Link href="https://huggingface.co/spaces/pytholic/streamlit-image-classification-demo1">
            demo-streamlit
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.kaggle.com/datasets/alessiocorrado99/animals10">
            Dataset
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Streamlit </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ClearML, Python, Pytorch, Pytorch-Lightning, Rich, Streamlit, Gradio </span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/imageClassification2.png" alt="Image Classification Web App" />
      <WorkImage src="/images/works/imageClassification4.png" alt="Image Classification Web App" />
      <WorkImage src="/images/works/imageClassification3.png" alt="Image Classification Web App" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
