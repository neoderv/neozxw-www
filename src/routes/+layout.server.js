import { initDb } from '$lib/db.js';
import { auth } from '$lib/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies }) {
    let db = await initDb();

    let username = await auth(fetch, cookies);
    if (!username || username.username == '!nobody') return {messages: [], authVal: {username: '!nobody'}};

    let messages = await db.all('SELECT * FROM messages WHERE username = ? AND isRead = false', [
        username.username
    ]);

    return { messages, authVal: username };
}