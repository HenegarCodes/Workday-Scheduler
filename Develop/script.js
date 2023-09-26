//the JS will not run until HTML page is fully loaded
$(document).ready(function() {
//creates variable that will ge tthe #currentDay
var currentDateTime = document.getElementById('currentDay');
//sets the date and time and sets the interval to update
function correctDayTime() {
  var now = dayjs();
  var formatTime = now.format('MMM DD, YYYY [at] hh:mm:ss A');
  currentDateTime.textContent = formatTime;
}
correctDayTime();
setInterval(correctDayTime, 1000);



  //when clicked, the save button sets the key and value to its correct time slot to local storage
  $(".saveBtn").on('click', function(){
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });

  //function to load saved data
  function loadSave() {
    $('.time-block').each(function(){
      var key = $(this).attr('id');
      var value = localStorage.getItem(key);
      $(this).find('.description').val(value);
    });
  }

  loadSave();

  //refresh and retrieve as needed
var timeBlocks = $('.time-block');


//updating times. this will take the current time with the hour
function updateTimes() {
  var currentTime = dayjs().hour();
//creates function that will take the integer/value out of the ID. array is the second item in the array
  timeBlocks.each(function() {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);

//this will remove the class from the respective hour
    $(this).removeClass('past present future');
//evaluates if the hour is is less than the currentTime which makes it past 
    if (hourBlock < currentTime) {
     
      $(this).addClass('past');
    }//evaluates  the hour is actually the current hour
    else if( hourBlock === currentTime) {
      $(this).addClass('present');   
     }//if none of these are true then it will be the future
      else {
        $(this).addClass('future');    
      }

  });
}
  updateTimes();
  setInterval(updateTimes, 60000);



});

