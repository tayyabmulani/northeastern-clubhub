import eventRouter from "./eventRoutes.js";
//initializes and configures application routes
const initializeRoutes = (app) => {
    //mount eventRouter to handle routes at /api/club-admin/events
    app.use('/api/club-admin/events', eventRouter);
}
export default initializeRoutes;