import { useRouter } from 'next/router'

const Project = (props) => {
    const { query } = useRouter()

    console.log({query})
    
    return (
        <main>
            <p>Client: {query?.id}</p>
            Project: {query?.projectid}
        </main>
    
    )
}


export default Project 