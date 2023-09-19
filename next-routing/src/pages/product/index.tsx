import Link from "next/link";
import { useRouter } from "next/router";

function ProductList() {
  const router = useRouter();
  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/product/1">Product 1</Link>
      </div>
      <div>
        <Link href="/product/2">Product 2</Link>
      </div>
      <div>
        <Link href="/product/3">Product 3</Link>
      </div>
      <div>
        <Link href="/product/4">Product 4</Link>
      </div>
      <div>
        <button
          onClick={() => {
            router.push("/blog/1/review/1");
          }}
        >
          Click me to go to Blogs/1/review/1 page
        </button>
      </div>
    </>
  );
}

export default ProductList;
