//created grocery list variable to overcome github not recognizing static jason and javascript file sources.
const groceryList = 
[{
  "category": "fruit",
  "item": "apples",
  "type": "Honey Crisp",
  "brand": "Little cuties",
  "qty": 10
},
{
  "category": "beverage",
  "item": "milk",
  "type": "2%",
  "brand": "generic",
  "qty": 1
  },
{
  "category": "pasta",
  "item": "Pasta",
  "type": "Penne",
  "brand": "Barilla",
  "qty": 3
},
{
  "category": "dessert",
  "item": "Gelatin dessert",
  "type": "Green",
  "brand": "Jello",
  "qty": 3
},
{
  "category": "dairy",
  "item": "Yogurt",
  "type": "Assorted flavors",
  "brand": "Chobani",
  "qty": 12
},
{
  "category": "pasta",
  "item": "Pasta",
  "type": "Linguini",
  "brand": "Barilla",
  "qty": 3
},
{
  "category": "beverage",
  "item": "Apple juice",
  "type": "regular",
  "brand": "Happy Farms",
  "qty": 2
},
{
  "category": "beverage",
  "item": "Vodka",
  "type": "Tangerine",
  "brand": "Grey Goose",
  "qty": 1
}
]

$(document).ready(function () {
  //If I have time I will calculate the following through extracting values from json file instead of using hard coded values:
  //----total quantity calculations:
  //-------fixed quantity amount in json file for milk that had qty amount as a string with gallon in it, for time purpose did not write code to isolate that and pull out the interger 1.
  const gListQtySum = groceryList.map(gList => gList.qty).reduce((a, c) => a + c);
  console.log(gListQtySum);
  
  //----categories array, duplicate removed
  //-------creating array of categories
  const categories = [];
  groceryList.forEach(category => {
    categories.push(category.category);
  })
  
  //-------capitalizing function for each word
  const capitalizeNames = array => array.map(name =>
    name.split(' ').map(word =>
      word[0].toUpperCase() + word.slice(1).toLowerCase()
      ).join(' ')
      );
      const capitalizedCategories = capitalizeNames(categories);
      // console.log(capitalizedCategories); 
      
      
      //removing duplicates
      const uniqueCategories = [...new Set(capitalizedCategories)];
      console.log(uniqueCategories);
      
      //----->>>create function to pularilize words in uniqueCategories array
      
      //----->>>calculation total percent of each category 
      //----hard setting values will come back later if time permits
      fruitqt = 10;
      beverageqt = 4;
      pastaqt = 6;
      dessertqt = 3;
      dairyqt = 12;
      
      
      
      //canvas chart code
      var options = {
        // backgroundColor: "#6380a1",
        title: {
          text: "Current Inventory"
        },
        subtitles: [{
          text: "As of April, 2019"
        }],
        theme: "light1",
        animationEnabled: true,
        animationDuration: 2000,
        data: [{
          type: "pie",
          startAngle: 40,
          toolTipContent: "<b>{label}</b>: {y}%",
      // showInLegend: "true", 
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints:
      //calucation have been derived manually also functions for each indiviual parts are above as well
      [
        { y: 28.57, label: uniqueCategories[0] },
        { y: 34.29, label: uniqueCategories[4] },
        { y: 11.43, label: uniqueCategories[1] },
        { y: 17.14, label: uniqueCategories[2] },
        { y: 8.57, label: uniqueCategories[3] },
      ]
    }]
  };
  $("#chartContainer").CanvasJSChart(options);
  
  
  //Click function for button to hide/toggle
  //----function to hide all cards
  function hideCards() {
    $("#all-cards, #beverages-cards, #dairy-cards, #desserts-cards, #fruits-cards, #pasta-cards").hide();
  };
  //----function to show all cards on load
  function showAllCards() {
    hideCards();
    $("#all-cards").show();
  }
  showAllCards();
  //----------Show all cards
  $("#all-btn").click(function () {
    hideCards();
    $("#all-cards").show();
  });
  //----------Show only beverages-cards
  $("#beverages-btn").click(function () {
    hideCards();
    $("#beverages-cards").show();
  });
  //----------Show only dairy-cards
  $("#dairy-btn").click(function () {
    hideCards();
    $("#dairy-cards").show();
  });
  //----------Show only desserts-cards
  $("#desserts-btn").click(function () {
    hideCards();
    $("#desserts-cards").show();
  });
  //----------Show only fruits-cards
  $("#fruits-btn").click(function () {
    hideCards();
    $("#fruits-cards").show();
  });
  //----------Show only fruits-cards
  $("#pasta-btn").click(function () {
    hideCards();
    $("#pasta-cards").show();
  });
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});

//------------Code was initially used to retrieve data from json file but github launched version does not accept json files for static pages there for resorted to creating  object in another js file.
/*
//Using jQuery to access data from JSON file
$.getJSON("/assets/groceries.json", function (data) {
  //gorceryList from JSON file
  const groceryList = data;
  console.log(groceryList);

  //individual items
  groceryList.forEach(individualItem => {
    // console.log(individualItem);
  });
}
*/