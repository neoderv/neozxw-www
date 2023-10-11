
import { initDb } from '$lib/db.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({params}) {
    let db = await initDb();

    let query = await db.all('SELECT * FROM project WHERE username = ? ORDER BY id DESC LIMIT ?, ?', [
        params.username,
        params.page * 5,
        5
    ]);
	return new Response(JSON.stringify(query));
}