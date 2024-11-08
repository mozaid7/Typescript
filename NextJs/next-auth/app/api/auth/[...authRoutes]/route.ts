import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        msg: "You are logged !!"
    })
}