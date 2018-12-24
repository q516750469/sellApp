// 引入axios
import axios from 'axios'

// 封装请求
// 定义服务器地址
// const SERVER_IP = "http://47.107.97.161:8080/"
const SERVER_IP = "http://localhost:8080/"

// 发送获取商铺信息数据的请求
export function getSellData(){
    if(SERVER_IP.indexOf('localhost')!=-1){
        return axios.get(SERVER_IP+"seller.json")
    }else{
        return axios.get(SERVER_IP+"api/seller")
    }

}
// 获取商品信息
export function getGoods(){
    if(SERVER_IP.indexOf('localhost')!=-1){
        return axios.get(SERVER_IP+"goods.json")
    }else{
        return axios.get(SERVER_IP+"api/goods")
    }
}