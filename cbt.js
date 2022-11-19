let index = 0
let i = 0
let questions = [{question:"Who is the president of Nigeria", 
options:["Emilokan", "Muhammed Buhari", "Olayinka Daniel","Peter Obi"], answer:"Muhammed Buhari",chosen:""},
{question:"Who is the president of France", 
options:["Buhari", "Manuel Macron" , "Donald J Trump", "Dada Ayade"], answer:"Manuel Macron",chosen:""},
{question:"Who is the president of Ghana", 
options:["Taska Mafosa", "Nana Akufo-Addo" , "Shola Ayegbajeje", "Micheal Essien"], answer:"Nana Akufo-Addo",chosen:""},
{question:"Who is the president of USA", 
options:["Hillary Cliton", "Memphis Depay", "Joseph Biden", "Boris Johnson"], answer:"Joseph Biden",chosen:""},
{question:"Entomology is the science that studies?", 
options:["Behavior of human beings", "Insects" , "The origin and history of technical and scientific terms","The formation of rocks"]
, answer:"Insects",chosen:""},{question:"For which of the following disciplines is Nobel Prize awarded?", 
options:["Physics and Chemistry", "Physiology or Medicine" , "Literature, Peace and Economics","All of the above"], answer:"All of the above",chosen:""},
{question:"Hitler party which came into power in 1933 is known as", 
options:["Labour Party", "Nazi Party" , "Ku-Klux-Klan","Democratic Party"], answer:"Nazi Party",chosen:""},
{question:"A standard soccer match half is played for how long?", 
options:["90 Minutes", "120 Minutes" , "45 Minutes","None of the above"], answer:"45 Minutes",chosen:""},
{question:"Which team won the 2018 FIFA World Cup?", 
options:["Brazil", "Nigeria" , "England","France"], answer:"France",chosen:""},
{question:"Who is the richest black man in the world?", 
options:["Barrack Obama", "Aliko Dangote" , "Jimoh Olayinka Daniel Oluwadamilare","Elon Musk"], answer:"Aliko Dangote",chosen:""},
{question:"Who is the record holder for the women 100m hurdles", 
options:["Tobi Amala", "Tobi Amusin" , "Tobi Amusan","Tobi Amusement"], answer:"Tobi Amusan",chosen:""},
{question:"What is the highest mountain of Nigeria", 
options:["Chappal Waddi", "Olumo rock" , "Danno Mayewo","Jundun Makeli"], answer:"Chappal Waddi",chosen:""},
{question:"Which of this is a former capital of Nigeria?", 
options:["Lagos", "Calabar" , "All of the above","Abuja"], answer:"All of the above",chosen:""},
{question:" Nigeria is situated in Western Africa and has a coastal border on which body of water?", 
options:["Lake Chad", "River Benue" , "Gulf of Guinea","River Ogunpa"], answer:"Gulf of Guinea",chosen:""},
{question:"A crime particularly associated with Nigeria is often referred to as a 'Section 419', after the part of the country's penal code which deals with it. What type of crime is it?", 
options:["Police Brutality", "Sex related crime" , "Fraud","Cyber-crime"], answer:"Fraud",chosen:""},
{question:"The United States of America got her independence on what day?", 
options:["July 4, 1776", "May 4, 1776" , "July 4 1876,","October 1, 1776"], answer:"July 4, 1776",chosen:""},
{question:"Whose face is on the 20 Naira Note?", 
options:["Micheal Jordan", "Safaya Marafa" , " Murtala Muhammed","Obafemi Awolowo"], answer:" Murtala Muhammed",chosen:""},
{question:"The largest city in the world is?", 
options:["Ibadan", "Tokyo-Yokohama","Jakarta","New York city"], answer:"Tokyo-Yokohama",chosen:""},
{question:"When is the Nigeria presidential election holding in 2023 according to INEC's calendar", 
options:["Feb 25 2023", "Feb 24 2023","Feb 23 2023","Feb 22 2023"], answer:"Feb 25 2023",chosen:""},
{question:"What is the full name of the Nigerian grammy award singer and song writer Burna boy", 
options:["Burna Maphosa", "Olaoluwa Damini Bolade MFR","Damini Ebunoluwa Ogulu MFR","Burning Ajayi Damini"], answer:"Damini Ebunoluwa Ogulu MFR",chosen:""}]
let mark
function showQuestion(){
    option.innerHTML = ''
    displayQuestion.innerHTML += questions[index].question
    number.innerHTML = ''
    number.innerHTML += `<h4>Question ${index+1} of ${questions.length}</h4>`
    questions[index].options.forEach(function(opt,i){
    mark = questions[index].chosen == opt
    option.innerHTML +=`<h5><input type="radio" name="option" ${mark?'checked':''} onclick = "setAnws(${i})"><span>${opt}</span></h5>`
    })
}
    showQuestion()
