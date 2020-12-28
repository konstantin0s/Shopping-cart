const express =  require('express');
const bodyParser =  require('body-parser');
const mongoose =  require('mongoose');
const shortid =  require('shortid');
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, 
    useCreateIndex: true, useUnifiedTopology: true})
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

    //define model
    const Product = mongoose.model('products',
    new mongoose.Schema({
        _id: {type: String, default: shortid.generate()},
        title: {type: String},
        description: {type: String},
        image: {type: String},
        price: {type: Number},
        availableSizes: {type: String}
    }));

    app.get('/api/products', async (req, res) => {
        const products = await Product.find({});
        res.send(products);
    });

    app.post('/api/products', async (req, res) => {
        const newProduct =  Product(req.body);
     const savedProduct = await newProduct.save();
     res.send(savedProduct);
    });

    app.delete('/api/products/:id', async (req, res) => {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.send(deletedProduct);
    });

    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server started on port 5000...Happy Surfing`);
    });
    
    
    //close mongodb
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose disconnected on app termination');
            process.exit(0);
        });
    });
    
    module.exports = app;