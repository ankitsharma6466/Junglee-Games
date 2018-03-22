import Express from 'express';
import Sessions from 'client-sessions';
import Config from './config.json';
import CookieParser from 'cookie-parser';
import BodyParser from 'body-parser';
import Apis from './app/api';

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.set('trust proxy', 1); // trust first proxy

app.use(CookieParser());

app.use(Sessions({
  cookieName: 'session',
  secret: Config.session_key,
  duration: 24 * 60 * 60 * 1000,
  saveUninitialized: true,
  cookie: {
    secureProxy: Config.is_secure,
    httpOnly: true,
  },
}));

/**
 * Middelware to intercept requests and allow headers
 * basically for enabling CORS
 *
 * */
app.use(function (req, res, next) {
  
  //request sources
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
  // Request methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  // Request headers
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  next();
});

// bind routes for /api/*
Apis(app);

app.listen(Config.port, () => console.log('Server started'));