function no(){
    modal.style.display = "none";
}
function next(){
    displayQuestion.innerHTML = ''
    if(index<questions.length-1){
        index++
    }
    else{
        index = index
    }
    questions[index].options[i].checked = true
    showQuestion()
}
function prev(){
    displayQuestion.innerHTML = ''
    index--
    showQuestion()
    if(index==0){
        index++
    }
    else{
        index = index
    }
}
let ansQue = 0
function setAnws(i){
    if(questions[index].chosen == "" ){
        ansQue++
    }
    questions[index].chosen= questions[index].options[i]
}
let check=[];
function submit(){
    document.querySelector('.modal-content').innerHTML = `<h2>You have attempted ${ansQue} question(s) out of ${questions.length}. Do you want to submit?
    <div><button onclick= "submited(),no()" id = 'yes'>Yes</button> <button onclick = "no()" id='no'>No</button></div> </h2>`
}
function submited(){
    check = questions.filter(el=>{
        return el.answer==el.chosen
    });
    console.log(check);
    document.querySelector('.contain').style.display='none'
    document.querySelector('#disp2').style.display='block'
    if(check.length == questions.length){
        document.querySelector('#disp2').innerHTML = `<h2>Welcome back ${localStorage.getItem('username')}&#128150 Your final score is  <span style="color: green;">
        ${check.length} out of ${questions.length}&#128513</span><div>You got it all. Nice one!!! I'm so glad you did</div><div>
        <a href="./index.html"><button id = 'refresh'  >Refresh</button></a></div></h2>`
    } 
    else if (check.length > questions.length-6 && check.length < questions.length-1){
        document.querySelector('#disp2').innerHTML = `<h2>Welcome back ${localStorage.getItem('username')}&#128150 Your final score is  <span style="color: yellow;">
        ${check.length} out of ${questions.length} &#128512</span>
        You scored far above average. Thanks for trying
        <div><a href="./index.html"><button id = 'refresh' >Refresh</button></a></div></h2>`
    }
    else if (check.length > questions.length-10 && check.length < questions.length-5){
        document.querySelector('#disp2').innerHTML = `<h2> Welcome back ${localStorage.getItem('username')}&#128150 Your final score is  <span style="color: orange;">
        ${check.length} out of ${questions.length}&#128526</span>
        You scored Well. You can give it a try again. Thanks for trying
        <div><a href="./index.html"><button id = 'refresh' >Refresh</button></a></div></h2>`
    }
    else if (check.length > questions.length-15 && check.length < questions.length-11){
        document.querySelector('#disp2').innerHTML = `<h2>Welcome back ${localStorage.getItem('username')}&#128150 Your final score is  <span style="color: red;">
        ${check.length} out of ${questions.length}&#128528</span>
        You scored below average but no lele. Nice attempt. Thanks for trying
        <div><a href="./index.html"><button id = 'refresh' >Refresh</button></a></div></h2>`
    }
    else{
        document.querySelector('#disp2').innerHTML = `<h2>Welcome back ${localStorage.getItem('username')}&#128150 Your final score is <span style="color: red;">
        ${check.length} out of ${questions.length}&#128532</span>.You have scored a relatively low score.
        But you can attempt again. Thanks for trying
        <div><a href="./index.html"><button id = 'refresh'  >Refresh</button></a></div></h2>`
    }
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("submitt");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let min = 4
let sec = 10
let timeT

function timerx(){
   timeT = setInterval(() => {
        sec--
        timeCount.innerHTML = `<h2>${String(min).padStart(2,0)} : ${String(sec).padStart(2,0)}</h2>`
        if(sec<10){
           sec = "" + 0 + sec
        }
        
        if(min ==0 && sec ==0){
            clearInterval(timeT)
        document.querySelector('.contain').style.display='none'
        submited()
        }
        if (sec==0){
            sec = 60;
            min--
        }
        
    },1000);
}
timerx()
