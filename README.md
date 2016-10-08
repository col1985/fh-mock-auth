fh-mock-auth
====

Simple middleware module for returning mock responses RHMAP $fh.auth api during local development.

### Usage

Add middleware to `RHMAP` cloud app. *Note:* It is important check for platform env-var before loading middleware. Otherwise `$fh.auth` requests will not be intercepted.  

UserID is can be set by adding an env-var `process.env.USER_ID`.  

```js
// load normal dependencies...
var mockAuth = require('fh-mock-auth');

// Standard template stuff...

// Important! check for FH_ENV env-var
if(!process.env.FH_ENV) {
    process.env.USER_ID = 'joebloggs@example.com';
    // ...and load the middleware
    app.use(mockAuth);
}

// Important! ...add before middleware below 
app.use('/sys', mbaasExpress.sys(securableEndpoints));
app.use('/mbaas', mbaasExpress.mbaas);
```