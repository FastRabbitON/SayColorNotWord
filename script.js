
// STOP WATCH

window.onload = function(){

    var Second = 00;
    var Millisecond = 00;
    var SecondArea = document.getElementById("seconds");
    var MillisecondArea = document.getElementById("millisecond");
    var StopButton = document.getElementById("stopbutton");
    var Colon = document.getElementById("colon");
    var PlayButton = document.getElementById("playbutton");
    var AreaResult = document.getElementById("arearesult");
    var SummaryResult = document.getElementById("summaryresult");
    var StartScreen = document.getElementById("startscreen");
    var BorderAnswer = document.getElementById("answerborder");
    var RoundArea = document.getElementById("round");
    var EndButton = document.getElementById("endbutton");
    const TotalTime = [];
    var EndTime = 0;
    var Start = 0;
    var Interval;
    var Round = 0;

    var SoundCorect = new Audio("YesAnswer.mp3");

    var QuestionArea = document.getElementById("questionarea");
    var AnswerArea1 = document.getElementById("answer1");
    var AnswerArea2 = document.getElementById("answer2");
    var AnswerArea3 = document.getElementById("answer3");
    var AnswerArea4 = document.getElementById("answer4");
    var AnswerArea5 = document.getElementById("answer5");
    var AnswerArea6 = document.getElementById("answer6");
    var AnswerArea7 = document.getElementById("answer7");
    var AnswerArea8 = document.getElementById("answer8");

    var QuestionColors = ["red", "green", "blue", "black", "orange", "pink", "purple", "brown"];
    var QuestionWord =["red", "green", "blue", "black", "orange", "pink", "purple", "brown"];
    var AnswerWord =["red", "green", "blue", "black", "orange", "pink", "purple", "brown"];


    // START COUNTING

    function StartTimer(){
        Millisecond++;

        if(Millisecond <= 9){
            MillisecondArea.innerHTML = "0" + Millisecond;
        }

        if(Millisecond > 9){
            MillisecondArea.innerHTML = Millisecond;
        }

        if(Millisecond > 99){
            Second++;
            SecondArea.innerHTML = "0" + Second;
            Millisecond = 0;
            MillisecondArea.innerHTML = "0" + Millisecond;
        }

        if(Second > 9){
            SecondArea.innerHTML = Second;
        }
    }


    // STOP COUNTING

    function StopTimer(){
        clearInterval();
    }
    

    // LOTTERY QUESTION WORD

    function QuestionWordd(){
        var ChoosedQuestionColor = QuestionColors[Math.floor(Math.random() * 8)];
        var ChoosedQuestionWord = QuestionWord[Math.floor(Math.random() * 8)];

        while(ChoosedQuestionColor == ChoosedQuestionWord){
            var ChoosedQuestionColor = QuestionColors[Math.floor(Math.random() * 8)];
            var ChoosedQuestionWord = QuestionWord[Math.floor(Math.random() * 8)];
        }

        QuestionArea.style.color = ChoosedQuestionColor;
        QuestionArea.innerHTML = ChoosedQuestionWord;
    }


    // LOTTERY ANSWER WORDS

    function AnswerWords(){

        function randomNoRepeats(AnswerWord) {
            var copy = AnswerWord.slice(0);
            return function() {
            if (copy.length < 1) { copy = AnswerWord.slice(0); }
            var index = Math.floor(Math.random() * copy.length);
            var item = copy[index];
            copy.splice(index, 1);
            return item;
            };
        };
        
        var chooser = randomNoRepeats(AnswerWord);
        AnswerArea1.innerHTML = chooser();
        AnswerArea2.innerHTML = chooser();
        AnswerArea3.innerHTML = chooser();
        AnswerArea4.innerHTML = chooser();
        AnswerArea5.innerHTML = chooser();
        AnswerArea6.innerHTML = chooser();
        AnswerArea7.innerHTML = chooser();
        AnswerArea8.innerHTML = chooser();
    }


    // CORRECT ANSWER - TIME RESULT

    function TimeResult (){

        Round++;

        clearInterval(Interval);

        if(Second <= 9 && Millisecond <= 9){
            var TimeResult = Round + "/10. " + "0" + Second + ":0" + Millisecond;
            AreaResult.innerHTML += TimeResult + "</br>"
        }

        if(Second > 9 && Millisecond > 9) {
            var TimeResult = Round + "/10. " + Second + ":" + Millisecond;  
            AreaResult.innerHTML += TimeResult + "</br>"
              
        }

        if(Second > 9 && Millisecond <= 9){
            var TimeResult = Round + "/10. " + Second + ":0" + Millisecond;
            AreaResult.innerHTML += TimeResult + "</br>"
               
        }

        if(Second <= 9 && Millisecond > 9){
            var TimeResult = Round + "/10. " + "0" + Second + ":" + Millisecond;
            AreaResult.innerHTML += TimeResult + "</br>"
                
        }

        RoundArea.innerHTML = Round + "/10";
            
        // var RoundTime = parseInt((Second * 100) + Millisecond)/100;
        // TotalTime.push(RoundTime);
        // console.log(TotalTime);

        // for(i = 0; i < TotalTime.length; i++){

        //     EndTime += TotalTime[i];
        //     SummaryResult.innerHTML = EndTime;
        //     let text = document.getElementById("summaryresult").innerHTML; 
        //     document.getElementById("summaryresult").innerHTML = text.replace(".", ":");
        // }

        SoundCorect.volume = 0.2;
        SoundCorect.play();
            
        Second = 00;
        Millisecond = 00;
        SecondArea.innerHTML = Second;
        MillisecondArea.innerHTML = Millisecond;
        

        if(Round < 10){
            Interval = setInterval(StartTimer, 10);

        }
        else{

            clearInterval(Interval); 
            AnswerArea1.disabled = true;
            AnswerArea2.disabled = true;
            AnswerArea3.disabled = true;
            AnswerArea4.disabled = true;
            AnswerArea5.disabled = true;
            AnswerArea6.disabled = true;
            AnswerArea7.disabled = true;
            AnswerArea8.disabled = true;

            QuestionArea.innerHTML = "YOU WIN!"
            SecondArea.innerHTML = "CONGRATULATIONS";
            MillisecondArea.innerHTML = "";
            Colon.innerHTML = "";

            EndButton.classList.remove("endbutton-off");
            EndButton.classList.toggle("endbutton-on");
        }

    }


    // WRONG ANSWER

    function WrongAnswer(){
        Second = Second + 2;

        var counter = document.getElementById("counter");

        if(counter.classList.contains("counter-off")){
            counter.classList.remove("counter-off");
            counter.classList.toggle("counter-on");
        }

        BorderAnswer.style.boxShadow = "inset 0 0 4em  red";

        setTimeout(ReturnWrongAnswer, 400)

        function ReturnWrongAnswer(){ 
            if(counter.classList.contains("counter-on")){
                counter.classList.remove("counter-on");
                counter.classList.toggle("counter-off");
            } 
            
        BorderAnswer.style.boxShadow = "none";
        }
 
    }


    function CorrectAnswer(){

        QuestionWordd();
        AnswerWords();
        TimeResult();


        BorderAnswer.style.boxShadow = "inset 0 0 4em  green";

        setTimeout(ReturnCorrectAnswer, 300)

        function ReturnCorrectAnswer(){
            BorderAnswer.style.boxShadow = "none"; 
        }
    }



    PlayButton.onclick = function(){

        StartScreen.classList.remove("startscreen-on");
        StartScreen.classList.toggle("startscreen-off");

        clearInterval(Interval);

        Second = 00;
        Millisecond = 00;
        SecondArea.innerHTML = Second;
        MillisecondArea.innerHTML = Millisecond;

        Interval = setInterval(StartTimer, 10);
        

        var ChoosedQuestionColor = QuestionColors[Math.floor(Math.random() * 8)];
        var ChoosedQuestionWord = QuestionWord[Math.floor(Math.random() * 8)];

        while(ChoosedQuestionColor == ChoosedQuestionWord){
            var ChoosedQuestionColor = QuestionColors[Math.floor(Math.random() * 8)];
            var ChoosedQuestionWord = QuestionWord[Math.floor(Math.random() * 8)];
        }

        QuestionArea.style.color = ChoosedQuestionColor;
        QuestionArea.innerHTML = ChoosedQuestionWord;



        function randomNoRepeats(AnswerWord) {
            var copy = AnswerWord.slice(0);
            return function() {
              if (copy.length < 1) { copy = AnswerWord.slice(0); }
              var index = Math.floor(Math.random() * copy.length);
              var item = copy[index];
              copy.splice(index, 1);
              return item;
            };
        };
          

        var chooser = randomNoRepeats(AnswerWord);

        var chooser = randomNoRepeats(AnswerWord);
        AnswerArea1.innerHTML = chooser();
        AnswerArea2.innerHTML = chooser();
        AnswerArea3.innerHTML = chooser();
        AnswerArea4.innerHTML = chooser();
        AnswerArea5.innerHTML = chooser();
        AnswerArea6.innerHTML = chooser();
        AnswerArea7.innerHTML = chooser();
        AnswerArea8.innerHTML = chooser();   
        
    }


    AnswerArea1.onclick = function(){
         
        if(AnswerArea1.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }


    AnswerArea2.onclick = function(){

        if(AnswerArea2.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }


    AnswerArea3.onclick = function(){

        if(AnswerArea3.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }


    AnswerArea4.onclick = function(){

        if(AnswerArea4.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }


    AnswerArea5.onclick = function(){

        if(AnswerArea5.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }


    AnswerArea6.onclick = function(){

        if(AnswerArea6.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }


    AnswerArea7.onclick = function(){

        if(AnswerArea7.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }


    AnswerArea8.onclick = function(){

        if(AnswerArea8.textContent == QuestionArea.style.color){
            console.log("Correct")
            
            CorrectAnswer();       
        }

        else{
            console.log("Incorrect")
            
            WrongAnswer();
        }
    }

    EndButton.onclick = function(){

        location.href = "index.html";
    }
}




