import {useRouter} from "next/router";

const ProductDetail = ()=>{
    const router = useRouter()
    const {id} = router.query
    return <div>ProductDetail: {id}</div>
}

export default ProductDetail