import styled, {keyframes} from 'styled-components'

const PrimaryTitle = styled.div`
    font-weight: bold;
    opacity: .87;
    font-size: 2em;
    ${props => props.align && `
    display: grid;
    justify-items: ${props.align};`
    }
`

const SecundaryTitle = styled.div`
    font-weight: 300;
    opacity: .75;
    font-size: 1.5em;
    ${props => props.align && `
    display: grid;
    justify-items: ${props.align};`
    }
`

const animatedBackground = keyframes`
    0%{
        background-position: left;
    }

    100%{
        background-position: right;
    }
`

const NavbarTitle = styled.div`
    font-weight: bold;
    opacity: .85;
    font-size: 1.4em;
    ${props => props.align && `
    display: grid;
    justify-items: ${props.align};`
    }
    cursor: pointer;
    transition: 0.3s;
    
    &:hover{
        transform: translateX(3px);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(251,56,56,1) 41%, rgba(224,49,129,1) 68%, rgba(128,196,246,1) 100%);
        background-size: 10000%;
        animation: ${animatedBackground} 4s alternate infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;  
    }
`


export const NavTitle = styled.h1`
    color: black;
    font-size: 30px;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover{
        transform: translateX(3px);
        background: linear-gradient(to right, rgba(204,26,112,1) 0%, rgba(118,26,204,1) 41%, rgba(52,13,178,1) 60%, rgba(41,11,174,1) 63%, rgba(34,10,171,1) 65%, rgba(33,56,177,1) 74%, rgba(31,189,194,1) 100%);     
        background-size: 10000%;
        animation: ${animatedBackground} 4s alternate infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;  
    }
`

function Title({align, type, handleClick, children}) {
    if (type === 'primary') return (
        <PrimaryTitle align={align} onClick={handleClick}>{children}</PrimaryTitle>
    )

    if(type === 'secundary') return (
        <SecundaryTitle align={align} onClick={handleClick}>{children}</SecundaryTitle>
    )

    if(type === 'navbar-title') return (
        <NavbarTitle align={align} onClick={handleClick}>{children}</NavbarTitle>
    )
}

export default Title
