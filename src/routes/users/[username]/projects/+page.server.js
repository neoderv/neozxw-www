import { initDb } from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let db = await initDb();

    return { theUser: params.username };
}
