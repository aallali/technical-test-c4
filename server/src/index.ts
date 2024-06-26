import express from 'express';
import dotenv from 'dotenv';
import connectionDB from './database/config';
import * as ROUTES from "./routes"
import cors from "cors";

const app = express();

dotenv.config(); // 3afak khdmi

const PORT = process.env.PORT || 4242;

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', ROUTES.AuthRoute);
app.use('/api/v1/task', ROUTES.TaskRoute);

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: "Nadi Kanadi"
    });
});


if (process.env.NODE_ENV !== 'test')
    (async () => {
        if (process.env.NODE_ENV !== 'test') {
            await connectionDB();
            app.listen(PORT, () => {
                console.log(`Server running on http://localhost:${PORT}`);
            });
        }
    })()

export default app;

