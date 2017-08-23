var array1 = [{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"}];
    var array2 = [{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"}];
    var array3 = [{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "12.80"}];
    var array4 = [{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro01.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro02.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro03.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"},{img: "images/index_pro04.jpg",name: "自行车手机架通用山地车配件骑行装备导航架电动车摩托车手机支架",price: "34.80"}];
    var app = new Vue({
        el: "#app",
        data: {
            array1: array1,
            array2: array2,
            array3: array3,
            array4: array4,//右边的array为上方自定义的数组值
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


//     function addShopCar(){
//     var shopName = {{item.name}};
//     var price = $("#price").text().replace("￥","");
//     var val = $("#count").val();
//     var img = $("#bigImg").attr("src");
//     var shopObject = {
//         check: false,
//         name: shopName,
//         price: price,
//         img: img,
//         number: val,
//     };

// }