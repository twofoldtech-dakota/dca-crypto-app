import { query as q } from "faunadb";
import { authClient } from "../../utils/fauna";
import { getAuthCookie, removeAuthCookie } from "../../utils/auth-cookies";

export default async function logout(req, res) {
    const token = getAuthCookie(req);

    // already logged out
    if (!token) return res.status(200).end();

    try {
        await authClient(token).query(q.Logout(false));
        removeAuthCookie(res);
        res.status(200).end();
    } catch (error) {
        console.error(error);
        res.status(error.requestResult.statusCode).send(error.message);
    }
}

export async function getServerSideProps(ctx) {
    const token = getAuthCookie(ctx.req);

    return { props: { token: token || null } };
}
