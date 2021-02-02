import {useRouter} from 'next/router'
import styled, {keyframes} from 'styled-components'

import usdFormater from '../../helpers/numberSplitter'

import Title from '../title'
import CustomButton from '../custom-button'

const Appear = keyframes`
    0%{
        opacity: 0;
        
    }

    100%{
        opacity: 1;
    }
`

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const CardWrapper = styled.div`
    padding: 1em 0;
    width: 300px;
    background: linear-gradient(90deg, rgba(47,47,47,1) 0%, rgba(62,4,83,1) 100%);
    background-size: 4000%;
    background-position: left;
    border-radius: 10px;
    transition: .3s;
    animation: ${Appear} 1s forwards 0.${props => props.animationDelay ? props.animationDelay : '1' }s;
    cursor: pointer;

    &:hover, &:focus-within{
        background-position: right;
        transform: translateY(-20px);
    }
`

const CardHeader = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 300px;
    padding: 1em;
`


const CardSection = styled.div`
    display: grid;    
    padding: 1em;
    grid-gap: 1em;
`

const TitleWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`

function ProductCard({id, name, price, imagePath, animationDelay}) {
    const router = useRouter()
    const handleClick = ()=>{
        router.push(`/product/${name}`)
    }
    return (
        <CardWrapper animationDelay={animationDelay} onClick={handleClick}>
            
            <CardHeader>
                <Img src={imagePath} />
            </CardHeader>

            <CardSection>
                <TitleWrapper >
                    <Title type='primary'>{name || 'no name' }</Title>    
                </TitleWrapper>
                
                <Title type='secundary'>Price</Title>

                <Title type='primary'>{price ? usdFormater(parseInt(price)) :  '$0.00 '}</Title>
                <CustomButton>Add to cart</CustomButton>
            </CardSection>
        </CardWrapper>
    )
}

export default ProductCard
