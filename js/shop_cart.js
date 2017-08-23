// $(function(){
//         $(".allCheck").on("click",function(){
//             if($(".allCheck .check").hasClass('active')){
//                 $(".allCheck .check").removeClass('active');
//             }else{
//                 $(".allCheck .check").addClass('active');
//             }
//         })
//     })
var localStorage = window.localStorage;
var list = localStorage.getItem("shopList");
var array = [];
if(list){
    array = JSON.parse(list);
}

var app = new Vue({
    el: "#app",
    data: {
        shopList: array,
        allCheck: false,
        count: 0,
    },
    //绑定事件的方法区
    methods: {
        plus: function(item){
            item.number++;
        },
        minus: function(item){
            if(item.number == 1){
                return;
            }
            item.number--;
        },
        //单选打钩
        checkShop: function(item){
            item.check = !item.check;
            //方式不固定
            //方法一： 定义一个变量记录勾选状态 如果跟数组长度一致 则allCheck为true否则为false
            //方法二： 每次点击以后执行循环遍历  定义变量 查看跟数组长度是否一致
            if(item.check == true){
                this.count++;
            }else{
                this.count--;
            }
            // this.shopList.forEach(value => {
            //     console.log(this);
            //     //如果为选中状态 计数器自增1
            //     if(value.check == true){
            //         self.count++;
            //     }
            // });
            if(this.count == this.shopList.length){
                this.allCheck = true;
            }else{
                this.allCheck = false;
            }
        },
        allCheckClick: function(){
            //this   this指向的是整个vue对象
            this.allCheck = !this.allCheck

            if(this.allCheck == true){
                this.count = this.shopList.length;
            }else{
                this.count = 0;
            }

            this.shopList.forEach(value => {
                if(this.allCheck == true){
                    value.check = true;
                }else{
                    value.check = false;
                }

            });
        },
        inputChange: function(item){
            //正则表达式
            item.number = item.number.replace(/[^\d]/g,'');
            if(item.number == ""){
                item.number = 1;
            }
        },
        deleteShop: function(){
            var flag = false;
            this.shopList.forEach(value => {
                if(value.check){
                    flag = true;
                    return;
                }
            });
            if(flag){
                var mymessage=confirm("确定要删除吗？") ;
                if(mymessage==true)
                {
                    var localStorage = window.localStorage;
                    var list = JSON.parse(localStorage.getItem("shopList"));
                    for(var i = 0 ; i < this.shopList.length ; i++){
                        if(this.shopList[i].check == true){
                            this.shopList.splice(i,1);
                            list.splice(i,1);
                            i = -1;//防止删除最后一个 导致bug
                        }
                    }
                    localStorage.setItem("shopList",JSON.stringify(list));
                    this.count = 0;
                    var self = this;
                    this.shopList.forEach(value => {
                        if(value.check == true){
                            self.count++;
                        }
                    });
                    if(this.count == 0){
                        this.allCheck = false;
                    }
                }
            }else{
                alert("请勾选要删除的商品！");
            }

        },
    },
    //计算列属性
    computed: {
        total: function(){
            var tempTotal = 0;
            this.shopList.forEach(value => {
                if(value.check == true){
                    tempTotal += value.price * value.number;
                }
            });
            tempTotal = tempTotal.toFixed(2);
            return tempTotal;
        }
    }
});