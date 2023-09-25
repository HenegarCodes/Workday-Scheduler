 //Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elementsin the html.
//col-8
var localSettings = {};
dayjs.locale(localSettings);

$(function(){
  var currentTime = dayjs().format("H");

  function colorChanger() {
    $('.time-block').each(function() {
      var changeHour = parseInt(this.id);
    })
  }

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
  function refresh() {
    $('.time-block').each(function() {
      var grayHour = parseInt(this.id);
      if (grayHour === currentTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (grayHour < currentTime) {
        $(this).removeClass('present future').addClass('past');
      } else if (grayHour > currentTime) {
        $(this).removeClass('present past').addClass('future');
      }
    });
  }

  refresh();
});



//refresh and retreive as needed


function refresh() {
  $('.time-block').each(function() {
    var grayHour = parseInt(this.id);
      if(grayHour === currentTime) {
        $(this).removeClass('past future').addClass('present');
      }
      else if(grayHour < currentTime) {
        $(this).removeClass('present future').addClass('past');
      }
      else if (grayHour > currentTime) {
        $(this).removeClass('present past').addClass('future');

    }
  });
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  //
  // TODO: Add code to display the current date in the header of the page.

