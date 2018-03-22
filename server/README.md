Junglee Games Server

This will serve as API server.

Consist of 3 REST apis

1) Get packages
(GET) /api/packages
to serve different packages available for purchase

2) Get payment options
(GET) /api/paymentOptions
To server different payment options available

3) Make payment
(POST) /api/makePayment
To make final payment


installation steps
-> npm install

to start server
-> npm run start-dev


server runs on port 8080

to test try
http://localhost:8080/api/packages