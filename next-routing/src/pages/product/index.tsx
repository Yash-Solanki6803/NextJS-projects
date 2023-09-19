import Link from "next/link";

function ProductList() {
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
    </>
  );
}

export default ProductList;
