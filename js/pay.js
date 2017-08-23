var index = 0;//记录输入的input框
    $(function(){
        $(".list li").on("click",function(){
            $(".check").removeClass("active");
            $(this).children('.check').addClass('active');
        })

        $(".radio_pay").on("click",function(){
            $(".payment img").attr("src","images/pay_radio2.png");
            $(this).children(".payment").children("img").attr("src","images/pay_radio1.png");
         });
        var isDelete = false;
        $(".inputPassword").on("keydown",function(event){
                if(event.keyCode == 8){
                    if(index == 0){
                        return;
                    }
                    $(".inputPassword").off("input");
                    if(index != 0){
                        index--;
                        isDelete = true;
                        $(this).blur();
                        $($(".inputPassword")[index]).focus();
                        $(".inputPassword").on("input",inputEvent);
                    }
                     $(this).val("");
                }
        });

        $(".inputPassword").on("input",inputEvent);
        function inputEvent(){
            this.value = this.value.replace(/\D/g,'');
            if (this.value == "") {
                this.value = "";
                return;
            };

           if(!isDelete){
                if(index != 5){
                    $(this).blur();//失去焦点
                }
                index++;
                $($(".inputPassword")[index]).focus();//获取焦点
           }else{
                isDelete = false;
           }
        }

        $("#btn").on("click",function(){
            layer.confirm('是否确认付款?',{
                btn: ['确定','取消'],
            },function(){
                console.log("确定");
                 location.href = "pay_success.html";
                layer.closeAll();
            },function(){
                console.log("取消");
                 location.href = "pay_failure.html";
                layer.closeAll();
            });//询问框
        });
    })