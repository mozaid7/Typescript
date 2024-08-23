import { Client } from 'pg';

// client allows us to connect to our Postgres instance for storing data.
export async function getClient() {
    const client = new Client("postgres://avnadmin:AVNS_Dd5xPtPAxXcMAt2hQwO@pg-2cbdf470-mohammedzee98-2970.h.aivencloud.com:17452/defaultdb?sslmode=require");
    await client.connect();
    return client;
}