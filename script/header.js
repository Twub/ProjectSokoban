import settingsTab from './tabs/settings.js';

export default{
    components: {
        settingsTab,
    },
    template: `
        <div id="header">
            <button id="start-game-button" class="header-buttons" v-on:click="startGame">Start!</button>
            <button id="settings-button" class="header-buttons" v-on:click="showSettings">Settings</button>
            <button id="end-game-button" class="header-buttons" v-on:click="stopGame">Stop!</button>
        </div>
    `,
    methods: {
        startGame: function(){

        },

        stopGame: function(){

        },

        showSettings: function(){
            document.getElementById("sokobanGrid").style.visibility = 'hidden';
        }
    }
}