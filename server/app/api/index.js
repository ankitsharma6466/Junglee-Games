import PackagesRouter from './packages';
import PaymentsRouter from './payments';

const basePath = "/api";

const apiRouterBinding = (app) => {
  PackagesRouter(basePath, app);
  PaymentsRouter(basePath, app);
};

export default apiRouterBinding;