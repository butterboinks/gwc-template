/*
You may leverage JavaScript (JS) to make parts of your page dynamic.
JS is used to manipulate elements in HTML. JS does not manipulate CSS.
*/

/*
  This function accepts no data and returns no data.
  When invoked through an event, this function will toggle
  the text-box element's classes.
*/
var change_text = function() {
  // first we get the text-box element by ID
  // in HTML you'll find only one element has id="text-box"
  var text_box = document.getElementById("text-box");
  // now that we have the text-box element we can
  // check if the classlist is "blue-text-box"
  if (text_box.classList.value === "blue-text-box") {
    // we know the class list is "blue-text-box" so we can remove
    // "blue-text-box" and add "red-text-box"
    text_box.classList.remove("blue-text-box");
    text_box.classList.add("red-text-box");
  } else {
    // if the classlist is not "blue-text-box" we assume
    // it's "red-text-box". We remove "red-text-box"
    // and add "blue-text-box"
    text_box.classList.remove("red-text-box");
    text_box.classList.add("blue-text-box");
  }
  /*
    You can read about classList and all it's supported methods here,
    https://www.w3schools.com/jsref/prop_element_classlist.asp
    There is another method in classlist that would make this
    function a lot simpler but not as straight forward to
    understand what's happening.
    Can you spot the method in the documentation?
  */
};

// now that our function is defined above, we have to find something to
// attach it to. The HTML contains a button with the id "change-text"
var change_text_button = document.getElementById("change-text");

// We set the onclick field to our function. When the button is clicked
// the function will run.
change_text_button.onclick = change_text;
// More information about onclick is available here,
// https://www.w3schools.com/jsref/event_onclick.asp
