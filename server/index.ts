import express, {Express} from "express";
import path from 'path'
import axios from "axios";

const app: Express = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.post("/login", (req, res) => {
    axios.post('https://xm-crm-react-exercise-server.herokuapp.com/login', JSON.stringify(req.body))
        .then((response) => res.status(200)
            .json(response.data))
        .catch((e: Error) => {
            console.log(e)
            res.sendStatus(400)
        })
});

app.get('/ingredients', (req, res) => {
    axios.get('https://xm-crm-react-exercise-server.herokuapp.com/ingredients', {
        headers: {'Authorization': req.headers.authorization}
    })
        .then(response => res.status(200).json(response.data))
        .catch((e: Error) => {
            console.log(e);
            res.sendStatus(401)
        })
})

app.get('/ingredientImg/:src', (req, res) => {
    const src = req.params.src;
    res.send({data: `https://xm-crm-react-exercise-server.herokuapp.com/img/${src}`})
})

app.listen(PORT, () => {
    console.log(`Burger APP running on ${PORT}`);
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

