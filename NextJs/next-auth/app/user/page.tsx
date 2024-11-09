import { getServerSession } from "next-auth";

export default async function() {
    const session = await getServerSession();
    return <div>
        User Details on Server 
        {JSON.stringify(session)};
    </div>
}