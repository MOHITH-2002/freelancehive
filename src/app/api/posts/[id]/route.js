import Post from "@/models/post";
import connect from "@/utilites/db"
import { NextResponse } from "next/server"

export const GET = async (request,{params})=>{
    const { id } = params;
    try {
        await connect();
        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post),{status:200})
        
    } catch (error) {
        return new NextResponse("db error",{status:500})
    }
}
export const DELETE = async (request,{params})=>{
    const { id } = params;
    try {
        await connect();
        await Post.findByIdAndDelete(id)
        return new NextResponse("post has been deleted",{status:200})
        
    } catch (error) {
        return new NextResponse("db error",{status:500})
    }
}