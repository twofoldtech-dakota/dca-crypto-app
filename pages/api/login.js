import { query as q } from "faunadb";
import { setAuthCookie } from "../../utils/auth-cookies";
import { faunaClient } from "../../utils/fauna";

export default async function login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email or Password is not provided");
    }

    try {
        const auth = await faunaClient.query(
            q.Login(q.Match(q.Index("unique_User_email"), q.Casefold(email)), {
                password,
            })
        );

        if (!auth.secret) {
            return res.status(404).send("auth secret is missing");
        }

        setAuthCookie(res, auth.secret);

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
