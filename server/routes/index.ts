import authRoute from "./authRoute";


function routes(app: any) {
    app.use("/api/register", authRoute);
}


export default routes;