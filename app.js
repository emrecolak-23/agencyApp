// Import Packages
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
// Import Routes
const PageRouter = require('./routes/PageRoute');
const ProjectRouter = require('./routes/ProjectRoute');
const CategoryRouter = require('./routes/CategoryRoute');
const ClientRouter = require('./routes/ClientRoute');
// Create express app
const app = express();

// Template Engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',{
  methods: ['POST','GET']
}));
app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false}));
app.use(flash());
app.use((req, res, next)=>{
  res.locals.flashMessages = req.flash();
  next();
});

// Page Routes
app.use('/project', ProjectRouter);
app.use('/', PageRouter);
app.use('/category', CategoryRouter);
app.use('/client', ClientRouter);


// Connect DB
const dbURI =
  'mongodb+srv://emco:emco3232@nodetuts.iuulr.mongodb.net/agencyApp?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('database connected');
    // declare port number
    const PORT = process.env.PORT || 14000;
    // listen for request
    app.listen(PORT, () => {
      console.log('Server listened');
    });
  })
  .catch((err) => {
    console.log(err);
  });
