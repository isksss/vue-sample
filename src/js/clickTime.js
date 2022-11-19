const clickTime = Vue.createApp({
    data(){
        return{
            clickTime:'press button!'
        };
    },

    methods: {
        onclick(){
            this.clickTime = new Date().toLocaleString();
        }
    }
});

clickTime.mount('#clickEvent');
