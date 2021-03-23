import { useRouter } from 'next/router'

const Client = (props) => {
    const { query } = useRouter()

    
    return (
        <main>
            Client: {query?.id}
        </main>
    
    )
}


export default Client 