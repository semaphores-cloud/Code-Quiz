    var question = document.querySelector(".ques");
    var time= document.querySelector("time");
    var answer = document.querySelector("ans");
    var score= 0;
    Highscore= document.getElementById("score"). textContent;
    var time= 75;
        var interval = setInterval(function(){
            document.getElementById('time').innerHTML=time;
            time--;
            if(time=== 0){
                clearInterval(interval);
                document.getElementById("clear").innerHTML='Finish';
                score = document.getElementById('time');
            }
        }, 1000);
        $(document).ready(function() {
            $("#form").hide();
            $(".ques").hide()
            $("#time").hide();
            $("p").hide();
            $(".ques3").hide();
            $(".ques4").hide();
            $(".ques5").hide();
            $("#score").hide();

            $("#btn").click(function (){
                $("#btn").hide();
                $(".ques").show();
                $(".ans1").show();
                $(".box1").show();
                $(".ques2").hide();
                $("#time").show();
                $("p").show();
                $(".ques3").hide();
                $(".ques4").hide();
                $(".ques5").hide();
            });
            $(".ans1").click(function(){
                $("#btn").hide();
                $(".box1").hide();
                $(".box2").show();
                $(".ques2").show();
            });

           $(".ques2").click(function(){
                $("#btn").hide();     
           });
           $(".ans2").click(function(){
                $("#btn").hide();
                $(".box1").hide();
                $(".box2").hide();
                $(".box3").show();
                $(".ques3").show();
            });
            $(".ques3").click(function(){
                $("#btn").hide();
                $(".ques1").hide();
                $(".ans1").hide();
                $(".ques2").hide();
                $(".ans2").hide();
                $(".box3").show();
                $(".ques3").show();  
            });
            $(".ans3").click(function(){
                $("#btn").hide();
                $(".box1").hide();
                $(".box2").hide();
                $(".box3").hide();
                $(".que3").hide();
                $(".ans3").hide();
                $(".ques4").show();
           });
            $(".ques4").click(function(){
                $("#btn").hide();
                $(".ques1").hide();
                $(".ans1").hide();
                $(".ques2").hide();
                $(".ans2").hide();
                $(".box3").hide();
                $(".ques3").hide();
                $(".box4").show();
                $(".ques4").show();    
            });
            $(".ans4").click(function(){
                $("#btn").hide();
                $(".box1").hide();
                $(".box2").hide();
                $(".ques2").hide();
                $(".box3").hide();
                $(".ques3").hide();
                $(".box4").hide();
                $(".que4").hide();
                $(".ans4").hide();
                $(".ques5").show();
            });
            $(".ques5").click(function(){
                $("#btn").hide();
                $(".ques1").hide();
                $(".ans1").hide();
                $(".ques2").hide();
                $(".ans2").hide();
                $(".box3").hide();
               $(".ques3").hide();
               $(".box4").hide();
               $(".que4").hide();  
            });
           $(".ans5").click(function(){
                $("#btn").hide();
                $(".box1").hide();
                $(".box2").hide();
                $(".ques2").hide();
                $(".box3").hide();
                $(".ques3").hide();
                $(".box4").hide();
                $(".que4").hide();
                $(".ans4").hide();
                $(".ques5").hide();
                $(".ans5").hide();
                $("#score").show();
                $("#form").show();
           });
        });

        Highscore = document.getElementById("#timer");
        var result="";
        var answer = [["margin-bottom"], ["height"], ["css"], ["parentheses"], ["Django"]];
        $("#btn1") = document.querySelector("btn1")
        function answer(){
            if(btn1==answer[i]){
                timer = timer-1;
            }
            else{
                timer = timer-15;
            }
        }
        result = function answer(){
            if (ans1 === answer[0]){
                score+=1;
            }
           else{
                score= time-15;
            }
            if(ans2=== answer[1]){
                score+=1;
            }
            else{
                score= time-15;
            }
        };
        function score(){
            score== time;
        }
        $("#score").innerHTML.show()
    