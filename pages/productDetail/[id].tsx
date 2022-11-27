import {useRouter} from "next/router";

const ProductDetail = ()=>{
    const router = useRouter()
    const {id} = router.query
    return <ProductDetail/>
}

export default ProductDetail