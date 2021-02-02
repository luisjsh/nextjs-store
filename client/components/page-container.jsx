import Head from 'next/head'

function PageContainer({title, description, children}) {
    return (
        <div>
            <Head>
                <title>{title || 'Ecommerce project'}</title>
                {
                    description !== false && (
                        <meta  
                            name="description"
                            content={description || "ecommerce project build with django and next.js"} 
                        />
                    )
                }
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default PageContainer
