import Link from 'next/link'
import { useRouter } from 'next/router'

const Event = () => {
    const { query } = useRouter()
  
    return (
        <div>
            <main>
                <h1>
                Event detail: {query.eventId}
                </h1>
            </main>
        </div>
    )
}

export default Event