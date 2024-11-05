import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function fetchData() {
    const user = await client.user.findFirst();

    return {
        username: user?.username,
        name: "Zaid"
    }
}

export default async function User() {
    const data = await fetchData();

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        Name: {data?.name}
                    </div>
                    {data?.username}
                </div>
            </div>
        </div>
    )
}