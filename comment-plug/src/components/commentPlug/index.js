// src/components/index.js

import Vue from 'vue';
import Comment from './index.vue';

const Components = {
	commentPlug: Comment
};

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name]);
});

export default Components;
