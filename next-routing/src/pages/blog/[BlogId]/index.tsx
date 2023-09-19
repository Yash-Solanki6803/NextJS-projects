import { useRouter } from "next/router"

const BlogId = () => {
  const router = useRouter();
  const blogId= router.query.blogId;
  return (
    <div>Blog number : {blogId}</div>
  )
}

export default BlogId;