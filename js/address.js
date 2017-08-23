var array = [{name:"小明",city:"云南省昆明市五华区",street:"一二一大街",num:"1234569696",phone:"1565492154"},{name:"小明",city:"云南省昆明市五华区",street:"一二一大街",num:"1234569696",phone:"1565492154"},{name:"张三",city:"云南省昆明市五华区",street:"一二一大街",num:"1234569696",phone:"1565492154"},{name:"小明",city:"云南省昆明市五华区",street:"一二一大街",num:"1234569696",phone:"1565492154"},{name:"小明",city:"云南省昆明市五华区",street:"一二一大街",num:"1234569696",phone:"1565492154"},];
var app = new Vue({
    el: "#app",
    data: {
            array: array,
        },
    methods: {
        deleteAddress(item){
            var self = this;
            var flag = confirm("确认是否删除?");
            if(flag){
                var index = self.array.indexOf(item);
                self.array.splice(index,1)
            }
        },
    }
});
