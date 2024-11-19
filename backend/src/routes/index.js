import eventRouter from "./eventRoutes.js";
import filterRouter from "./filterRoutes.js";

const initializeRoutes = (app) => {
    app.use('/api/club-admin/events', eventRouter);
    app.use("/api/filters", filterRouter); // Register filter routes
}
export default initializeRoutes;