const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const sub = document.querySelector(".sub");
const equal = document.querySelector(".equal");
const multi = document.querySelector(".multi");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const answerInput = document.querySelector(".answer");

equal.addEventListener("click", () => {
answerInput.value=eval(answerInput.value)
});

one.addEventListener("click",()=>{
    answerInput.value+=one.value;
})
two.addEventListener("click",()=>{
    answerInput.value+=two.value;
})
three.addEventListener("click",()=>{
    answerInput.value+=three.value;
})
four.addEventListener("click",()=>{
    answerInput.value+=four.value;
})
five.addEventListener("click",()=>{
    answerInput.value+=five.value;
})
six.addEventListener("click",()=>{
    answerInput.value+=six.value;
})
seven.addEventListener("click",()=>{
    answerInput.value+=seven.value;
})
eight.addEventListener("click",()=>{
    answerInput.value+=eight.value;
})
nine.addEventListener("click",()=>{
    answerInput.value+=nine.value;
})
zero.addEventListener("click",()=>{
    answerInput.value+=zero.value;
})
plus.addEventListener("click",()=>{
    answerInput.value+=plus.value;
})
sub.addEventListener("click",()=>{
    answerInput.value+=sub.value;
})
divide.addEventListener("click",()=>{
    answerInput.value+=divide.value;
})
multi.addEventListener("click",()=>{
    answerInput.value+=multi.value;
})

clear.addEventListener("click",()=>{
    answerInput.value="";
})