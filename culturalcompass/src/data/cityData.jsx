// /data/cityData.ts

export const projectData = [
  {
    id: 1,
    city: "Kathmandu",
    des: "Kathmandu, the capital city of Nepal, is rich in history, culture, and natural beauty. Kathmandu has a rich history that dates back over 2,000 years. The city is famous for its ancient temples, palaces, and vibrant culture, blending Hindu, Buddhist, and traditional Nepalese influences.",
    des2: "Fun facts Kathmandu is the capital city of Nepal. The city was founded in the 2nd century CE. Kathmandu was known as 'Kantipur' and was later renamed. Kathmandu is home to seven UNESCO World Heritage Sites. The valley is surrounded by four mountains: Shivapuri, Phulchowki, Nagarjun, and Chandragiri.",
    image: "/kathmandu.png", // This could be a featured image for Kathmandu
    images: [
      { id: 1, title: "Kathmandu Durbar Square", image: "/homebg1.jpg", des: "A historic palace and temple complex in the heart of Kathmandu." },
      { id: 2, title: "Swayambhunath Stupa", image: "/homebg5.png", des: "A sacred Buddhist site, also known as the Monkey Temple." },
      { id: 3, title: "Boudhanath Stupa", image: "/boudha.jpg", des: "One of the largest Buddhist stupas in the world, located in Kathmandu." },
      { id: 4, title: "Pashupatinath Temple", image: "/pashuapti.png", des: "A sacred Hindu temple located on the banks of the Bagmati River." },
      { id: 5, title: "Kritipur Valley", image: "/kirtipur2.png", des: "A serene town with historic sites and stunning views of the valley." },
    ],
    attractions: [
      { name: "Nagarkot", description: "Located a short drive from Kathmandu, Nagarkot offers breathtaking views of the Himalayas, especially at sunrise and sunset." },
      { name: "Pashupatinath Temple", description: "A sacred Hindu temple located on the banks of the Bagmati River." },
      { name: "Garden of Dreams", description: "A serene, restored historical garden in the heart of Kathmandu, offering a peaceful escape from the busy city." },
    ],
    nearby: [
      { name: "Nagarkot", description: "Located a short drive from Kathmandu, Nagarkot offers breathtaking views of the Himalayas, especially at sunrise and sunset." },
      { name: "Bhaktapur", description: "A UNESCO World Heritage Site, Bhaktapur is known for its medieval architecture, cobbled streets, and ancient temples." },
      { name: "Nuwakot", description: "A historically significant district in Nepal, known for the Nuwakot Durbar and its role in unifying the nation under King Prithvi Narayan Shah." },
      { name: "Makwanpur", description: "A district famous for its natural beauty and the historic Makwanpur Gadhi, which played a crucial role during Nepal's unification." },
    ],
    food: [
      { id: 1, name: "Selroti", description: "A traditional ring-shaped sweet bread made from rice flour." },
      { id: 2, name: "MOMO", description: "Small dumplings filled with meat or vegetables, served with a spicy dipping sauce." },
      { id: 3, name: "JuJu Dhau (Curd)", description: "A creamy and sweet yogurt specialty from Bhaktapur." },
      { id: 4, name: "Samay Baji (Newari Cuisine)", description: "A traditional Newari dish served with beaten rice, beans, and spicy achar." },
      { id: 5, name: "Chhang/Aila (Local Beverage)", description: "A local alcoholic beverage enjoyed in the region." },
    ],
  },

  {
    id: 2,
    city: "Pokhara",
    des: "Pokhara, known as the gateway to the Annapurna region, is a picturesque city in Nepal. It is famous for its tranquil lakes, stunning mountain views, and adventure activities. The city is a major tourist hub, offering a perfect blend of natural beauty and modern amenities.",
    des2: "Fun facts Pokhara is home to Phewa Lake, one of Nepal's most beautiful lakes. The city is known as the 'City of Lakes.' Pokhara offers breathtaking views of the Annapurna and Machapuchare mountain ranges. It serves as a starting point for many trekking routes in the Annapurna region.",
    image: "/pokhara.png", 
    images: [
      { id: 1, title: "Phewa Lake", image: "/lakeside.png", des: "A serene lake surrounded by lush hills, offering boating and stunning reflections of the Annapurna range." },
      { id: 2, title: "World Peace Pagoda", image: "/peace.png", des: "A beautiful stupa on a hilltop with panoramic views of Pokhara city and Phewa Lake." },
      { id: 3, title: "Devi's Falls", image: "/davisfall.png", des: "A unique waterfall where the river disappears into an underground tunnel." },
      { id: 4, title: "Sarangkot", image: "/sarangkot.png", des: "A popular viewpoint for sunrise and paragliding, offering stunning Himalayan vistas." },
    ],
    attractions: [
      { name: "Phewa Lake", description: "A serene lake surrounded by lush hills, offering boating and stunning reflections of the Annapurna range." },
      { name: "World Peace Pagoda", description: "A beautiful stupa on a hilltop with panoramic views of Pokhara city and Phewa Lake." },
      { name: "Sarangkot", description: "A popular viewpoint for sunrise and paragliding, offering stunning Himalayan vistas." },
    ],
    nearby: [
      { name: "Begnas Lake", description: "A tranquil lake surrounded by natural beauty, perfect for a peaceful retreat." },
      { name: "Kahun Danda", description: "A scenic hill offering panoramic views of Pokhara and the Annapurna range." },
      { name: "Dhampus Village", description: "A picturesque village on the trekking route to the Annapurna region, known for its cultural charm." },
      { name: "Ghandruk", description: "A traditional Gurung village offering stunning mountain views and cultural experiences." },
    ],
    food: [
      { id: 1, name: "Thakali Khana Set", description: "A traditional Nepali meal with rice, lentils, vegetables, and pickles." },
      { id: 2, name: "Tibetan Bread", description: "A popular fried bread served with honey or butter, often enjoyed with tea." },
      { id: 3, name: "Yak Cheese", description: "A creamy and flavorful cheese made from yak milk, a specialty of the region." },
      { id: 4, name: "Fried Fish from Phewa Lake", description: "Freshly caught fish from Phewa Lake, fried and served as a local delicacy." },
      { id: 5, name: "Chhurpi Soup", description: "A hearty soup made with fermented cheese, popular in the highlands of Nepal." },
    ],
  },
  
  {
    id: 3,
    city: "Chitwan",
    des: "Chitwan, located in the southern plains of Nepal, is famous for its wildlife, lush forests, and cultural experiences. It is home to the Chitwan National Park, a UNESCO World Heritage Site, and offers unique opportunities to explore Nepal’s natural beauty and indigenous Tharu culture.",
    des2: "Fun facts about Chitwan: Chitwan National Park is the first national park of Nepal, established in 1973. It is home to endangered species like the one-horned rhinoceros and Bengal tiger. The park spans over 952.63 sq. km and consists of diverse ecosystems, including forests, grasslands, and rivers. The Rapti River flowing through Chitwan is a popular spot for bird watching and canoeing. Chitwan is known for its vibrant Tharu culture, with traditional dances and cuisines being key highlights.",
    image: "/cnp.jpg",
    images: [
      { id: 1, title: "Chitwan National Park", image: "/cnp.jpg", des: "A UNESCO World Heritage Site known for its diverse wildlife, including rhinos, tigers, and crocodiles." },
      { id: 2, title: "Rapti River", image: "/rapti.png", des: "A tranquil river offering opportunities for bird watching, canoeing, and enjoying beautiful sunsets." },
      { id: 3, title: "Tharu Cultural Museum", image: "/tharudance.png", des: "A museum dedicated to showcasing the rich culture and traditions of the Tharu community." },
      { id: 4, title: "Elephant Safari", image: "/elephantbreeding.png", des: "An exciting safari experience that allows visitors to observe elephants and other wildlife up close." },
      { id: 5, title: "Canoeing on Rapti", image: "/chitwan.png", des: "A peaceful way to explore the Rapti River while enjoying the surrounding wildlife and landscapes." },
    ],
    attractions: [
      { name: "Chitwan National Park", description: "A UNESCO World Heritage Site known for its diverse wildlife, including rhinos, tigers, and crocodiles." },
      { name: "Rapti River", description: "A tranquil river offering opportunities for bird watching, canoeing, and enjoying beautiful sunsets." },
      { name: "Elephant Breeding Center", description: "A unique center where visitors can learn about and interact with elephants." },
      { name: "Tharu Cultural Museum", description: "A museum dedicated to showcasing the rich culture and traditions of the Tharu community." },
      { name: "Jeep Safari", description: "Explore the wilderness of Chitwan National Park with a thrilling jeep safari adventure." },
    ],
    food: [
      { id: 1, name: "Tharu Cuisine", description: "Traditional dishes like dhikari (rice-based bread) and ghongi (snail curry), reflecting Tharu culture." },
      { id: 2, name: "Freshwater Fish", description: "Delicious fish dishes prepared with freshly caught fish from local rivers." },
      { id: 3, name: "Chicken Barbecue", description: "Grilled chicken served with local spices, a favorite among tourists." },
      { id: 4, name: "Rice Beer", description: "A local alcoholic beverage made from fermented rice, popular in Tharu communities." },
      { id: 5, name: "Bamboo Shoot Curry", description: "A unique dish made with fresh bamboo shoots and traditional spices." },
    ],
    nearby: [
      { name: "Sauraha", description: "A popular tourist hub near Chitwan National Park, offering lodges, restaurants, and wildlife tours." },
      { name: "Devghat", description: "A sacred site for Hindus, located at the confluence of the Trishuli and Kali Gandaki rivers." },
      { name: "Bharatpur", description: "The main city in Chitwan District, known for its vibrant markets and connectivity." },
      { name: "Lumbini", description: "The birthplace of Lord Buddha, located a few hours' drive from Chitwan." },
    ],
  },
      {
        id: 4,
        city: "Lumbini",
        des: "Lumbini, located in the southwestern plains of Nepal, is the birthplace of Lord Buddha and a UNESCO World Heritage Site. It is a major pilgrimage site for Buddhists and a symbol of peace, attracting visitors from around the globe.",
        des2: "Fun facts about Lumbini: Lumbini is believed to be the exact birthplace of Siddhartha Gautama, later known as Lord Buddha, in 623 BCE. The sacred Maya Devi Temple marks the spot where Queen Maya Devi gave birth. Lumbini hosts over 25 international monasteries built by different countries, representing various architectural styles of Buddhism. The Ashokan Pillar, erected by Emperor Ashoka in 249 BCE, stands as a testament to his devotion to Buddhism. The sacred garden surrounding the temple is tranquil and symbolizes peace.",
        image: "/lumbini.png",
        images: [
          { id: 1, title: "Maya Devi Temple", image: "/lumbini.png", des: "The sacred temple marking the birthplace of Lord Buddha." },
          { id: 2, title: "Ashokan Pillar", image: "/ashokanpillar.jpg", des: "An ancient stone pillar erected by Emperor Ashoka, bearing inscriptions about his pilgrimage to Lumbini." },
          { id: 3, title: "World Peace Pagoda", image: "/peace.png", des: "A stunning white pagoda built by Japanese Buddhists as a symbol of world peace." },
          { id: 4, title: "Sacred Garden", image: "/sacredgarden.jpg", des: "A tranquil garden surrounding the Maya Devi Temple, symbolizing peace." },
          { id: 5, title: "Monastic Zone", image: "/monasticzone.jpg", des: "A collection of monasteries built by various countries, representing different Buddhist cultures." }
        ],
        attractions: [
          { name: "Maya Devi Temple", description: "The most sacred site in Lumbini, marking the birthplace of Lord Buddha." },
          { name: "Ashokan Pillar", description: "An ancient stone pillar erected by Emperor Ashoka, bearing inscriptions about his pilgrimage to Lumbini." },
          { name: "World Peace Pagoda", description: "A stunning white pagoda built by Japanese Buddhists as a symbol of world peace." },
          { name: "Monastic Zone", description: "A collection of monasteries built by countries worldwide, showcasing diverse Buddhist cultures and architecture." },
          { name: "Lumbini Museum", description: "A museum that houses relics, artifacts, and historical documents related to Lord Buddha and Buddhism." }
        ],
        food: [
          { id: 1, name: "Tharu Cuisine", description: "Local Tharu dishes like dhikari (rice bread) and ghongi (snail curry) reflect the region's culture." },
          { id: 2, name: "Lapsi Candy", description: "Sweet and tangy candy made from the native lapsi fruit, popular in the region." },
          { id: 3, name: "Fish Curry", description: "Delicious freshwater fish cooked with traditional Nepali spices." },
          { id: 4, name: "Rice Beer", description: "A local alcoholic beverage, traditionally brewed in the region." }
        ],
        nearby: [
          { name: "Tilaurakot", description: "The ancient capital of the Shakya kingdom, believed to be the childhood home of Lord Buddha." },
          { name: "Kapilvastu", description: "A significant historical site linked to the early life of Lord Buddha." },
          { name: "Ramagrama Stupa", description: "The only undisturbed stupa containing the relics of Lord Buddha." },
          { name: "Devdaha", description: "The maternal home of Queen Maya Devi and a site of historical significance in Buddhism." }
        ]
      
    },
    
    // Add more cities and expand data as needed
  ];
  




