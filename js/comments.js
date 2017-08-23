$(function(){
        $(".agree").on("click",function(){
            $(".check").toggleClass('selecked');
        })
        var oldScore = -1;
        var hoverCount = 0;
        $('.star').raty({
            score: 5,
            half: true,
            click: function(score, evt) {
                var index = $(this).attr("index");
                var scoreInt = parseInt(score);
                var tempScore = Math.abs(score - scoreInt);
                if(tempScore > 0 && tempScore <= 0.6){
                    tempScore = 0.5;
                }else{
                    tempScore = 0;
                    scoreInt++;
                }
                var finalyScore = scoreInt + tempScore;
                if(oldScore != -1 && hoverCount != 0){
                    oldScore = finalyScore;
                }
                $($(".rating_score")[index]).text(finalyScore + "分");
            },
            mouseover: function(score, evt){
                var index = $(this).attr("index");
                if(hoverCount == 0){
                    oldScore = $($(".rating_score")[index]).text().replace("分","");
                    hoverCount++;
                }
                var scoreInt = parseInt(score);
                var tempScore = Math.abs(score - scoreInt);
                if(tempScore > 0 && tempScore <= 0.6){
                    tempScore = 0.5;
                }else{
                    tempScore = 0;
                    scoreInt++;
                }
                var finalyScore = scoreInt + tempScore;
                $($(".rating_score")[index]).text(finalyScore + "分");
            },
            mouseout: function(score, evt){
                hoverCount = 0;
                var index = $(this).attr("index");
                $($(".rating_score")[index]).text(oldScore + "分");
            }
         });
    })