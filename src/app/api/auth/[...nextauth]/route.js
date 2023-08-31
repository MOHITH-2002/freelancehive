import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import connect from '@/utilites/db';
import GoogleProvider from 'next-auth/providers/google'
import User from "@/models/user"
import bcrypt from "bcryptjs"
const handler= NextAuth({
  providers: [
    // OAuth authentication providers...
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",

      async authorize(credentials){
        await connect();
        
        try {
          const user = await User.findOne({email:credentials.email,})
          if(user){
            const isPassword = await bcrypt.compare(credentials.password,user.password)
            if(isPassword){
              return user;
            }else{

              throw new Error("Password is wrong")
            }
          }else{
            throw new Error("user not found")

          }
        } catch (error) {
          throw new Error(error)
        }
      }
    })
   
  ]
})
export { handler as GET, handler as POST };