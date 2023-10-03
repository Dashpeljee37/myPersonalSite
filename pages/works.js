import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../component/section'
import { WorkGridItem } from '../component/grid-item'

import thumbProfile from '../public/image/profile-pic.png'

const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6} >
                <Section>
                    <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={thumbProfile}>
                        markdown note taking app
                    </WorkGridItem>

                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works