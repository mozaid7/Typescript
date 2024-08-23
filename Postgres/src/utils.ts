import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const password = process.env.password;

// client allows us to connect to our Postgres instance for storing data.
export async function getClient() {
    const client = new Client(`postgres://avnadmin:${password}@pg-2cbdf470-mohammedzee98-2970.h.aivencloud.com:17452/todo?sslmode=require`);
    await client.connect();
    return client;
}