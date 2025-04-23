const productData = [{
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
            "reviewRating": 5,
            "reviewDate": "2023-10-02"
        },
        {
            "reviewerName": "Jane Smith",
            "reviewText": "Good quality, but a bit expensive.",
            "reviewRating": 2,
            "reviewDate": "2023-10-02"
        }
    ],  
    "productTags": ["tropical", "healthy", "snack"],    
    "productDimensions": {
        "length": 10,
        "width": 5,
        "height": 3
    }
},
{
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
            "reviewRating": 5,
            "reviewDate": "2023-10-02"
        },
        {
            "reviewerName": "Jane Smith",
            "reviewText": "Good quality, but a bit expensive.",
            "reviewRating": 2,
            "reviewDate": "2023-10-02"
        }
    ],  
    "productTags": ["tropical", "healthy", "snack"],    
    "productDimensions": {
        "length": 10,
        "width": 5,
        "height": 3
    }
},
{
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
            "reviewRating": 5,
            "reviewDate": "2023-10-02"
        },
        {
            "reviewerName": "Jane Smith",
            "reviewText": "Good quality, but a bit expensive.",
            "reviewRating": 2,
            "reviewDate": "2023-10-02"
        }
    ],  
    "productTags": ["tropical", "healthy", "snack"],    
    "productDimensions": {
        "length": 10,
        "width": 5,
        "height": 3
    }
}]


// console.log("Reviews are",productData["productReviews"]);
// console.log("Reviews are",productData.productReviews);
// console.log("Reviews count is",productData.productReviews.length);

// for(props in productData)
//     console.log(`${props} : ${productData[props]}`);
// let student ={
//     pname:"hira"
// }

// console.log(student.pname);
// console.log(student["pname"]);

// const fivstarReview = productData.productReviews.filter((review) => review.reviewRating === 5);

// console.log("Five star review",fivstarReview);

// let fiveStar = function(item){
//  return  item.reviewRating === 5;
// }

// let FiveStarResult = productData[0].productReviews.filter(fiveStar).length;
// console.log("Five star count is",FiveStarResult.length);



productData.map((item,index,array) => {
 
    let fiveStar = function(item){
        return  item.reviewRating === 5;
    }
   const startCustomerList =   item.productReviews.filter(fiveStar);
   
    console.log("Five star review",startCustomerList);
    console.log("Process these as STAR Customer");
});


// productData.productReviews.map((item) => console.log(item.reviewRating));    

// console.log("Five star count is",FiveStarResult);


