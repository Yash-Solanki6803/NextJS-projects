import { useRouter } from "next/router";

const ReviewId = () =>{
    const reviewId = useRouter().query.reviewId;
    return(
        <h1>Review number : {reviewId}</h1>
    )
}

export default ReviewId;