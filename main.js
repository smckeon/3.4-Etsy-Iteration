// 1. Calculate the average price of all items.
// - Average price should equal $23.63 or $23.62.

// var sum = items.reduce(function(total, current){
//   return total + current.price;
// }, 0);
//
//   console.log("The average price is " + "$" + (sum / items.length).toFixed(2));

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
// currency_code for USD - price for dollar amount -

// var inBetween = items.filter(function(product){
//   if(product.price > 14 && product.price < 18){
//     return true;
//   }
//    return false;
// });
//
// console.log(inBetween);

// 3. Show me how find the item with a "GBP" currency code and print its name and price.
// Please console.log the one you find.  - price and title

    // var gbpItems = items.filter(function(item){
    //   return item.currency_code == "GBP";
    // }).forEach(function(item){
    //   console.log(item.title + ' costs £' + item.price);
    // });
    //
    // items.forEach(function(item){
    //   if(item.currency_code == 'GBP') {
    //     console.log(item.title + ' costs £' + item.price);
    //   }
    // });

// 4. Show me how to find which items are made of wood. Please console.log the ones you find.
// items.forEach(function(item){
//   if(item.materials.indexOf('wood') !== -1){
//     console.log(item.title);
//   }
// })

// 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
// var eightPlus = items.filter(function(list){
//   return list.materials.length > 8;
// });
//
// console.log(eightPlus);

// 6. Show me how to calculate how many items were made by their sellers.

// items.forEach(function(item){
//   if (item.who_made == 'i_did'){
//     console.log(item + " were made by their sellers");
//   }
// });
