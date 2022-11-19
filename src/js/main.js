// 2-1
Vue.createApp({
    data: function(){
        return{
            message: 'welcome!'
        };
    }
}).mount('#app1');

// 2-2
Vue.createApp({
    data: function(){
        return{
            message: 'welcome! 2'
        };
    }
}).mount('#app2');
Vue.createApp({
    data: function(){
        return{message: 'welcome! 3'};
    }
}).mount('#app3');

Vue.createApp({
    data: function(){
        return{
            url: 'https://github.com',
            // flag: true  
            flag: false     
        };
    }
}).mount('#app4');
//
//
Vue.createApp({
    data(){
        return {
            email: 'Example1234@example.com',
            current: new Date()
        }
    },
    computed:{
        localEmail(){
            return this.email.split('@')[0].toLowerCase();
        }
    },
    methods:{
        localEmailFunc(){
            return this.email.split('@')[0].toLowerCase();
        }
    },

    created(){
        this.timer = setInterval(()=>{
            this.current = new Date()
        }, 1000);
    },
    beforeUnmount(){
        clearInterval(this.timer);
    }
}).mount('#app5');
