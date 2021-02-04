import styled from 'styled-components'
import {useRouter} from 'next/router'

import DATA from '../../DATA'

import Page from '../../components/page'
import ProductCard from '../../components/product/product-card'

const Section = styled.section`
  display: grid;
  grid-gap: 1em;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
`

export default function CategoryPage({id, categoryProducts}) {
  const router = useRouter()

  const handleRedirect =(category, name)=>{
    router.push(`/${category}/${name}`)
  }

    return (
        <Page title={`${id} - Ecommerce project`}>
          <Section>
            {categoryProducts && categoryProducts.map( (product) => (
                <ProductCard 
                  key={product.id} 
                  imagePath={product.imagePath}
                  handleClick={()=>handleRedirect('product', product.id)} 
                  {...product} />
            ))}
          </Section>
        </Page>
    )
}


export async function getStaticProps(context){
    let {id} = context.params
    let choosenCategory = []
    choosenCategory = DATA.filter ( ({category}) => {
      return category === id
    }) 
      
    return {
      props: {
        id,
        categoryProducts: choosenCategory
      }
    }
}

export async function getStaticPaths(){
  return {
    paths: [
      {params: {id: 'phone'}},
      {params: {id: 'laptop'}},
      {params: {id: 'best-seller'}},
      {params: {id: 'printer'}}
    ],
    fallback: false
  }
}