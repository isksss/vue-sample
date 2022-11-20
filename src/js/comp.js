const comp = Vue.createApp({});

comp.component('my-comp',{
    template:`<div>hello, {{name}}!</div>`,
    data() {
        return {
            name:'namae'
        };
    }
});

comp.mount('#my-comp');


// local
const greeting ={
    template:`<p>what's up?</p>`
};

const comp2 = Vue.createApp({
    components:{
        'my-comp2': greeting
    }
});

comp2.mount('#my-comp2');