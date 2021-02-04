import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'

import Title from './title'

import ArrowRight from './button-right.svg'
import ArrowLeft from './button-left.svg'

const HorizontalWrapper = styled.div`
    display: grid;
    position: relative;
`

const HorizontalScroll = styled.div`
    padding: 1.3em 0 0 1em;
    display: grid;
    grid-gap: 1em;
    grid-auto-flow: column;
    ${props => props.overflowY ? '' : ' overflow-y: hidden'};
    align-items: self-start;
    transform: ${props => props.translateX ? `translateX(-${props.translateX}px)` : 'translateX(0)'};
    transition: .5s ease;
`

const TextWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const TextAlign = styled.div`
    display: grid;
    align-items: center;
    justify-items: right;
    opacity: .78;
`

const Button = styled.button`
    position: absolute;
    top: 50%;
    ${props => props.alignRight ? 'right: 0' : 'left: 0'};
    z-index: 1;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    background-color: #5F5E5E;
    background-image: url(${props => props.alignRight ? ArrowRight : ArrowLeft});
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
`

function HorizontalSection({mode, title, children, categoryName}) {
    const [x,  setX] = useState(0)
    const router = useRouter()

    const moveRight =()=>{
        setX(x < (children.length*300 - 300) ? x + 300 : 0)
    }

    const moveLeft =()=>{
        setX(x > 0 ? x - 300 : 0)
    }

    if(mode ==='carousel') return (
        <HorizontalWrapper>
             <TextWrapper>
                <Title type='primary'>{title && title}</Title>
                {categoryName && <TextAlign type='secundary' onClick={()=>router.push(`/category/${categoryName}`)}>VIEW ALL</TextAlign>}
            </TextWrapper>
            {x !== 0 && <Button onClick={moveLeft} />}
            <Button alignRight='1' onClick={moveRight} />
            <HorizontalScroll overflowX='hidden'>
                <HorizontalScroll translateX={x} overflowY='a' overflowX='hidden'>
                    {children}
                </HorizontalScroll>
            </HorizontalScroll>
        </HorizontalWrapper>
    )
    
    return (
        <HorizontalWrapper>
            <TextWrapper>
                <Title type='primary'>{title && title}</Title>
                {categoryName && <TextAlign type='secundary' onClick={()=>router.push(`/category/${categoryName}`)}>VIEW ALL</TextAlign>}
            </TextWrapper>

            <HorizontalScroll>
                {children}
            </HorizontalScroll>
        </HorizontalWrapper>
    )
}

export default HorizontalSection
