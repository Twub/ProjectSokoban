export default {
    methods: {
        addItem: function(key, value){
            localStorage.setItem(key, value);
        },
        getItem: function(key){
            return localStorage.getItem(key);
        },
        removeItem: function(key){
            localStorage.removeItem(key);
        }
    }
}