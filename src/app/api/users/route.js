import { dbConnect } from "@/lib/dbConnet";
import bcrypt from "bcryptjs";
const usersCollection = await dbConnect("users");
export async function GET(request) {
    const res = await usersCollection.find().toArray();
    return Response.json({res});
}
export async function POST(request) {
    const newUser = await request.json();
    newUser.password = await bcrypt.hash(newUser.password, 10);
    newUser.role = "user"
    const userExist = await usersCollection.findOne({ email: newUser.email });
    if (userExist) {
        return Response.json({ message: "User already exists" });
    }
    const res = await usersCollection.insertOne(newUser);
    return Response.json(res);
}