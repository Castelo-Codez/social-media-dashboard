const express = require("express");
const path = require("path");
const app = express();

app.use(
    express.static(
        path.resolve(
            "/",
            "mentor-projects",
            "social-media-dashboard",
            "app",
            "dist"
        )
    )
);



app.listen(3000);
