// Interval (in seconds) to update timer
var UPDATE_INTERVAL = 1;

setDefaults();
// Set default settings
function setDefaults() {
  // Set date
  if (!localStorage["date"]) {
    localStorage["date"] = new Date().toLocaleDateString();
  }
  // Set domains seen before
  if (!localStorage["domains"]) {
    localStorage["domains"] = JSON.stringify({});
  }
  // Set total time spent
  if (!localStorage["total"]) {
    localStorage["total"] = JSON.stringify({
      today: 0
    });
  }
  // The time limit user sets for a day
  if (!localStorage["daily_limit_hr"]) {
    localStorage["daily_limit_hr"] = 24;
  }
  if (!localStorage["daily_limit_min"]) {
    localStorage["daily_limit_min"] = 00;
  }
  if (!localStorage["daily_limit_sec"]) {
    localStorage["daily_limit_sec"] = 00;
  }
  //To keep track if a notification has been displayed today
  if (!localStorage["flag"]) {
    localStorage["flag"] = 0;
  }
  // Limit how many sites the chart shows
  if (!localStorage["chart_limit"]) {
    localStorage["chart_limit"] = 7;
  }
  // Set "other" category
  // NOTE: other.today is not currently used
  if (!localStorage["other"]) {
    localStorage["other"] = JSON.stringify({
      today: 0
    });
  }
}
