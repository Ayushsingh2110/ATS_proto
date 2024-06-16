import express from "express"
import bodyParser from "body-parser"
import 'dotenv/config'

const app = express();

app.use(express.json())
app.use(bodyParser.json())


app.use("/", (req, res) => {
    res.send("root directory")
})

app.listen(process.env.PORT, () => {
    console.log("app running at port: ", process.env.PORT)
})