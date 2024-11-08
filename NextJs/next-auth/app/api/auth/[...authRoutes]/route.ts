import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, arg: any) {
    await console.log(arg.params.authRoutes); // shows the current route we are on
    return NextResponse.json({
        msg: "You are logged !!"
    })
}