import styled from 'styled-components'

import DATA from '../../DATA'
import useWidth from '../../helpers/useWidth'

import Page from '../../components/page'
import Title from '../../components/title'
import CustomButton from '../../components/custom-button'

const Header = styled.header`
    display: grid;
    align-items:center;
    justify-items: center;
    width: 100%; 
    height: ${props => props.height ? props.height : '300px'};
    position: sticky;
    top: 1em;
`

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    background-attachment: fixed;
`

const Section = styled.section`
    display: grid;    
    padding: 1em;
    background: ${props => props.backgroundColor ? props.backgroundColor: '#121212'};
    border-radius: 8px;
    grid-gap: 2em;
    position: relative;
`

const SectionBlurBackground = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #121212;
    opacity: .8;
    border-radius: 8px;
`

const DesktopGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
    justify-items: center;
    align-items: center;
`

const DesktopSection = styled.section`
    display: grid;    
    padding: 1em;
    max-width: 400px;
    background: ${props => props.backgroundColor ? props.backgroundColor: '#121212'};
    border-radius: 8px;
    grid-gap: 2em;
`

export default function ProductPage({fetchedItem}) {
    let {name, imagePath, description} = fetchedItem[0]
    const width = useWidth()

    if(width <= 600) return (
        <Page title={`${name} - Ecommerce project`}>
            <Header>
                <Img src={imagePath} alt={`${name}`} loading='lazy'/> 
            </Header>
            <Section backgroundColor='transparent'>
                    <SectionBlurBackground />
                    <Title type='primary' align='center'>{name}</Title>
                    <Title type='secundary'>{description}</Title>
                    <CustomButton type='secundary'>Add to cart</CustomButton>
                    <CustomButton>Buy now</CustomButton>
            </Section>
        </Page>
    )

    if(width > 600) return(
        <Page title={`${name} - Ecommerce project`}>
            <DesktopGrid>
                <DesktopSection backgroundColor='black'>
                        <Title type='primary' align='center'>{name}</Title>
                        <Title type='secundary'>{description}</Title>
                        <CustomButton type='secundary'>Add to cart</CustomButton>
                        <CustomButton>Buy now</CustomButton>
                </DesktopSection>
                <Header height='100%'>
                    <Img src={imagePath} alt={`${name}`} loading='lazy'/> 
                </Header>
            </DesktopGrid>
        </Page>
    )
}

export async function getStaticProps(context){
    let {id} = context.params
    let propData = DATA.filter( ({name}) => {
        return name === id
    })

    return {
        props: {
            fetchedItem: propData
        }
    }
}

export async function getStaticPaths(){
    let routesNames = DATA.map( ({name}) => {
        return {params: {id: name}}
    })
    return {
        paths: [...routesNames],
        fallback: true
    }
}