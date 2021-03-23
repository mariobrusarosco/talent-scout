import Link from 'next/link'
import { useRouter } from 'next/router'

const FilteredEvent = () => {
    const { query } = useRouter()

    console.log({ query })
  
    return (
        <div>
            <main>
                <h1>
                    Filtered events: {query.slug.join('/')}
                </h1>
            </main>
        </div>
    )
}

export default FilteredEvent