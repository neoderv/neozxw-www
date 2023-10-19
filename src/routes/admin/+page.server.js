import { writeFile } from 'fs/promises';
import { auth } from '$lib/auth.js';
import { initDb } from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, fetch }) => {
        let db = await initDb();

        let username = await auth(fetch, cookies);
        if (!username || username.username == '!nobody' || username.isAdmin != 'admin') return;

        const data = await request.formData();
        let id = data.get('id');

        await db.run('UPDATE project SET date = "none" WHERE id = ?', [
            id
        ]);

        throw redirect(302, '/embed/' + id);
    }
}