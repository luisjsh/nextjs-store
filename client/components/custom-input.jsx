import styled from 'styled-components'

import SpinnerAnimation from './spinner-animation.svg'
import Success from './success.svg'
import Waiting from './waiting.svg'
import Warning from './warning.svg'


const InputWrapper = styled.div`
    display: grid;
    grid-template-areas: "label label  label"
    ${props => props.needsLoading ? `"input input  loader"` : `"input input input"`  }
    "comment comment  comment"; 
    grid-gap: .1em;
`

const Input = styled.input`
    padding: .5em 1em;
    border-radius: 6px;
    border: none;
    font-weight: 300;
    color: white;
    grid-area: input;
    background-color: #525252;
`

const Label = styled.label`
    opacity: .87;
    font-weight: 300;
    grid-area: label;
`

const Comment = styled.span`
    opacity: .5;
    font-weight: 300;
    grid-area: comment;
`

const ImgAdvise = styled.div`
    width: 100%;
    background: url(${props => {
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
    }) no-repeat;
    background-position: center;
    background-size: 40px;
    grid-area: loader;
`

function CustomInput({label, comment, needsLoading, handleChange, name, handleBlur}) {
    return (
        <InputWrapper needsLoading={needsLoading}>
            {label && <Label>{label}</Label> }
            <Input name={name} onChange={handleChange} onBlur={handleBlur}/>
            {needsLoading && <ImgAdvise needsLoading={needsLoading}/>}
            {comment && <Comment>{comment}</Comment>}
        </InputWrapper>
    )
}

export default CustomInput
