import Post from "@/models/post";
import connect from "@/utilites/db"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Post(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
export const GET = async (request)=>{
    const url = new URL(request.url);

    const email = url.searchParams.get("email");
 

    try {
        await connect();

        const posts = await Post.find( email &&  { email } )
        
        return new NextResponse(JSON.stringify(posts),{status:200})
    } catch (error) {
        return new NextResponse("db error",{status:500})
    }
}

