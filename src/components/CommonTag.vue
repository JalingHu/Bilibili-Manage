<template>
  <div class="tabs">
      <el-tag
      v-for="(tag,index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' :'plain'"
      @click="changeMenu(tag)"
      @close="handleclose(tag,index)"
      size="small">
    {{tag.label}}
      </el-tag>
  </div>
</template>


<script>
// 运用辅助函数
import {mapState, mapMutations} from 'vuex'
export default {
    name:'CommonTag',
    data(){
        return{

        }
    },
    // mapState调用之后返回一个对象，这里利用计算属性将他解构出来
    computed:{
        ...mapState({
            tags:sate => sate.tab.tabsList 
        })
    },
    methods:{
        ...mapMutations({
           close:'closeTag'
        }),
        changeMenu(item){
            this.$router.push({name :item.name})
        },
        handleclose(tag,index){
            const length = this.tags.length - 1
            this.close(tag)
            if(tag.name !== this.$route.name){
                // 如果不一致就不用做操作
                return;
            }
            if(index === length){
                this.$router.push({
                    name:this.tags[index - 1].name
                })
            }else {
                    this.$router.push({
                        name:this.tags[index].name
                    })
                }
        }
    }
}
</script>

<style lang="less" scoped>
    .tabs {
        padding: 20px;
        .el-tag{
            margin-right: 15px;
            /* 让鼠标变成小手 */
            cursor: pointer;
        }
    }
</style>