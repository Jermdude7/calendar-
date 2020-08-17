// // GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format("MMM Do YYYY  h:mm:ss a"));
setInterval(function(){
    $("#currentDay").text( moment().format("MMM Do YYYY  h:mm:ss a"));
})
$(".saveBtn").on("click",function(e){
console.log(this); dom traversal to gert parent info
jquery val for parent info \
})
if(moment <  timeblock ) = present
var 17 = ("#hour-5")
// WHEN I scroll down
if current moment > timeblock = future
else current moment < timeblock = past
else present
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist