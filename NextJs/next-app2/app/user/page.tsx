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
        <div>
            {data.name}
            {data.username}
        </div>
    )
}