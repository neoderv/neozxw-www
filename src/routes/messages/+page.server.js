import { initDb } from '$lib/db.js';
import { auth } from '$lib/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies }) {
    let db = await initDb();

    let username = await auth(fetch, cookies);
    if (!username || username.username == '!nobody') return [];

    let data = await db.all('SELECT * FROM messages WHERE username = ? ORDER BY date DESC', [
        username.username
    ]);

    await db.all('UPDATE messages SET isRead = true WHERE username = ?', [
        username.username
    ]);

    return { data, authVal: username };
}