const cors = require("cors");
const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
require("dotenv").config();
require("./db/connection");
const adminRouter = require("./routers/admin.routes");
const professionalRouter = require("./routers/professional.routes");
const blogRouter = require("./routers/blog.routes");
const contactRouter = require("./routers/contact.routes");
const projectRouter = require("./routers/project.routes");
const serviceRouter = require("./routers/service.routes");
const faqRouter = require("./routers/faq.routes");

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/professional", professionalRouter);
app.use("/blog", blogRouter);
app.use("/contact", contactRouter);
app.use("/project", projectRouter);
app.use("/service", serviceRouter);
app.use("/faq", faqRouter);


app.listen(PORT, () => {
    console.log(`Server Running At PORT : ${PORT}`);
});