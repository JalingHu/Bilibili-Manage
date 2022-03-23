<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:20px;">
      <el-card shoadow="hover">
        <div class="user">
          <img :src="userImg"/>
          <div class="userInfo">
            <p class="name">
              JialinHU
            </p>
            <p class="access">
              超级管理员
            </p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2022.3.20</span></p>
          <p>上次登录地点:<span>广东.湛江</span></p>
        </div>
      </el-card>
      <el-card  style="margin-top:20px;width:460px">
         <el-table
      :data="tableData">
      <el-table-column
      v-for="(val, key) in tableLabel"
        :key="key"
        :prop="key"
        :label="val">
      </el-table-column>
    </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top:20px">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex', padding: 0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
          <div class="detail">
            <p class="num">
              ￥{{item.value}}
            </p>
            <p class="txt">
              {{item.name}}
            </p>
          </div>
        </el-card>
      </div>
      <el-card style="height:200px">
        <div style="height:280px" ref="echarts">
        
        </div>
      </el-card>
        <div class="graph">
          <el-card style="height:260px" >

          </el-card>
           <el-card style="height:260px" >
            
          </el-card>
        </div>
    </el-col>
  </el-row>
</template>


<script>
import {getData} from '../../../api/data.js'
// 引入echarts
import * as echarts from 'echarts'


export default {
    name:'home',
    data(){
        return{
           userImg:require('../../assets/images/HUu.png'),
            tableData: [
              {
                name: 'oppo',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
              },
              {
                name: 'vivo',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
              },
              {
                name: '苹果',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
              },
              {
                name: '小米',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
              },
              {
                name: '三星',
                todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
              },
              {
                name: '魅族',
              todayBuy: 100,
                monthBuy: 300,
                totalBuy: 800
              }
            ],
            tableLabel:{
              name:'课程',
              todayBuy:'今日购买',
              monthBuy:'本月购买',
              totalBuy:'总共购买'
            },
            countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ]
          

        }
    },
    mounted() {
      getData().then(res => {
        const {code, data} = res.data
        if(code === 20000) {
          this.tableData = data.tableData
          const order = data.orderData
          const xData = order.date
          const keyArray = Object.keys(order.data[0])
          const series = []
          keyArray.forEach(key => {
            series.push({
              name:key,
              data:order.data.map(item => item[key]),
              type:'line'
            })
          })
          const option = {
            xAxis:{
              date:xData
            },
            yAxis:{},
            legend:{
              date:keyArray
            },
             series
          }
          
          const E = echarts.init(this.$refs.echarts)
          E.setOption(option)
        }
        console.log(res);
      })
    }
}
</script>