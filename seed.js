require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Vehicle = require('./models/vehicle');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'audi', sortOrder: 10},
        {name: 'bentley', sortOrder: 11},
        {name: 'bmw', sortOrder: 12},
        {name: 'cadillac', sortOrder: 13},
        {name: 'ferrari', sortOrder: 14},
        {name: 'lamborghini', sortOrder: 15},
        {name: 'landrover', sortOrder: 16},
        {name: 'mclaren', sortOrder: 17},
        {name: 'mercedes', sortOrder: 18},
        {name: 'nissan', sortOrder: 19},
        {name: 'porsche', sortOrder: 20},
        {name: 'rolls-royce', sortOrder: 21},
    ]);
    let audi = categories[0]._id;
    await Vehicle.deleteMany({});
    const vehicles = await Vehicle.create([
        {name: 'NEW! Audi RS Q8 ( Grey )', 
        image:[ 'src/Assets/images/audi/a3/1.webp',
                'src/Assets/images/audi/a3/2.webp',
                'src/Assets/images/audi/a3/3.webp',
                'src/Assets/images/audi/a3/4.webp',
                'src/Assets/images/audi/a3/5.webp',
    ], 
    category: categories[0], price: 200},
    ])
    console.log(vehicles)
    console.log(categories)
    process.exit();
})();