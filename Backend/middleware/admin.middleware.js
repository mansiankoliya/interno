const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

exports.verify = async (req, res, next) => {
    try {
        const Token = req.headers.authorization;

        if (Token) {

            const verifyAdmin = jwt.verify(Token, process.env.SECRET_KEY);

            if (verifyAdmin == undefined) {
                res.status(404).json({
                    message: "TOKEN CANNOT MATCH!",
                    status: 404,
                });
            } else {

                const adminData = await Admin.findById({ _id: verifyAdmin.id });
                if (adminData == null) {
                    res.status(401).json({
                        message: "UNAUTHORIZED",
                        status: 401,
                    });
                } else {
                    console.log("adminDataadminData", adminData);
                    req.admin = adminData;
                    req.token = Token;
                    next();
                }
            }
        } else {
            res.status(403).json({
                message: "ADMIN FORBIDDEN",
                status: 403,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "SOMETHING WENT WRONG",
            status: 500,
        });
    }
};


