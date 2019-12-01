export default {
    methods: {
        addCookie: function(name, value){
            let cookieName = name + value + ";"
            document.cookie = cookieName;
        },
        getCookie: function(cookieName){
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++){
                let currentCookie = cookies[i];
                if (currentCookie.contains(cookieName) == true){
                    return currentCookie;
                }
            }
            return "";
        },
    }
}