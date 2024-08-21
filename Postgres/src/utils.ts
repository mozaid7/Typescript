import { Client } from 'pg';

// client allows us to connect to our Postgres instance for storing data.
export async function getClient() {
    const client = new Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg");
    await client.connect();
    return client;
}