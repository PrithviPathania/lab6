/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
// change tp to model_text  "    const tp= document.getElementById("model-text");" literally rtemove tp and put model_text in last statement
// INSERT YOUR CODE HERE





/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function updatePrice() {
    const tp= document.getElementById("model-text");
    const days = document.getElementById("duration-text")
    const total= document.getElementById("calculated-cost")

    let price = 0;
    if( tp.innerText=="Model XYZ")
        price= 100;
    else
        price = 213;
    total.innerText = (parseInt(days.innerText) * price).toFixed(2);
}


const modelButton = document.getElementById("model-button");

function whatToDo() {
    const tp = document.getElementById("model-text");
    if (tp.innerText=="Model XYZ")
        tp.innerText = "model cprg";
    else
        tp.innerText = "Model XYZ";

}
modelButton.addEventListener("click", whatToDo)

function whatToDoDuration() {
    let days
    const tp = document.getElementById("duration-text");
    days=parseInt(prompt("Enter the number of days"));
    while (isNaN(days = parseInt(prompt("Enter the number of days:")))) {
        alert("Please enter a valid integer number of days");
    }
    tp.innerText=days
    updatePrice()
modelDuration.addEventListener("click",whatToDoDuration);
}   


// tp.innerText=="Model XYZ"?"Model CPRG":"Model XYZ";
 
/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE







/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE



