import { useRouter } from 'next/router'


export default function BlogArticle(){

    const router = useRouter()
    const {slug} = router.query

    return <>{slug}</>
}