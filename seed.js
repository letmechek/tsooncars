require('dotenv').config();
require('./config/database');

const VehicleModel = require('./models/vehicleCategory');
const Vehicle = require('./models/vehicle');

(async function() {
    await VehicleModel.deleteMany({});
    const VehicleModels = await VehicleModel.create([
        {name: 'audi', image: '/images/brands/audi_1.png', sortOrder: 10},
        {name: 'bentley', image: '/images/brands/bentley_1.png', sortOrder: 11},
        {name: 'bmw', image: '/images/brands/bmw.avif.avif.avif', sortOrder: 12},
        {name: 'cadillac', image: '/images/brands/cadillac.avif.avif.avif', sortOrder: 13},
        {name: 'ferrari', image: '/images/brands/ferrari.png', sortOrder: 14},
        {name: 'lamborghini', image: '/images/brands/lamborghini.avif.avif.avif', sortOrder: 15},
        {name: 'landrover', image: '/images/brands/landrover.avif.avif', sortOrder: 16},
        {name: 'mclaren', image: '/images/brands/mclaren.webp', sortOrder: 17},
        {name: 'mercedes', image: '/images/brands/mercedes.png', sortOrder: 18},
        {name: 'nissan', image: '/images/brands/nissan.avif.avif.avif', sortOrder: 19},
        {name: 'porsche', image: '/images/brands/porsche.avif.avif.avif', sortOrder: 20},
        {name: 'rolls-royce', image: '/images/brands/rolls-royce.avif.avif.avif', sortOrder: 21},
    ]);
    
    let audi = VehicleModels[0]._id;
    let bentley = VehicleModels[1]._id;
    let bmw = VehicleModels[2]._id;
    let cadillac = VehicleModels[3]._id;
    let ferrari = VehicleModels[4]._id;
    let lamborghini = VehicleModels[5]._id;
    let landrover = VehicleModels[6]._id;
    let mclaren = VehicleModels[7]._id;
    let mercedes = VehicleModels[8]._id;
    let nissan = VehicleModels[9]._id;
    let porsche = VehicleModels[10]._id;
    let rolls = VehicleModels[11]._id;

    await Vehicle.deleteMany({});
    const vehicles = await Vehicle.create([
        // AUDI /////////////////
        {name: 'Audi A3 2022 White', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/a32022white/1.webp',
        '/images/audi/a32022white/2.webp',
        '/images/audi/a32022white/3.webp',
        '/images/audi/a32022white/4.webp',
        '/images/audi/a32022white/5.webp',
    ], 
},
        {name: 'NEW! Audi RS Q8 ( Grey )', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/q32022/1.webp',
    ], 
},
        {name: 'AUDI A8L 2020 (BLACK)', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/a8l2020black/1.webp',
        '/images/audi/a8l2020black/2.webp',
        '/images/audi/a8l2020black/3.webp',
        '/images/audi/a8l2020black/4.webp',
        '/images/audi/a8l2020black/5.webp',
        '/images/audi/a8l2020black/6.webp',
        '/images/audi/a8l2020black/7.webp',
    ], 
},
        {name: 'Audi Q5 2022', 
        VehicleModel: audi, price: 166,
        image:[ '/images/audi/q52022/1.webp',
    ], 
},
        {name: 'AUDI Q8 2022', 
        VehicleModel: audi, price: 192,
        image:[ '/images/audi/q82022/1.webp',
        '/images/audi/q82022/2.webp',
    ], 
},
        {name: 'AUDI R8 2021 (GREY NARDO)', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/r82021greynardo/1.webp',
        '/images/audi/r82021greynardo/2.webp',
        '/images/audi/r82021greynardo/3.webp',
        '/images/audi/r82021greynardo/4.webp',
        '/images/audi/r82021greynardo/5.webp',
        '/images/audi/r82021greynardo/6.webp',
        '/images/audi/r82021greynardo/7.webp',
        '/images/audi/r82021greynardo/8.webp',
        '/images/audi/r82021greynardo/9.webp',
    ], 
},
        {name: 'AUDI R8 2021 ( WHITE )', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/r82021white/1.webp',
        '/images/audi/r82021white/2.webp',
        '/images/audi/r82021white/3.webp',
        '/images/audi/r82021white/4.webp',
        '/images/audi/r82021white/5.webp',
        '/images/audi/r82021white/6.webp',
        '/images/audi/r82021white/7.webp',
        '/images/audi/r82021white/8.webp',
        '/images/audi/r82021white/9.webp',
        '/images/audi/r82021white/10.webp',
    ], 
},
        {name: 'Audi RS5 Black', 
        VehicleModel: audi, price: 230,
        image:[ '/images/audi/rs5black/1.webp',
        '/images/audi/rs5black/2.webp',
        '/images/audi/rs5black/3.webp',
        '/images/audi/rs5black/4.webp',
        '/images/audi/rs5black/5.webp',
        '/images/audi/rs5black/6.webp',
        '/images/audi/rs5black/7.webp',
        '/images/audi/rs5black/8.webp',
    ], 
},
        {name: 'Audi RS5 Green 2022', 
        VehicleModel: audi, price: 282,
        image:[ '/images/audi/rs5green2022/1.webp',
        '/images/audi/rs5green2022/2.webp',
        '/images/audi/rs5green2022/3.webp',
        '/images/audi/rs5green2022/4.webp',
        '/images/audi/rs5green2022/5.webp',
        '/images/audi/rs5green2022/6.webp',
        '/images/audi/rs5green2022/7.webp',
        '/images/audi/rs5green2022/8.webp',
        '/images/audi/rs5green2022/9.webp',
    ], 
},
        {name: 'Audi RS Q8 ( Black )', 
        VehicleModel: audi, price: 256,
        image:[ '/images/audi/rs8black/1.webp',
        '/images/audi/rs8black/2.webp',
        '/images/audi/rs8black/3.webp',
        '/images/audi/rs8black/4.webp',
        '/images/audi/rs8black/5.webp',
        '/images/audi/rs8black/6.webp',
        '/images/audi/rs8black/7.webp',
        '/images/audi/rs8black/8.webp',
    ], 
},
        {name: 'NEW! Audi RS Q8 ( Grey )', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/rs8grey/1.webp',
        '/images/audi/rs8grey/2.webp',
        '/images/audi/rs8grey/3.webp',
        '/images/audi/rs8grey/4.webp',
        '/images/audi/rs8grey/5.webp',
        '/images/audi/rs8grey/6.webp',
        '/images/audi/rs8grey/7.webp',
    ], 
},
        {name: 'AUDI RS6 2023 EDITION (NARDO GREY)', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/rs62023nardogrey/1.webp',
        '/images/audi/rs62023nardogrey/2.webp',
        '/images/audi/rs62023nardogrey/3.webp',
        '/images/audi/rs62023nardogrey/4.webp',
        '/images/audi/rs62023nardogrey/5.webp',
    ], 
},
        {name: 'Audi RS7 2021 EDITION (Nardo Grey)', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/rs72021nardogrey/1.jpeg',
        '/images/audi/rs72021nardogrey/2.webp',
        '/images/audi/rs72021nardogrey/3.webp',
        '/images/audi/rs72021nardogrey/4.webp',
    ], 
},
        {name: 'Audi RS Q8 ( White )', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/rsq8white/1.jpeg',
        '/images/audi/rsq8white/2.webp',
        '/images/audi/rsq8white/3.webp',
        '/images/audi/rsq8white/4.webp',
    ], 
},
        {name: 'Audi RS Q3 2022', 
        VehicleModel: audi, price: 200,
        image:[ '/images/audi/rsq32022/1.webp',
    ], 
},
        {name: 'AUDI A6 2022 (BLACK)', 
        VehicleModel: audi, price: 103,
        image:[ '/images/audi/a62022black/1.jpeg',
                '/images/audi/a62022black/2.webp',
                '/images/audi/a62022black/3.webp',
                '/images/audi/a62022black/4.webp',
                '/images/audi/a62022black/5.webp',
                '/images/audi/a62022black/6.webp',
    ], 
},
//        MCLAREN /////////////////
        {name: 'McLaren 570S 2020 (GREEN)', 
        VehicleModel: mclaren, price: 844,
        image:[ '/images/mclaren/5702020/1.webp',
                
    ], 
},
        {name: 'McLaren 720S 2020 (WHITE)', 
        VehicleModel: mclaren, price: 844,
        image:[ '/images/mclaren/7202020/1.webp',
                '/images/mclaren/7202020/2.webp',
                '/images/mclaren/7202020/3.webp',
                
    ], 
},
//      FEWRRARI /////////////////
        {name: 'FERRARI 488 GTB 2022 (RED)', 
        VehicleModel: ferrari, price: 629,
        image:[ '/images/ferrari/488gtb/1.webp',
                '/images/ferrari/488gtb/2.webp',
                '/images/ferrari/488gtb/3.webp',
                '/images/ferrari/488gtb/4.webp',
                '/images/ferrari/488gtb/5.webp',
                '/images/ferrari/488gtb/6.webp',
                '/images/ferrari/488gtb/7.webp',
                '/images/ferrari/488gtb/8.webp',
                '/images/ferrari/488gtb/9.webp',
                '/images/ferrari/488gtb/10.webp',     
    ], 
},
        {name: 'Ferrari 488 Spider', 
        VehicleModel: ferrari, price: 629,
        image:[ '/images/ferrari/488spider/1.webp',
                '/images/ferrari/488spider/2.webp',
                '/images/ferrari/488spider/3.webp',   
    ], 
},
        {name: 'Ferrari F8 Spider 2022', 
        VehicleModel: ferrari, price: 629,
        image:[ '/images/ferrari/f8spider/1.webp',
                '/images/ferrari/f8spider/2.webp',
                '/images/ferrari/f8spider/3.webp',
                '/images/ferrari/f8spider/4.webp',
                '/images/ferrari/f8spider/5.webp',
                '/images/ferrari/f8spider/6.webp',
                '/images/ferrari/f8spider/7.webp',
                '/images/ferrari/f8spider/8.webp',
                '/images/ferrari/f8spider/9.webp',                
    ], 
},
        {name: 'Ferrari Portofino', 
        VehicleModel: ferrari, price: 461,
        image:[ '/images/ferrari/portofino/1.webp',
                '/images/ferrari/portofino/2.webp',
                '/images/ferrari/portofino/3.webp',
                '/images/ferrari/portofino/4.webp',
                '/images/ferrari/portofino/5.webp',
                '/images/ferrari/portofino/6.webp',
                '/images/ferrari/portofino/7.webp',
                '/images/ferrari/portofino/8.webp',
                '/images/ferrari/portofino/9.webp',
                '/images/ferrari/portofino/10.webp',
                '/images/ferrari/portofino/11.webp',
                
    ], 
},
//      BENTLEY /////////////////
        {name: 'BENTLEY BENTAYGA 2020', 
        VehicleModel: bentley, price: 1221,
        image:[ '/images/bentley/bentayaga2020/1.webp',
                '/images/bentley/bentayaga2020/2.webp',
                '/images/bentley/bentayaga2020/3.webp',
                '/images/bentley/bentayaga2020/4.webp',
                '/images/bentley/bentayaga2020/5.webp',

    ], 
},
        {name: 'BENTLEY BENTAYGA 2021 (BLACK)', 
        VehicleModel: bentley, price: 1716,
        image:[ '/images/bentley/bentayaga2021black/1.webp',
                '/images/bentley/bentayaga2021black/2.webp',
                '/images/bentley/bentayaga2021black/3.webp',
                '/images/bentley/bentayaga2021black/4.webp',
    ], 
},
        {name: 'BENTLEY BENTAYGA 2021 (BLUE)', 
        VehicleModel: bentley, price: 1461,
        image:[ '/images/bentley/bentayaga2021blue/1.webp',
                '/images/bentley/bentayaga2021blue/2.webp',
                '/images/bentley/bentayaga2021blue/3.webp',
                '/images/bentley/bentayaga2021blue/4.webp',
                '/images/bentley/bentayaga2021blue/5.webp',
                '/images/bentley/bentayaga2021blue/6.webp',
                '/images/bentley/bentayaga2021blue/7.webp',
                '/images/bentley/bentayaga2021blue/8.webp',
                '/images/bentley/bentayaga2021blue/9.webp',
                '/images/bentley/bentayaga2021blue/10.webp',
                '/images/bentley/bentayaga2021blue/11.webp',
                '/images/bentley/bentayaga2021blue/11.webp',
                
    ], 
},
        {name: 'Bentley Continental GT Convertible (GREY)', 
        VehicleModel: bentley, price: 2299,
        image:[ '/images/bentley/continentalgt/1.webp',
                '/images/bentley/continentalgt/2.webp',
                '/images/bentley/continentalgt/3.webp',
                '/images/bentley/continentalgt/4.webp',
                '/images/bentley/continentalgt/5.webp',
                
    ], 
},
        {name: 'BENTLEY GT 2021 (GREY)', 
        VehicleModel: bentley, price: 639,
        image:[ '/images/bentley/gt2021grey/1.webp',
                '/images/bentley/gt2021grey/2.webp',
                '/images/bentley/gt2021grey/3.webp',
                '/images/bentley/gt2021grey/4.webp',
                '/images/bentley/gt2021grey/5.webp',
                
    ], 
},
        {name: 'BENTLEY GT 2022 FIRST EDITION (WHITE)', 
        VehicleModel: bentley, price: 461,
        image:[ '/images/bentley/gt2022/1.webp',
                '/images/bentley/gt2022/2.webp',
                '/images/bentley/gt2022/3.webp',
                '/images/bentley/gt2022/4.webp',
                '/images/bentley/gt2022/5.webp',            
    ], 
},
        {name: 'BENTLEY GTC ( White )', 
        VehicleModel: bentley, price: 639,
        image:[ '/images/bentley/gtcwhite/1.webp',
                '/images/bentley/gtcwhite/2.webp',
                '/images/bentley/gtcwhite/3.webp',
                '/images/bentley/gtcwhite/4.webp',
                '/images/bentley/gtcwhite/5.webp',
                '/images/bentley/gtcwhite/6.webp',             
    ], 
}
    ])
    console.log(vehicles)
    console.log(VehicleModels)
    process.exit();
})();