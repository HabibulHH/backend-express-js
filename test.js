const productData = {
    "productId": 101,
    "productName": "mango",
    "productPrice": 1.5,
    "productDescription": "A sweet and juicy tropical fruit.",  
    "productCategory": "Fruits",
    "productImages": ["https://example.com/mango.jpg" ,"https://example.com/mango2.jpg"] ,
    "productStock": 100,
    "productRating": 4.5,
    "productReviews": [
        {
            "reviewerName": "John Doe",
            "reviewText": "Delicious and fresh!",
            "reviewRating": 5,
            "reviewDate": "2023-10-01"
        },
        {
            "reviewerName": "Jane Smith",
            "reviewText": "Good quality, but a bit expensive.",
            "reviewRating": 4,
            "reviewDate": "2023-10-02"
        }
    ],  
    "productTags": ["tropical", "healthy", "snack"],    
    "productDimensions": {
        "length": 10,
        "width": 5,
        "height": 3
    }
}


console.log("Reviews are",productData["productReviews"]);
console.log("Reviews are",productData.productReviews);
console.log("Reviews count is",productData.productReviews.length);

for(props in productData)
    console.log(`${props} : ${productData[props]}`);
let student ={
    pname:"hira"
}

console.log(student.pname);
console.log(student["pname"]);

const fivstarReview = productData.productReviews.filter((review) => review.reviewRating === 5);

console.log("Five star review",fivstarReview);

