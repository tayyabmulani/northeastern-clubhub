import eventRouter from "./eventRoutes.js";
import filterRouter from "./filterRoutes.js";
//initializes and configures application routes
const initializeRoutes = (app) => {
    //mount eventRouter to handle routes at /api/club-admin/events
    app.use('/api/club-admin/events', eventRouter);
    app.use("/api/filters", filterRouter); // Register filter routes
}
export default initializeRoutes;