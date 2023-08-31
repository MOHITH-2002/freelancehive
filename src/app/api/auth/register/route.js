import connect from "@/utilites/db"
import bcrypt from "bcryptjs"
import User from "@/models/user"
import { NextResponse } from "next/server"
export const POST = async (request)=>{
    const {username,email,password} = await request.json()
    await connect();

    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({
        username,
        email,
        password:hashedPassword
    })

    try {
       await newUser.save();
       return new NextResponse("user has been created",{status:201})
    } catch (error) {
        return new NextResponse(error,{status:500})
    }
}