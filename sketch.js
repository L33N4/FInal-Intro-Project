let rand
let button
let result
let names = ["Jarvis", "Lexi,", "Sydney", "Lucie", "Max", "Pross", "Holden", "Spencer", "Atlas", "Dante", "Ahmed", "Riley", "Emma", "Maria", "Nate", "Ronald", "John", "Roger", "Connor", "Ryker", "Charles", "David", "Alia", "Catherine", "Maria", "Hadley", "Eli", "Ronald", "Luthor", "Barry", "Aris", "Oliver", "Thea", "Jessica", "Jones", "Byron", "Anthony"]
let = 0

//creating/setting up the background
function setup() {
  noCanvas()
  createP("Random Name Generator")
  //trying to create the button that you click to generate a random name
  button = createButton("Generate!")
  //make the button actually give you a name
  button.mouseClicked(checkAnswer)
  //making the thing spit the result out ...idk
  result = createP()
}

function draw() {
  background(220);
}

//trying to check the function/variables and make them work
function checkAnswer () {
  console.log(names)
  //giving us the result = random name
  let resultText = random(names)
  result.html(resultText)
}