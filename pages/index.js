import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../component/section'
import Paragraph from '../component/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../component/layout/article'
import {
  BioHeader,
  BioSection,
  BioYear,
  BioBody,
  BioSubSection
} from '../component/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Mongolia.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Dashpeljee Battur
            </Heading>
            <p>Expert ( Developer / Quality Assurance / Automation engineer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/image/profile-pic.png"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Quality Assurance professional with 2+ years of experience in
            implementing and maintaining quality management systems. Strong
            analytical and problem-solving skills, ability to design and execute
            test plans and procedures, and knowledge of circuit design,
            microcontroller programming, and PCB layout. Quick learner with the
            ability to adapt to new systems, environments, and technologies.
          </Paragraph>
          <Paragraph>
            In addition, I have much experience with <b>Python</b> and{' '}
            <b>C++</b>. Participated in the <b>ABU Robocon</b> contest for 2
            consecutive years, where I gained experience in designing and
            developing autonomous robots and control systems. Strong knowledge
            of robot control and motion planning and sensor integration.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                variant="outline"
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Ulaanbaatar, Mongolia
          </BioSection>
          <BioSection>
            <BioYear>2020-01</BioYear>
            <BioSubSection>
              <BioHeader>Electronics, Bachelor</BioHeader>
              <BioBody>National University Of Mongolia</BioBody>
            </BioSubSection>
          </BioSection>
          <BioSection>
            <BioYear>2020-03</BioYear>
            <BioSubSection>
              <BioHeader>System developer</BioHeader>
              <BioBody>G-POWER LLC</BioBody>
            </BioSubSection>
          </BioSection>
          <BioSection>
            <BioYear>2020-09</BioYear>
            <BioSubSection>
              <BioHeader>Quality Assurance</BioHeader>
              <BioBody>Khanbank</BioBody>
            </BioSubSection>
          </BioSection>
          <BioSection>
            <BioYear>2022-04</BioYear>
            <BioSubSection>
              <BioHeader>
                Automation Test Engineer & Quality Assurance
              </BioHeader>
              <BioBody>Smart Quality LLC</BioBody>
            </BioSubSection>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Basketball, Volleyball, E-Sports, Programming
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
