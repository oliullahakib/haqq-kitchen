import { dbConnect } from "@/lib/dbConnet";
import { ObjectId } from "mongodb";

const reviewCollection = await dbConnect("reviews");

export async function GET(request) {
    const reviews = await reviewCollection.find().toArray();
    return Response.json(reviews);
}
export async function POST(request) {
    const newReview = await request.json();
    console.log(newReview);
    const isReviewExist = await reviewCollection.findOne({_id: new ObjectId(newReview._id)});
    if(isReviewExist){
        return Response.json({message: "Review already exists"});
    }
    const res = await reviewCollection.insertOne(newReview);
    return Response.json({message: "Review added successfully", res});
}