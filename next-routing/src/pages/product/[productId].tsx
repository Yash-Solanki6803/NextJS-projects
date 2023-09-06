import { useRouter } from "next/router";

function Productdetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Product Detail for Product: {productId}</h1>;
}

export default Productdetail;
