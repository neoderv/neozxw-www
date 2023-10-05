import { writeFile } from 'fs/promises';
import { auth } from '$lib/auth.js';
import { initDb } from '$lib/db.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, fetch }) => {
        let db = await initDb();

        let username = await auth(fetch, cookies);
        if (!username || username.username == '!nobody') return;

        const data = await request.formData();
        let title = data.get('title');
        let file = data.get('file');

        let id = (await db.all('SELECT * from project')).length + 1;
        let date = +(new Date);

        await db.run('INSERT INTO project (username, title, id, date) VALUES (?,?,?,?)',[
            username.username,
            title,
            id,
            date
        ]);

        await writeFile(`${process.cwd()}/db/projects/${id}.sb3`,file.stream());
    }
}