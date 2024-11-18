import eventRouter from "./eventRoutes.js";

const initializeRoutes = (app) => {
    app.use('/api/club-admin/events', eventRouter);
}
export default initializeRoutes;