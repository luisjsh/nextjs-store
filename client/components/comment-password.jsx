import styled from 'styled-components'

import Title from './title'

import SpinnerAnimation from './spinner-animation.svg'
import Success from './success.svg'
import Waiting from './waiting.svg'
import Warning from './warning.svg'

const CommentWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1em;
`


const ImgAdvise = styled.div`
    width: 25px;
    background-image: url(${props => {
        switch(props.needsLoading){
            case 'success':
                return Success
            
            case 'loading':
                return SpinnerAnimation

            case 'warning':
                return Warning

            case 'waiting':
                return Waiting
                
            default: 
                return ''
            }
        }
    });
    background-repeat: no-repeat;
    background-position: top;
    background-size: 40px;
    transition: .3s;
`

function CommentPassword({needsLoading, children}) {
    return (
        <CommentWrapper>
            <ImgAdvise needsLoading={needsLoading}/>
            <Title type='secundary'>
                {children}
            </Title>
        </CommentWrapper>
    )
}

export default CommentPassword
