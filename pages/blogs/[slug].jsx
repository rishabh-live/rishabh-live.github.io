import { useRouter } from 'next/router'


export default function Blogarcticale(){

    const router = useRouter()
    const {slug } = router.query

    return <>{slug}</>
}