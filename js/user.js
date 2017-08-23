$(function(){
    $("#delete").on("click",function(){
        var mymessage=confirm("确定要删除吗？") ;
        if(mymessage==true){
            $(".address").remove();
        }
    })
})