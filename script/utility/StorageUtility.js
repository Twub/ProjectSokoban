export default {
    methods: {
        addItem: function(key, value){
            localStorage.setItem(key, value);
        }
    }
}