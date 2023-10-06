import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url, cookies }) {
    let token = url.searchParams.get('data');
    if (token) {
        cookies.set('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        })
    }
    throw redirect(302, '/');
    return;
}