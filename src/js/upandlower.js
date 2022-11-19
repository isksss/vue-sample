const UpperAndLower = Vue.createApp({
    data(){
        return{
            name:'',
            upper:'',
            lower:''
        };
    },

    created(){
        // this.delayFunc = _.debounce(this.getUpper,2000);
        this.delayUpperFunc = _.debounce(this.getUpper,1000);
        this.delayLowerFunc = _.debounce(this.getLower, 1000);
    },

    watch:{
        name(newValue, oldValue){
            // this.delayFunc();
            this.delayUpperFunc();
            this.delayLowerFunc();
        }
    },

    methods:{
        getUpper(){
            this.upper = this.name.toUpperCase();
        },
        getLower(){
            this.lower = this.name.toLowerCase();
        }
    },
});

UpperAndLower.mount('#upAndLow');