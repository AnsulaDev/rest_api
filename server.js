import  express  from "express";

const app = express();

app.get('/', ( req, res) => {
    res.send('Hello guys');
});

const PORT = 4000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));