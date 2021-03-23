import { useRouter } from 'next/router'

const Product = (props) => {
    const { query } = useRouter()

    
    return (
        <main>
            Product: {query?.id}
        </main>
    
    )
}


export default Product 