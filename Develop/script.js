 //Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elementsin the html.
//col-8
//var localSettings = {};
//dayjs.locale(localSettings);
$(document).ready(function() {

var currentDateTime = document.getElementById('currentDay');

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

function updateTimes() {
  var currentTime = dayjs().hour();

  timeBlocks.each(function() {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);


    $(this).removeClass('past present future');

    if (hourBlock < currentTime) {
     
      $(this).addClass('past');
    }
    else if( hourBlock === currentTime) {
      $(this).addClass('present');   
     }
      else {
        $(this).addClass('future');    
      }

  });
}
  updateTimes();
  setInterval(updateTimes, 60000);



});

