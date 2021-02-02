import {useRouter} from 'next/router'
import useWidth from '../helpers/useWidth'

import DATA from '../DATA'

import HorizontalSection from '../components/horizontal-section'
import Page from '../components/page'
import CategoryCard from '../components/category-card/category-card'
import ProductCard from '../components/product/product-card'


export default function Home({BestSeller, Laptops, Phones}) {
  let router = useRouter()

  const handleRedirect =(category, name)=>{
    router.push(`/${category}/${name}`)
  }

  return (
    <Page>
      <HorizontalSection title='CATEGORIES'>
        <CategoryCard type='best-seller' handleClick={()=>handleRedirect('category', 'best-seller')}>Best seller</CategoryCard>
        <CategoryCard type='printer' handleClick={()=>handleRedirect('category', 'printer')}>Printers</CategoryCard>
        <CategoryCard type='laptop' handleClick={()=>handleRedirect('category', 'laptop')}>Laptops</CategoryCard>
        <CategoryCard type='cpu' handleClick={()=>handleRedirect('category', 'cpu')}>Cpu</CategoryCard>
      </HorizontalSection>

      <HorizontalSection title='BEST SELLERS'>
        {
          BestSeller && BestSeller.map( ({name, imagePath, price, id}, i)=>(
            <ProductCard key={id} id={id} name={name} imagePath={imagePath} price={price} animationDelay={i}/>
          ))
        }
      </HorizontalSection>

      <HorizontalSection title='PHONES' categoryName='phone'>
        {
          Phones && Phones.map( ({name, imagePath, price, id}, i)=>(
            <ProductCard key={id} id={id} name={name} imagePath={imagePath} price={price} animationDelay={i}/>
          ))
        }
      </HorizontalSection>

      <HorizontalSection title='LAPTOPS' categoryName='laptop'>
      {
          Laptops && Laptops.map( ({name, imagePath, price, id}, i)=>(
            <ProductCard key={id} id={id} name={name} imagePath={imagePath} price={price} animationDelay={i}/>
          ))
        }
      </HorizontalSection>
    </Page>
    )
}


export async function getStaticProps(){
  let BestSeller = DATA.filter( ({sold}) => {
    return sold > 5
  })

  let Laptops = DATA.filter ( ({category}) => {
    return category === 'laptop'
  })

  let Phones = DATA.filter ( ({category}) => {
    return category === 'phone'
  })

  return {
    props: {
      BestSeller,
      Phones,
      Laptops
    }
  }
}