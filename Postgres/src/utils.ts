import dotenv from 'dotenv';
import { Client } from 'pg';
dotenv.config();
const key = process.env.password;

// client allows us to connect to our Postgres instance for storing data.
export async function getClient() {
    const client = new Client(`postgres://avnadmin:${key}@pg-2cbdf470-mohammedzee98-2970.h.aivencloud.com:17452/todo?sslmode=require`);
    await client.connect();
    return client;
}