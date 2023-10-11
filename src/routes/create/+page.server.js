import { writeFile } from 'fs/promises';
import { auth } from '$lib/auth.js';
import { initDb } from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, fetch }) => {
        let db = await initDb();

        let username = await auth(fetch, cookies);
        if (!username || username.username == '!nobody') return;

        const data = await request.formData();
        let title = data.get('title');
        let file = data.get('file');
        let root = parseInt(data.get('root')) + '';

        let id = (await db.all('SELECT * from project')).length + 1;
        let date = +(new Date);

        let baseProject = (await db.all('SELECT * from project WHERE id = ?', [
            root
        ]))[0];

        if (baseProject && baseProject.username == username.username) {
            await db.run('UPDATE project SET title = ? WHERE id = ?',[
                title,
                baseProject.id
            ]);

            id = baseProject.id;
            
        } else {
            await db.run('INSERT INTO project (username, title, id, date, root, parent) VALUES (?,?,?,?,?, ?)',[
                username.username,
                title,
                id,
                date,
                (baseProject) ? baseProject.root : id,
                (baseProject) ? root : null
            ]);
        }

        await writeFile(`${process.cwd()}/db/projects/${id}.sb3`,file.stream());

        throw redirect(302,'/embed/'+id);
    }
}