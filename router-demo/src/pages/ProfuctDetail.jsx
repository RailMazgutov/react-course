import { useParams } from "react-router-dom"

export default function ProductDetailsPage() {
    const params = useParams();

    return <>
        <h1>
            ProductDetails!
        </h1>
        <p>{params.productId}</p>
    </>;
}