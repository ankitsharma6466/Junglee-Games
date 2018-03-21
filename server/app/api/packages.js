import PackageService from '../services/packages';

const packagesApiBindings = (basePath, app) => {
  app.get(`${basePath}/packages`, async (req, res, next) => {
    try {
      const data = await PackageService.getPackages();
      res.send(data);
    } catch (e) {
      next(e);
    }
  });
};

export default packagesApiBindings;