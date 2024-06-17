import express from "express"
import cors from "cors"
const app = express();

// app.use(cors({
//     origin: "*"
// }))

// app.use(express.static('dist'));

app.get("/", (req, res) => {
    res.send("Server is ready!")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "Joke Joke"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "Joke Joke"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "Joke Joke"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "Joke Joke"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "Joke Joke"
        },
        {
            id: 6,
            title: "Joke 6",
            content: "Joke Joke"
        },
    ]

    res.json(jokes)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})