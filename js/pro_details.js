$(function(){
        $(".hoverImg").hover(function(){
            var smallImg = $(this).attr("src");
            $("#bigImg").attr("src",smallImg)
        },function(){

        })

        $(".sm_pic").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".sm_pic").removeClass("active");
                $(this).addClass('active');
            }else{
            }
        })

        $(".color").on('click',function(){
            $(".color").removeClass('active');
            $(this).addClass('active');
        })

        $("#minus").on("click",function(){
            var value = $("#count").val();//找到input框id为count的 的值
            value = value * 1;
            value -= 1;
            if(value <= 0 ){
                return;//强制执行完毕方法
            }
            $("#count").val(value);
        });
        //绑定加号点击事件
        $("#plus").on("click",function(){
            var value = $("#count").val();//找到input框id为count的 的值
            value = value * 1;
            value += 1;
            $("#count").val(value);
        });
        $("#count").on("input",function(){
            var v = String(this.value);
            if(v.indexOf(".") > -1){
                v = v.split(".")[0];
                this.value = v;
            }
        });
        $("#count").on("change",function(){
            var value = $(this).val();
            if(isNaN(value)){
                $(this).val(1);
            };
            if( value<=0 ){
                $(this).val(1);
                value = 1;
            };
            if( value == "" ){
                $(this).val(1);
                value = 1;
            }
        })
        $("#prev").on("click",function(){
            var index = -1;

            for(var i = 0 ; $(".smallImg").children("div").length ; i++){
                if($($(".smallImg").children("div")[i]).hasClass("active")){
                    index = i;
                    break;
                }
            }
            $(".smallImg").children("div").removeClass("active");
            index = --index < 0 ? $(".smallImg").children("div").length - 1 : index;
            $($(".smallImg").children("div")[index]).addClass("active");
            var smallImg = $(".active").children("img").attr("src");
            $("#bigImg").attr("src",smallImg);
        });
        $("#next").on("click",function(){
             var index = -1;
            for(var i = 0 ; $(".smallImg").children("div").length ; i++){
                if($($(".smallImg").children("div")[i]).hasClass("active")){
                    index = i;
                    break;
                }
            }
            $(".smallImg").children("div").removeClass("active");
            index = ++index > $(".smallImg").children("div").length - 1 ? 0 : index;
            $($(".smallImg").children("div")[index]).addClass("active");
            var smallImg = $(".active").children("img").attr("src");
            $("#bigImg").attr("src",smallImg);
        });
});

function addShopCar(){
    var shopName = $("#shop_name").text();
    var price = $("#price").text().replace("￥","");
    var val = $("#count").val();
    var img = $("#bigImg").attr("src");
    var shopObject = {
        check: false,
        name: shopName,
        price: price,
        img: img,
        number: val,
    };
    var localStorage = window.localStorage;
    //get set undefined
    var list = localStorage.getItem("shopList");
    if(list){ //条件成立的情况为list != undefined
        list = JSON.parse(list);
        list.push(shopObject);
        localStorage.setItem("shopList",JSON.stringify(list));
    }else{
        var array = [];
        array.push(shopObject);
        localStorage.setItem("shopList",JSON.stringify(array));
    }
    alert("加入购物车成功");
}