import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { useRouter } from "next/navigation";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();
    try {
        await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
        return NextResponse.json({
            message: "You are logged in!"
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error while signing up",
        }, {
            status: 411
        })
    }
    
}