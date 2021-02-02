import {useRouter} from 'next/router'
import styled from 'styled-components'

import Title from './title'

const HorizontalWrapper = styled.div`
    display: grid;
`

const HorizontalScroll = styled.div`
  padding: 1.3em 0 0 1em;
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: column;
  overflow: scroll;
  overflow-y: hidden;
  align-items: self-start;
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

function HorizontalSection({title, children, categoryName}) {
    const router = useRouter()
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
