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
  
  app.post(`${basePath}/makePayment`, (req, res) => {
    let packageId = req.body.packageId;
    let paymentOptionId = req.body.paymentOptionId;
    let amount = req.body.amount;
    
    let message = `Payment successful for package ${packageId}, payment method ${paymentOptionId}, amount ${amount}`
    console.log(message);
    
    res.send({
      success: true,
      message: `Payment successful for package ${packageId}, payment method ${paymentOptionId}, amount ${amount}`
    });
  });
};

export default paymentApiBindings;