import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 获取商品数据
import {getGoods,getmerchant} from "./api/sellApi";


export default new Vuex.Store({
    state:{
        // 创建数组装获取到的后台数据
        list:[]
    },
    mutations:{
        foodsData(state,obj){
            // 初始化商品数据
            state.list = obj.data
        },
        numChange(state,obj){
            for(let item of state.list){
                for(let food of item.foods){
                    if(food.name == obj.name){
                        food.num += obj.num
                        return
                    }
                }
            }
        },
        clearNum(state){
            for(let item of state.list){
                for(let food of item.foods){
                    food.num=0
                }
            }
        }
    },
    actions:{
        // 异步获取数据
        async ainitFoodsData(context){
            let res = await getGoods();
            let arr = res.data;
            
            for(let item of arr){
                for(let value of item.foods){
                    value.num = 0
                }
            }

            context.commit({
                type:'foodsData',
                data:arr
            })
        }
    }
})