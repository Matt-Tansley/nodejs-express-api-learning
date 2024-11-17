const USERNAME = process.env.API_USERNAME || ""
const PASSWORD = process.env.API_PASSWORD || ""

// authentication function
export function authentication(req, res, next) {
    const authheader = req.headers.authorization

    if (!authheader) {
        let err = new Error("You are not authenticated!")
        res.setHeader('WWW-Authenticate', 'Basic')
        err.status = 401
        return next(err)
    }

    const auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    const username = auth[0]
    const password = auth[1]

    if (username == USERNAME && password == PASSWORD) {
        // if authorized user
        next()
    } else {
        let err = new Error("You are not authenticated!")
        res.setHeader('WWW-Authenticate', 'Basic')
        err.status = 401
        return next(err)
    }
}