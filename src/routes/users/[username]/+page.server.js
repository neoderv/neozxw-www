
import { initDb } from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let db = await initDb();

    let query = await db.all('SELECT * FROM project WHERE username = ? ORDER BY id DESC', [
        params.username
    ]);
    return { query };
}