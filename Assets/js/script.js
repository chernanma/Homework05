
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

var currentTime = moment().hour();
// var currentTime = 10;



$(document).ready(function(){

    getDataLocalStorage(); //Calling function to load data form local storage
    updateTextAreaColor(); //Calling function to change text area color base on criteria 
   
    // Saving event into localstorage when click on Save
    $(".btn").on("click",function(){
        // Getting value from description text area for each time block
        var inputData = $(this).siblings(".description").val();  
        // Getting hour value from each time block by id
        var inputTime = $(this).parents(".time-block").attr("id").split("-")[1];
        //Saving the data in the local storage
        localStorage.setItem(inputTime,inputData);   
    });



});


//FUNCTION TO CHANGE TEXT AREA COLOR BASE ON CRITERIA
function updateTextAreaColor (){
    $(".time-block").each(function(){
        // Getting hour value from each time block by id
        var numtextArea = $(this).attr("id").split("-")[1];

        // Adding CSS to text area base on criteria 
        if ((parseInt(numtextArea)) === currentTime ) {
            $(this).addClass("present");
        } else if ((parseInt(numtextArea)) < currentTime) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }      
        
    });    
}
//FUNCTION TO LOAD ALL THE DATA FROM LOCAL STORAGE
function getDataLocalStorage (){
    $(".time-block").each(function(){
         // Getting hour value from each time block by id
        var numtextArea = $(this).attr("id").split("-")[1];
         // Getting date from local storage for each text area
        var getData = localStorage.getItem(numtextArea);
        console.log(numtextArea,getData);
        // Inserting data into the text area for each element. 
        $(this).children(".description").val(getData);
    });
    
}

