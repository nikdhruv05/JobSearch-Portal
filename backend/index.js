import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from 'cors';
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/job.route.js";
import connectDB from "./utils/db.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";

dotenv.config({});

const app = express();

const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'https://jobsearch-portal.onrender.com',
    credentials: true 
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute)
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/front-end/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "front-end", "dist", "index.html"));
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server Started at ${PORT}`);
});