import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage( properties ) {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = properties;

    useEffect(() => {
        if (products && id) {
          const matchingProduct = products.find((product) => Number(product.id) === Number(id));
         setProduct(matchingProduct);
       }
     }, [products, id]);

    if (!product) return <div>No such product </div>

    return(
        <div>
            <nav>
                <button onClick={() => navigate("/")}>Go Home</button>
                <button onClick={() => navigate(-1)}>Go back</button>
                <button onClick={() => navigate(1)}>Go forward</button>
            </nav>
            <h2>{product.name}</h2>
            <em>(ID: {product.id})</em>
            <p>£{product.price}</p>
        </div>

    )
}
export default ViewProductPage