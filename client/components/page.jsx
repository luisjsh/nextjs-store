import styled from 'styled-components'

import PageContainer from './page-container'
import Header from './header'

const Article = styled.article`
    position: relative;    
    display: grid;    
    padding: 1em;
    grid-gap: 1em;
`

function Page({title, description, children}) {
    return (
        <PageContainer title={title} description={description}>
            <Header />
            <Article>{children}</Article>
        </PageContainer>
    )
}

export default Page
