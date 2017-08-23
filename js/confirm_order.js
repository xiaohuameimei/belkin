$(function(){
        $(".addressList").on("click",function(){
            $(".addressList").removeClass('active');
            $(this).addClass('active');
        })
    })

var array = [0,1];
var app = new Vue({
    el: "#app",
    data(){
        return {
            array: array,
        };
    },
    methods: {
        deleteOrder(item){
            var self = this;
            var flag = confirm("确认是否删除?");
            if(flag){
                var index = self.array.indexOf(item);
                self.array.splice(index,1)
            }
        },
    },
    computed:{
        total1(){
            var total = 0;
            var self = this;
            return (self.array.length * 1699) + ".00";
        },
    }
});