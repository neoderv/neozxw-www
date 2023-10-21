
import { initDb } from '$lib/db.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({params}) {
    let db = await initDb();

    let query = await db.all('SELECT * FROM comment WHERE targetType = ? AND targetId = ? ORDER BY date DESC LIMIT ?, ?', [
        params.type,
        params.id,
        params.page * 5,
        5
    ]);
	return new Response(JSON.stringify(query));
}