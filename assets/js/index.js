$(document).ready(function () {
 //animation slogan to phase in
  animateSlogan();

  //If I have time I will calculate the following through extracting values from json file instead of using hard coded values:
  //----total quantity calculations:

  //-------fixed quantity amount in json file for milk that had qty amount as a string with gallon in it, for time purpose did not write code to isolate that and pull out the interger 1.
  const gListQtySum = groceryList.map(gList => gList.qty).reduce((a, c) => a + c);
  console.log(gListQtySum);
  
  //-------creating array of categories
  const categories = [];
  groceryList.forEach(category => {
    categories.push(category.category);
  })
  // console.log(categories);

  //-------capitalizing function for each word
  const capitalizeNames = array => array.map(name =>
    name.split(' ').map(word =>
      word[0].toUpperCase() + word.slice(1).toLowerCase()
      ).join(' ')
      );
      const capitalizedCategories = capitalizeNames(categories);
      // console.log(capitalizedCategories); 
      
      
      //removing duplicates from array
      const uniqueCategories = [...new Set(capitalizedCategories)];
      console.log(uniqueCategories);
      
      //----->>>create function to pularilize words in uniqueCategories array
      
      //----->>>calculation total percent of each category 
      //----Setting values manually will come back later if time permits to extract values from the array of objects
      fruitqt = 10;
      beverageqt = 4;
      pastaqt = 6;
      dessertqt = 3;
      dairyqt = 12;
            
      //canvas chart code: responsive pie chart from canvas.js, difficult to manipulate with the trial version.
      //---->>> Inital goal was for each section to be clickable activate cards from that category and display them dynamically below the chart
      var options = {
        //attempted to change background color of chart through css but couldnot there for added background through the jquery code(this is what lead to certain design choices)
        backgroundColor: "#d3e0ff",
        title: {
          text: ""
        },
        subtitles: [{
          // text: "As of April, 2019"
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
          indexLabelFontSize: 10,
          indexLabel: "{label} - {y}%",
          dataPoints:
          //calucation have been derived manually also functions for each indiviual parts are above as well
          [
            { y: 28.57, label: uniqueCategories[0], color:"#663399"},
            { y: 34.29, label: uniqueCategories[4], color:"#e74c3c" },
            { y: 11.43, label: uniqueCategories[1], color:"#3a539b" },
            { y: 17.14, label: uniqueCategories[2], color:"#16a085" },
            { y: 8.57, label: uniqueCategories[3], color:"#e47833" },
          ]
        }]
      };
      $("#chartContainer").CanvasJSChart(options);
      

      
      //dynamically adding content to webpage by creating a card template and adding data through the array of objects
      //----card template to add data dynamically from array of objects
      function createCard(cardData) {
        let cardTemplate = [
          "<div class='card ",cardData.category,"-card'>",
          "<div class='card-title'><img src='assets/images/svgicons/",cardData.category,".svg' alt='please see alt from same image above'></img><h2>",cardData.item,"</h2></div>",
          "<div class='card-image'><img src='assets/images/cardimages/",cardData.type,".jpg' alt='free image of ",cardData.type," sourced from pexels.com'</img>",
          "<div class='card-info'><div class='card-type'>Type: ",cardData.type,"</div>",
          "<div class='card-brand'>Brand: ",cardData.brand,"</div>",
          "<div class='card-qty'>Quantity: ",cardData.qty,"</div>"
        ];
        return $(cardTemplate.join(""));
      };
      
    let cards = $();
    
    //----dynamically generates cards from groceryList array of objects using the create card function above and going through the array of objects to add content
    groceryList.forEach(function(item, i) {
      cards = cards.add(createCard(item));
    });
    $(function() {
      $("#all-cards").append(cards);
    }); 
    
    //Click function for button to hide/toggle cards based on the button clicked
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
      $("button").removeClass('btn-active')
      $(this).addClass('btn-active')
    });
    //----------Show only beverages-cards
    $("#beverages-btn").click(function () {
      hideCards();
      $(".beverage-card").show();
      $("button").removeClass('btn-active')
      $(this).addClass('btn-active')
    });
    //----------Show only dairy-cards
    $("#dairy-btn").click(function () {
      hideCards();
      $(".dairy-card").show();
      $("button").removeClass('btn-active')
      $(this).addClass('btn-active')
    });
    //----------Show only desserts-cards
    $("#desserts-btn").click(function () {
      hideCards();
      $(".dessert-card").show();
      $("button").removeClass('btn-active')
      $(this).addClass('btn-active')
    });
    //----------Show only fruits-cards
    $("#fruits-btn").click(function () {
      hideCards();
      $(".fruit-card").show();
      $("button").removeClass('btn-active')
      $(this).addClass('btn-active')
    });
    //----------Show only fruits-cards
    $("#pasta-btn").click(function () {
      hideCards();
      $(".pasta-card").show();
      $("button").removeClass('btn-active')
      $(this).addClass('btn-active')
    });       
  });

  //animateslogan
    function animateSlogan(){
      $(".sloganDiv").fadeIn( 2000, function() {
        $(".sloganSpan").fadeIn( 1000 );
      });
    } 

  //created grocery list variable to overcome github not recognizing static JSON and javascript file
    const groceryList = 
    [{
      "category": "fruit",
      "item": "Apples",
      "type": "Honey Crisp",
      "brand": "Little cuties",
      "qty": 10
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
      "item": "Milk",
      "type": "TwoPercent",
      "brand": "generic",
      "qty": 1
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