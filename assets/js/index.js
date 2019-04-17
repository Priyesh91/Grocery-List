$(document).ready(function () {
  //Using jQuery to access data from JSON file
  $.getJSON("/assets/groceries.json", function (data) {
    //gorceryList from JSON file
    const groceryList = data;
    // console.log(groceryList);

    //individual items
        groceryList.forEach(individualItem => {

    // console.log(individualItem);
    })

    //creating array of categories
    const categories = [];
    groceryList.forEach( category => {
      categories.push(category.category);
    })
    console.log(categories);

    //creating arra
    


    































  });
});
