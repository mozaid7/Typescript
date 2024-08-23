import dotenv from 'dotenv';
dotenv.config();
import { Client } from 'pg';

const key = process.env.Password;

// client allows us to connect to our Postgres instance for storing data.
export async function getClient() {
    const client = new Client(`postgres://avnadmin:${key}@pg-2cbdf470-mohammedzee98-2970.h.aivencloud.com:17452/defaultdb?sslmode=require`);
    await client.connect();
    return client;
}

console.log(key);