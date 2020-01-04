<template>
    <div class="comment-piug-parent">
        atDemo
        <at :members="members" name-key="name" :filterMatch="filterMatch">
            <template slot="item" slot-scope="s">
                <slot name="at" :fx="s"></slot>
            </template>
            <div class="editor" contenteditable v-html="html"></div>
        </at>
        <!-- <div>
            <slot name="header"></slot>
        </div> -->
    </div>
</template>

<script>
// 参考 https://www.jianshu.com/p/fff5079b1268
// import At from 'vue-at'
import At from './src/App.vue'
export default {
    data() {
        return {
            html: '',
            members: [{
                avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
                name: 'myrtie.green'
            }, {
                avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
                name: '椿木'
            }]
        }
    },
    components: { At },
    methods: {
        filterMatch(name, chunk, at) {
            console.log(name, 1, chunk, 2,at);
            // return name.toLowerCase().indexOf(chunk.toLowerCase()) > -1
        }
    },
};
</script>

<style lang="scss" scoped>
</style>