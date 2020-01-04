<template>
    <div class="use-at-demo">
        DEMO
        <at>
            <template v-slot:default="slotProps" v-slot:at>
                <span v-text="slotProps.fx.name"></span>
            </template>
            <!-- <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template> -->
        </at>
        <quill-editor v-model="content" :options="editorOption" @change="onEditorChange($event)"></quill-editor>
    </div>
</template>

<script>
// https://github.com/surmon-china/vue-quill-editor
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor,Quill } from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)
import at from './index.vue';
export default {
    data() {
        return {
            html: 'DSA',
            content: '312',
            editorOption: {
                modules: {
                    toolbar: [
                        [{ 'size': ['small', false, 'large'] }],
                        ['bold', 'italic'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link', 'image']
                    ],
                    history: {
                        delay: 1000,
                        maxStack: 50,
                        userOnly: false
                    },
                    imageDrop: true,
                    imageResize: {
                    displayStyles: {
                        backgroundColor: 'black',
                        border: 'none',
                        color: 'white'
                    },
                    modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
                    }
                }
            }
        }
    },
    components: {
        quillEditor,
        at
    },
    methods: {
        onEditorChange(delta, oldDelta, source) {
            console.log(delta, oldDelta, source);
        },
        onEditorBlur(editor) {
            console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        }
    },
}
</script>

<style lang="less" scoped>
.use-at-demo {
    // color: aqua;
}
</style>