import express, {Express, Request, Response} from 'express';

import inventoryRoutes from './inventoryRoutes';
import userRoutes from './userRoutes';
import CategoryRoutes from './CategoryRoutes';

const mainRoute: Express = express();
mainRoute.use('/api/inventory',inventoryRoutes);
mainRoute.use('/api/category',CategoryRoutes);
mainRoute.use('/api/user',userRoutes);

export default mainRoute;