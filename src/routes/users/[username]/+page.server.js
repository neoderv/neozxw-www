
import { initDb } from '$lib/db.js';
import { writeFile } from 'fs/promises';
import { auth } from '$lib/auth.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let db = await initDb();

    let query = await db.all('SELECT * FROM project WHERE username = ? ORDER BY id DESC', [
        params.username
    ]);
    return { query, theuser: params.username };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, fetch }) => {
        let username = await auth(fetch, cookies);
        if (!username || username.username == '!nobody') return;

        const data = await request.formData();
        let file = data.get('file');

        await writeFile(`${process.cwd()}/db/pfp/${username.username}.png`,file.stream());
    }
}