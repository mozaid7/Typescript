import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";
import { Appbar } from "@/components/Appbar";

export default async function() {
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        <Appbar />
        User Details on Server 
        {JSON.stringify(session)};
    </div>
}