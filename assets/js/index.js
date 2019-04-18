$(document).ready(function () {
 //animate slogan
  animateSlogan();

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
        backgroundColor: "#d3e0ff",
        title: {
          text: ""

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
            { y: 28.57, label: uniqueCategories[0], color:"#f2290e"},
            { y: 34.29, label: uniqueCategories[4], color:"#9e27f9" },
            { y: 11.43, label: uniqueCategories[1], color:"#08ad21" },
            { y: 17.14, label: uniqueCategories[2], color:"#ff7620" },
            { y: 8.57, label: uniqueCategories[3], color:"#2032ff" },
          ]
        }]
      };
      $("#chartContainer").CanvasJSChart(options);
      
      
      
      //dynamically adding content to webpage 
      //----card template to add data dynamically from array of objects
      function createCard(cardData) {
        let cardTemplate = [
          "<div class='card ",cardData.category,"-card'>",
          "<h2>",cardData.item,"</h2>",
          "<h3>Type: ",cardData.type,"</h3>",
          "<h4>Brand: ",cardData.brand,"</h4>",
          "<h5>Quantity: ",cardData.qty,"</h5>"
        ];
        return $(cardTemplate.join(""));
      };
      
    let cards = $();
    
    //----dynamically generates cards from groceryList array of objects
    
    groceryList.forEach(function(item, i) {
      cards = cards.add(createCard(item));
    });
    $(function() {
      $("#all-cards").append(cards);
    }); 
    
    //Click function for button to hide/toggle
    //----function to hide all cards
    function hideCards() {
      $(".beverage-card, .dairy-card, .dessert-card, .fruit-card, .pasta-card").hide();
    };
    //----function to show all cards on load
    function showAllCards() {
      $(".beverage-card, .dairy-card, .dessert-card, .fruit-card, .pasta-card").show();
    }
    showAllCards();
    //----------Show all cards
    $("#all-btn").click(function () {
      hideCards();
      showAllCards();
    });
    //----------Show only beverages-cards
    $("#beverages-btn").click(function () {
      hideCards();
      $(".beverage-card").show();
    });
    //----------Show only dairy-cards
    $("#dairy-btn").click(function () {
      hideCards();
      $(".dairy-card").show();
    });
    //----------Show only desserts-cards
    $("#desserts-btn").click(function () {
      hideCards();
      $(".dessert-card").show();
    });
    //----------Show only fruits-cards
    $("#fruits-btn").click(function () {
      hideCards();
      $(".fruit-card").show();
    });
    //----------Show only fruits-cards
    $("#pasta-btn").click(function () {
      hideCards();
      $(".pasta-card").show();
    });
      
    
    
    });
    
    function animateSlogan(){
      $(".sloganDiv").fadeIn( 3000, function() {
        $(".sloganSpan").fadeIn( 2000 );
      });
    }
    
    //created grocery list variable to overcome github not recognizing static jason and javascript file
    const groceryList = 
    [{
      "category": "fruit",
      "item": "Apples",
      "type": "Honey Crisp",
      "brand": "Little cuties",
      "qty": 10
    },
    {
      "category": "beverage",
      "item": "Milk",
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
      "type": "Regular",
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
    ];
   

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