var array1 = [{img: "images/list_pro_01.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_02.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_03.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_01.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_02.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_03.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_01.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_02.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"},{img: "images/list_pro_03.jpg",name: "男女生通用有线运动音乐降噪耳麦",price: "1280"}];
var app = new Vue({
        el: "#app",
        data: {
            array1: array1,
        },
        methods: {
            addShopCar(item){
                var shopObject = {
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    number: 1,
                    check: false,
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
        }
    });

$(function(){
        $(".brand li").on("click",function(){
           $(".brand li").removeClass('active');
           $(this).addClass('active');
        })

        $(".kind li").on("click",function(){
           $(".kind li").removeClass('active');
           $(this).addClass('active');
        })

        $(".color li").on("click",function(){
           $(".color li").removeClass('active');
           $(this).addClass('active');
        })

        $(".sequence li").on("click",function(){
           $(".sequence li").removeClass('active');
           $(this).addClass('active');
        })

        $(".sequence li button").on("click",function(){
            if ($(this).children("i").hasClass('fa fa-angle-up')) {
                $(this).children("i").attr("class",'fa fa-angle-down');
            }else{
                $(this).children("i").attr("class",'fa fa-angle-up');
            }
        })

        $(".priceRange").on("input",function(){
            var value = $(this).val();
            if(isNaN(value)){
                $(this).val("");
            };
            if( value < 0 ){
                $(this).val("");
                value = "";
            }
        })

    })