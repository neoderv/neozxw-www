import { writeFile } from 'fs/promises';
import { auth } from '$lib/auth.js';
import { initDb } from '$lib/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let db = await initDb();

    let userData = await db.all('SELECT * FROM user WHERE username = ?', [
        params.username
    ]);

    userData = (userData.length > 0) ? userData[0] : {};

    return { theUser: params.username, userData };
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