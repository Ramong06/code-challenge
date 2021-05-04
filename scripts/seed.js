let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect("mongodb+srv://ramon5406:Achilles54@businesses.ri0rv.mongodb.net/businesses?retryWrites=true&w=majority" || "mongodb://localhost/businesses", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let businessSeed = [
	{
		name: 'Orangetheory Fitness',
		address: '23144 Cinco Ranch Blvd, Katy, TX 77494',
		phoneNumber: '(281) 727-0098',
		website: 'https://www.orangetheory.com/en-us/',
		image:
			'https://qtxasset.com/clubindustry/1616688713/OrangeTheory-DA-770.jpg/OrangeTheory-DA-770.jpg?W3EjAi15iqktOf_z.7s6VL.ytdjNqQns'
	},
    {
        name: "LA Fitness",
        address: "19550 Restaurant Row, Houston, TX 77084",
        phoneNumber: "(281) 578-0115",
        website: "https://www.lafitness.com/",
        image: "https://lh3.googleusercontent.com/proxy/hT_T8uPsujd1Vw5fTnGa3LD7T5QNlG5Raey2YabZCiBNmIF6mFBIxcQWiYeDZYNsGmdkl8ZUNjNH1V6L848c9LJUZvKnTgdpMWVUGBWXYZMECb2JpA1s8bCAZe-4l94uU89S4ma4aw2HeNxXNEkbL2bD67_ZTLdS26K_qqhvhxY"
    },
    	{
		name: "F45",
		address: '3011 W Grand Pkwy N, Katy, TX 77449',
		phoneNumber: '(281) 400-1441',
		website: 'https://f45training.com/',
		image:
			'https://physiosmart.com.au/cms/wp-content/uploads/2016/10/F45-LOGO-300x240-300x240.png',
	},
    {
        name: "Fitness Connection",
        address: "333 Mason Rd, Katy, TX 77450",
        phoneNumber: "(281) 647-3000",
        website: "https://fitnessconnection.com/",
        image: "https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/clubindustry/files/uploads/2013/10/fitness-connection-595.gif?FW7uK9Tx_90E6xjO7BfTwCgm9C1ysGx0&itok=XysMUm3p"
    },
    {
        name: "Behemoth Gym",
        address: "18611 FM 529 Suite 202, Cypress, TX 77433",
        phoneNumber: "(832) 430-2951",
        website: "https://behemothgym.com/",
        image: "https://profilepicsbucket.crossfit.com/907ee-A4053_2-184.jpg"
    },
    {
        name: "Life Time",
        address: "18611 FM 529 Suite 202, Cypress, TX 77433",
        phoneNumber: "23211 Cinco Ranch Blvd, Katy, TX 77494",
        website: "https://www.lifetime.life/",
        image: "https://qtxasset.com/clubindustry/files/life-time-h-770.jpg"
    },
];

db.Businesses.deleteMany({})
	.then(() => db.Businesses.collection.insertMany(businessSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});