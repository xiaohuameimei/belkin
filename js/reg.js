var div1 = document.querySelector("#code"); //aa是验证码div的ID
    var code1 = new vCode(div1,{
        len: 4,             //验证码字体数量
        bgColor: "#e60012", //验证码背景颜色
        colors: [           //验证码字体颜色
            '#DDDDDD',
            '#DDFF77',
            '#77DDFF',
            '#99BBFF',
            '#7700BB',
            '#EEEE00',
            '#000507',
            '#980023',
            '#50001a',
        ]
    });

    $(function(){
        $(".agree").on("click",function(){
            $(".check").toggleClass('selected');
        })
    })