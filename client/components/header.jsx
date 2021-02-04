import {useState} from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

import useWidth from '../helpers/useWidth'

import Warning from './cancel-modal.svg'
import HamburguerLines from './hamburguer-button.svg'
import HamburguerLinesPressed from './hamburguer-button-pressed.svg'
import Logo from './logo.png'
import Title from './title'

const Header = styled.header`
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
`

const HamburguerButton = styled.button`
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    ${
        props => props.type === 'cancel' ? `
            background-image: url(${Warning});
            background-color: grey;
        
            &:hover, &:focus{
                background-color: white;
            }
        `: `
            background-image: url(${HamburguerLines});
            background-color: black;
        
            &:hover, &:focus{
                background-color: #3e0453;
            }
        `
    }


` 

const LogoSection = styled.div`
   ${props => {
       switch(props.responsive){
            case 'desktop':
                return `
                    display: flex;
                    align-items: center;
                `
            default: 
                return ` 
                        display: grid;
                        justify-items: center;
                        grid-auto-flow:column;
                    `
       }
   }}
`

const OptionsWrapper = styled.div`
    position: relative;
    display: grid;
    grid-gap: 1em;
    padding: 1em;
    z-index: 1;
    width: 90%;
    position: fixed;
    border-radius: 10px;
`

const OptionsBg = styled.div`
    position: absolute;   
    width: 100%;
    height: 100%;
    background: grey;
    z-index: 0;
    border-radius: 20px;
    opacity: .3;
`

const OptionsHeader = styled.header`
    display: grid;
    justify-items: right;
    z-index: 1;
`
    
const OptionsButton = styled.button`
    padding: 1em;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background: #101010;
    color: white;
    font-weight: bold;
`

const Img = styled.img`
    width: 50px;
`

function PageHeader() {
    const [modal, setModal] = useState(false)
    const router = useRouter()
    const width = useWidth()


    if(width <= 600) return (
        <Header>
            <HamburguerButton onClick={()=>setModal(!modal)}/>
            <LogoSection onClick={()=>router.push('/')}>
                <Img src={Logo}  alt='logo'/>
            </LogoSection>

            {
                modal && (
                <OptionsWrapper>
                    <OptionsBg/>
                    <OptionsHeader>
                        <HamburguerButton type='cancel' onClick={()=>setModal(!modal)}/>
                    </OptionsHeader>
                    <OptionsButton onClick={()=>router.push('/category/phone')}>
                        Phones
                    </OptionsButton>
                    <OptionsButton onClick={()=>router.push('/category/laptop')}>
                        laptop
                    </OptionsButton>
                </OptionsWrapper>
                )
            }
            
        </Header>
    )

    if(width > 600) return(
        <Header>
            <LogoSection responsive='desktop' onClick={()=>router.push('/')}>
                <Img src={Logo} alt='logo'/>
                <Title type='navbar-title'>Ecommerce</Title>
            </LogoSection>
            <div className="">

            </div>
                <div style={{display: 'grid', gridAutoFlow: 'column', gridGap:'1em' }}>
                <Title cursor='pointer' type='secundary' handleClick={()=>router.push('/category/phone')}>Phones</Title>
                <Title cursor='pointer' type='secundary' handleClick={()=>router.push('/category/laptop')}>Laptops</Title>
            </div>
        </Header>
    )
}

export default PageHeader
