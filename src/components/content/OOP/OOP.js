let car = {color:"red", model:"X", label:"Tesla",
sayColor(){
console.log(this.color);
}}
car.sayColor()
let page = {_content:"", setContent(content){
    this.content = content
    document.querySelector("body").innerHTML = this.content
}, getContent(){
    return document.querySelector("body").innerHTML = this.content 
}}
page.setContent("<h1>Привет!</h1>")
page.getContent()
let numbers = [1,8,2,5]
function plus(numbers){
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum);
}
plus(numbers)
let number = 6
function count(number){
    let count = [ ]
    for(let i = 1; i <= number; i++){
        count.push(i)
    }
return console.log(count);}
count(number)
let words = ["Привет", "дорогой", "друг"]
function sayWords(words){
    words = words.join(" ")
    return words
}
console.log(sayWords(words));
