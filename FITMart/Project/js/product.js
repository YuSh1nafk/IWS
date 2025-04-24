var products = [
    {
        id: 1,
        name: "Spring Long Dress Dior",
        image: "../img/product-1.jpg",
        description: "This exquisite Spring Long Dress by Dior combines timeless elegance with modern comfort. Crafted from lightweight, breathable fabric, it’s perfect for warm days and special occasions alike.",
        price: 453.00,
        originalPrice: 999.00,
        rating: 4,
        reviews: [
            { user: "Sarah Lee", date: "15 Mar 2025", rating: 4, comment: "Absolutely stunning dress! The fit is perfect, and it feels so light and comfortable." },
            { user: "Emily Tran", date: "22 Apr 2025", rating: 5, comment: "Love the design and quality. Worth every penny!" }
        ],
        information: { material: "100% Cotton", care: "Dry Clean Only", fit: "Relaxed" }
    },
    {
        id: 2,
        name: "LeVi's Jean Shirt",
        image: "../img/product-2.jpg",
        description: "A classic denim shirt from LeVi's, perfect for casual outings with a rugged yet stylish look.",
        price: 653.00,
        originalPrice: 733.00,
        rating: 4,
        reviews: [
            { user: "Michael Brown", date: "10 Apr 2025", rating: 4, comment: "Great denim shirt! Fits well and looks awesome for casual days." },
            { user: "David Kim", date: "18 Apr 2025", rating: 5, comment: "Love the quality of this LeVi's shirt. Perfect for layering!" }
        ],
        information: { material: "Denim", care: "Machine Wash", fit: "Regular" }
    },
    {
        id: 3,
        name: "Mamba Horse Jacket",
        image: "../img/product-3.jpg",
        description: "Stay warm and stylish with this Mamba Horse Jacket, designed for both comfort and durability.",
        price: 223.00,
        originalPrice: 668.00,
        rating: 3,
        reviews: [
            { user: "James Carter", date: "25 Mar 2025", rating: 4, comment: "Really warm jacket! Kept me cozy during a chilly hike." },
            { user: "Ethan Nguyen", date: "30 Mar 2025", rating: 3, comment: "Looks great, but the zipper feels a bit flimsy. Still decent for the price." }
        ],
        information: { material: "Polyester", care: "Hand Wash", fit: "Slim" }
    },
    {
        id: 4,
        name: "Short Dress Markesta",
        image: "../img/product-4.jpg",
        description: "A chic short dress by Markesta, ideal for summer days and casual elegance.",
        price: 333.00,
        originalPrice: 885.00,
        rating: 4,
        reviews: [
            { user: "Olivia Tan", date: "07 Apr 2025", rating: 5, comment: "Absolutely in love with this dress! So comfortable and stylish." },
            { user: "Isabella Vu", date: "09 Apr 2025", rating: 4, comment: "Great for special occasions. The color is vibrant, though it wrinkles easily." }
        ],
        information: { material: "Cotton Blend", care: "Dry Clean", fit: "Fitted" }
    },
    {
        id: 5,
        name: "M&M Stylish Shirt",
        image: "../img/product-5.jpg",
        description: "This M&M Stylish Shirt offers a modern twist on classic design, perfect for any occasion.",
        price: 563.00,
        originalPrice: 999.00,
        rating: 4,
        reviews: [
            { user: "Lucas Tran", date: "12 Apr 2025", rating: 5, comment: "Love this shirt! The fit is perfect, and it looks so sharp." },
            { user: "Ryan Pham", date: "14 Apr 2025", rating: 4, comment: "Nice shirt, but the buttons could be more secure. Still a great piece!" }
        ],
        information: { material: "Cotton", care: "Machine Wash", fit: "Loose" }
    },
    {
        id: 6,
        name: "Luna Vest Suite",
        image: "../img/product-6.jpg",
        description: "The Luna Vest Suite combines sophistication and comfort for a standout look.",
        price: 999.00,
        originalPrice: 1500.00,
        rating: 5,
        reviews: [
            { user: "Sophia Lee", date: "15 Apr 2025", rating: 5, comment: "This vest suite is stunning! Perfect for formal events." },
            { user: "Henry Vu", date: "20 Apr 2025", rating: 5, comment: "Amazing quality and fit. I felt so confident wearing this!" }
        ],
        information: { material: "Wool Blend", care: "Dry Clean", fit: "Tailored" }
    },
    {
        id: 7,
        name: "Lucas Mangto",
        image: "../img/product-7.jpg",
        description: "A premium Lucas Mangto piece, offering luxury and versatility.",
        price: 889.00,
        originalPrice: 1700.00,
        rating: 4,
        reviews: [
            { user: "Ella Kim", date: "16 Apr 2025", rating: 4, comment: "Luxurious feel and great design, though it’s a bit pricey." },
            { user: "Liam Nguyen", date: "22 Apr 2025", rating: 5, comment: "Worth every penny! The silk fabric is incredible." }
        ],
        information: { material: "Silk", care: "Dry Clean", fit: "Relaxed" }
    },
    {
        id: 8,
        name: "Baby Shirt",
        image: "../img/product-8.jpg",
        description: "Soft and comfortable Baby Shirt, perfect for little ones.",
        price: 123.00,
        originalPrice: 200.00,
        rating: 3,
        reviews: [
            { user: "Emma Tran", date: "17 Apr 2025", rating: 4, comment: "So soft for my baby! The fit is perfect for everyday wear." },
            { user: "Noah Pham", date: "23 Apr 2025", rating: 3, comment: "Cute shirt, but it shrank a bit after washing." }
        ],
        information: { material: "Cotton", care: "Machine Wash", fit: "Regular" }
    },
    {
        id: 9,
        name: "Floral Summer Dress",
        image: "../img/product-9.jpg",
        description: "Light and breezy Floral Summer Dress, ideal for warm weather.",
        price: 199.00,
        originalPrice: 229.00,
        rating: 4,
        reviews: [
            { user: "Ava Nguyen", date: "18 Apr 2025", rating: 5, comment: "Perfect summer dress! The floral pattern is so pretty." },
            { user: "Lily Hoang", date: "24 Apr 2025", rating: 4, comment: "Love the lightweight feel, but the straps could be more adjustable." }
        ],
        information: { material: "Chiffon", care: "Hand Wash", fit: "Flowy" }
    },
    {
        id: 10,
        name: "Clara Black Dress",
        image: "../img/product-10.jpg",
        description: "Elegant Clara Black Dress, perfect for evening wear.",
        price: 443.00,
        originalPrice: 783.00,
        rating: 4,
        reviews: [
            { user: "Zoe Ly", date: "19 Apr 2025", rating: 4, comment: "Stunning black dress! Perfect for a night out." },
            { user: "Maya Bui", date: "25 Apr 2025", rating: 5, comment: "This dress fits like a dream. So elegant and chic!" }
        ],
        information: { material: "Polyester", care: "Dry Clean", fit: "Fitted" }
    },
    {
        id: 11,
        name: "Clara Snow White",
        image: "../img/product-11.jpg",
        description: "Pure and pristine Clara Snow White dress, a timeless classic.",
        price: 888.00,
        originalPrice: 999.00,
        rating: 5,
        reviews: [
            { user: "Nora Dang", date: "20 Apr 2025", rating: 5, comment: "This white dress is breathtaking! Perfect for my event." },
            { user: "Lydia Vo", date: "26 Apr 2025", rating: 4, comment: "Beautiful design, though it’s a bit sheer. Still love it!" }
        ],
        information: { material: "Satin", care: "Dry Clean", fit: "Slim" }
    },
    {
        id: 12,
        name: "Clara White Dress",
        image: "../img/product-12.jpg",
        description: "Simple yet stunning Clara White Dress for any occasion.",
        price: 333.00,
        originalPrice: 456.00,
        rating: 4,
        reviews: [
            { user: "Hanna Duong", date: "21 Apr 2025", rating: 4, comment: "Lovely white dress! Great for casual summer outings." },
            { user: "Ella Pham", date: "27 Apr 2025", rating: 5, comment: "So simple yet elegant. I’ve worn it multiple times already!" }
        ],
        information: { material: "Cotton", care: "Machine Wash", fit: "Regular" }
    },
    {
        id: 13,
        name: "Ivory Whisper Dress",
        image: "../img/product-13.jpg",
        description: "Delicate Ivory Whisper Dress, offering subtle elegance.",
        price: 453.00,
        originalPrice: 553.00,
        rating: 4,
        reviews: [
            { user: "Grace Le", date: "22 Apr 2025", rating: 5, comment: "The lace details are gorgeous! Perfect for a garden party." },
            { user: "Chloe Vu", date: "28 Apr 2025", rating: 4, comment: "Very elegant dress, but it’s a bit delicate to handle." }
        ],
        information: { material: "Lace", care: "Hand Wash", fit: "Flowy" }
    },
    {
        id: 14,
        name: "Clara Belle Dress",
        image: "../img/product-14.jpg",
        description: "Charming Clara Belle Dress, blending style and comfort.",
        price: 445.00,
        originalPrice: 665.00,
        rating: 4,
        reviews: [
            { user: "Mia Wong", date: "23 Apr 2025", rating: 4, comment: "This dress is so charming! Fits well and feels great." },
            { user: "Rachel Park", date: "29 Apr 2025", rating: 5, comment: "Love the style! It’s become one of my favorite dresses." }
        ],
        information: { material: "Cotton Blend", care: "Dry Clean", fit: "Relaxed" }
    },
    {
        id: 15,
        name: "Opal Muse Dress",
        image: "../img/product-15.jpg",
        description: "Unique Opal Muse Dress, a statement piece for any wardrobe.",
        price: 223.00,
        originalPrice: 553.00,
        rating: 3,
        reviews: [
            { user: "Sophie Nguyen", date: "24 Apr 2025", rating: 3, comment: "Interesting design, but the fit wasn’t quite right for me." },
            { user: "Anna Tran", date: "30 Apr 2025", rating: 4, comment: "Really unique dress! Got lots of compliments on it." }
        ],
        information: { material: "Polyester", care: "Machine Wash", fit: "Loose" }
    },
    {
        id: 16,
        name: "Clara Lumière",
        image: "../img/product-16.jpg",
        description: "Radiant Clara Lumière dress, perfect for special events.",
        price: 999.00,
        originalPrice: 1500.00,
        rating: 5,
        reviews: [
            { user: "Isabella Kim", date: "25 Apr 2025", rating: 5, comment: "This dress is absolutely radiant! Perfect for my gala." },
            { user: "Olivia Hoang", date: "01 May 2025", rating: 5, comment: "Stunning and luxurious. I felt like a star wearing this!" }
        ],
        information: { material: "Silk", care: "Dry Clean", fit: "Tailored" }
    },
    {
        id: 17,
        name: "Adhiper 3Sets Silicone Sweat Case Cover for Sony WH-1000XM5 Headphones, Embody XM5 Earpad Cover/Ear Covers/Headband Cover Protector, Washable Sweatproof Soft Silicone Headphone Accessories(Off White)",
        image: "../img/product-17.jpg",
        description: "Protect your Sony WH-1000XM5 headphones with this Adhiper 3-piece silicone sweat case cover set. Designed to shield earpads and headbands from sweat and wear, this washable, sweatproof accessory ensures lasting durability and comfort during workouts or daily use.",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4,
        reviews: [
            { user: "Alex Tran", date: "26 Apr 2025", rating: 5, comment: "Perfect fit for my Sony XM5s! Keeps them clean during gym sessions." },
            { user: "Sophie Nguyen", date: "02 May 2025", rating: 4, comment: "Great protection, but the headband cover could be a bit longer." }
        ],
        information: { material: "Silicone", care: "Hand Wash", fit: "Snug" }
    },
    {
        id: 18,
        name: "Head Cover for Whyio 1 headphone",
        image: "../img/product-18.jpg",
        description: "This Head Cover for Whyio 1 headphones offers a soft, protective layer for your headphone headband. Made from breathable fabric, it prevents wear and tear while adding a touch of style to your audio gear.",
        price: 15.99,
        originalPrice: 24.99,
        rating: 3,
        reviews: [
            { user: "Liam Pham", date: "27 Apr 2025", rating: 4, comment: "Nice cover, keeps my Whyio 1 headband in good shape!" },
            { user: "Emma Le", date: "03 May 2025", rating: 3, comment: "Decent, but it slips off occasionally during use." }
        ],
        information: { material: "Fabric", care: "Machine Wash", fit: "Loose" }
    },
    {
        id: 19,
        name: "Camera accessories for Sony",
        image: "../img/product-19.jpg",
        description: "Enhance your Sony camera setup with this versatile accessory kit, including a lens cap, cleaning cloth, and protective pouch. Perfect for photographers on the go, ensuring your gear stays safe and ready for action.",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4,
        reviews: [
            { user: "Ryan Vu", date: "28 Apr 2025", rating: 5, comment: "Must-have for my Sony camera! The lens cap fits perfectly." },
            { user: "Maya Hoang", date: "04 May 2025", rating: 4, comment: "Good kit, but I wish it included a tripod mount." }
        ],
        information: { material: "Mixed (Plastic, Fabric)", care: "Wipe Clean", fit: "Universal" }
    },
    {
        id: 20,
        name: "Camera arm accessories for Sony",
        image: "../img/product-20.jpg",
        description: "This camera arm accessory for Sony cameras provides sturdy support for dynamic shooting angles. Compatible with various Sony models, it’s ideal for vloggers and photographers needing stable, adjustable positioning.",
        price: 79.99,
        originalPrice: 99.99,
        rating: 5,
        reviews: [
            { user: "James Nguyen", date: "29 Apr 2025", rating: 5, comment: "Amazing arm for my Sony camera! Super stable for vlogging." },
            { user: "Ella Tran", date: "05 May 2025", rating: 5, comment: "Really enhances my setup. Easy to adjust and very durable." }
        ],
        information: { material: "Aluminum", care: "Wipe Clean", fit: "Adjustable" }
    },
    {
        id: 21,
        name: "Dior Luxury",
        image: "../img/product-21.jpg",
        description: "Indulge in elegance with this Dior Luxury dress, a masterpiece of couture craftsmanship. Perfect for high-end events, its intricate detailing and premium fabric ensure you stand out with sophistication.",
        price: 1999.00,
        originalPrice: 2500.00,
        rating: 5,
        reviews: [
            { user: "Chloe Kim", date: "30 Apr 2025", rating: 5, comment: "A true Dior masterpiece! Felt incredible at my event." },
            { user: "Nora Pham", date: "06 May 2025", rating: 5, comment: "Worth every penny. The detailing is absolutely stunning!" }
        ],
        information: { material: "Silk Blend", care: "Dry Clean", fit: "Tailored" }
    },
    {
        id: 22,
        name: "H&M Luxury",
        image: "../img/product-22.jpg",
        description: "The H&M Luxury collection brings affordable elegance with this chic dress. Designed for modern sophistication, it’s perfect for evening wear with a touch of glamour at a fraction of high-end prices.",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4,
        reviews: [
            { user: "Lily Vu", date: "01 May 2025", rating: 4, comment: "Great value for a luxury look! Fits beautifully." },
            { user: "Ava Le", date: "07 May 2025", rating: 4, comment: "Nice dress, but the material feels a bit delicate." }
        ],
        information: { material: "Polyester Blend", care: "Hand Wash", fit: "Slim" }
    },
    {
        id: 23,
        name: "Adidas shoes",
        image: "../img/product-23.jpg",
        description: "Step up your game with these Adidas shoes, blending style and performance. Featuring a cushioned sole and breathable mesh upper, they’re ideal for both sports and casual wear.",
        price: 119.99,
        originalPrice: 159.99,
        rating: 4,
        reviews: [
            { user: "Ethan Tran", date: "02 May 2025", rating: 5, comment: "Super comfy Adidas shoes! Great for running." },
            { user: "Zoe Nguyen", date: "08 May 2025", rating: 4, comment: "Love the design, but they run a bit narrow." }
        ],
        information: { material: "Mesh and Rubber", care: "Wipe Clean", fit: "Regular" }
    },
    {
        id: 24,
        name: "Lucas Derby",
        image: "../img/product-24.jpg",
        description: "Elevate your formal style with the Lucas Derby shoes, crafted from premium leather with a sleek design. Perfect for business meetings or upscale events, offering both comfort and sophistication.",
        price: 149.99,
        originalPrice: 199.99,
        rating: 5,
        reviews: [
            { user: "Henry Pham", date: "03 May 2025", rating: 5, comment: "These Lucas Derbys are top-notch! So classy and comfy." },
            { user: "Grace Le", date: "09 May 2025", rating: 5, comment: "Perfect for work events. The leather quality is excellent!" }
        ],
        information: { material: "Leather", care: "Polish", fit: "Regular" }
    },
    {
        id: 25,
        name: "Oxford Derby",
        image: "../img/product-25.jpg",
        description: "The Oxford Derby shoes combine timeless design with modern comfort. Made from polished leather, they’re a versatile addition to any formal wardrobe, ideal for weddings or office wear.",
        price: 139.99,
        originalPrice: 179.99,
        rating: 4,
        reviews: [
            { user: "Lucas Vu", date: "04 May 2025", rating: 4, comment: "Great Oxford shoes! Look sharp, but need breaking in." },
            { user: "Mia Hoang", date: "10 May 2025", rating: 5, comment: "Love these for my husband. Very elegant and well-made!" }
        ],
        information: { material: "Leather", care: "Polish", fit: "Regular" }
    }
];