<template>
  <dir>
      <Editor :init="init" v-model="content"></Editor>
  </dir>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import tinymce from './tinymce.min.js'
import './icons/default/icons.min.js'
import './themes/silver/theme.min.js'
import './langs/zh_CN'
import { watch } from 'fs'
import './plugins/preview/plugin.min.js'

export default {
    components: { Editor },
    props:{
        value:{
            type:String,
            default:''
        }
    },
    data() {
        return{
            init:{
                language:'zh_CN',
                height:'400px',
                plugins:'preview',
                branding:false,
                toolbar:['undo redo | formatselect | preview | alignleft | alignjustify | alignright | alignjustify | bold | italic | underline | strikethrough |  fontsizeselect'],
            },
            
            content:this.value,
        }
    },
    watch:{
        value(NewV){
            this.content=NewV
        },
        content(NewV){
            this.$emit('input' , NewV)
        }
    }
}
</script>

<style>
@import url('./skins/ui/oxide/skin.min.css');
</style>