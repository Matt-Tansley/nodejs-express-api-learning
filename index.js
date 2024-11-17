import express from "express"
import 'dotenv/config'
import { authentication } from './src/auth.js'

const PORT = process.env.PORT || 3000

// Setup express server
const app = express()
app.use(express.json())
app.use(authentication) // Use authentication function from auth.js

app.listen(PORT, () => {
    console.log("Server listening on PORT: " + PORT)
})


// Define routes
app.get("/status", (req, res) => {
    const status = {
        "status": "Running"
    }

    res.send(status)
})

