import PaymentService from '../services/payments';

const paymentApiBindings = (basePath, app) => {
  app.get(`${basePath}/paymentOptions`, async (req, res, next) => {
    try {
      const data = await PaymentService.getPaymentOptions();
      res.send(data);
    } catch (e) {
      next(e);
    }
  });
};

export default paymentApiBindings;