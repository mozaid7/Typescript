import { Client } from 'pg';

// client allows us to connect to our Postgres instance for storing data.
export async function getClient() {
    const client = new Client("");
    await client.connect();
    return client;
}