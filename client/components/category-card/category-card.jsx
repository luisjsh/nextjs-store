import styled from 'styled-components'

import useWidth from '../../helpers/useWidth'

import BestSeller from './best-seller.svg'
import Printer from './printer.svg'
import Cpu from './cpu.svg'
import Laptop from './laptop.svg'

const CategoryCardWrapper = styled.div`
    display: grid;
    width: 120px;
    padding: 1.5em 0;
    background: linear-gradient(90deg, rgba(62,4,83,1) 0%, rgba(187,0,255,1) 100%);
    background-size: 4000%;
    transition: 1s;
    border-radius: 10px;
    background-position: left;
    cursor: pointer;
    
    &:hover, &:focus-within{
        background-position: right;
        transform: translateY(-20px);
    }
`

const ImageSide = styled.div`
    background: url(${props =>{
        switch(props.type){
            case 'printer':
                return Printer
            
            case 'laptop':
                return Laptop

            case 'cpu':
                return Cpu

            case 'best-seller': 
                return BestSeller

            return ''
        }
    }}) no-repeat;
    background-size: 80%;
    height: 100px;
    background-position: center;
`

const Text = styled.div`
    text-align: center;
    font-weight: 300;
    opacity: 87%;
`

function CategoryCard({type, handleClick, children}) {
    return(
        <CategoryCardWrapper onClick={handleClick}>
            <ImageSide type={type}/>
            <Text>
                {children}
            </Text>
        </CategoryCardWrapper>
    )
}

export default CategoryCard
