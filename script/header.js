import settingsTab from './tabs/settings.js';
import timer from './timer.js';

export default{
    components: {
        settingsTab,
        timer,
    },
    template: `
        <div id="header">
            <div id="menu-bar">
                <button id="start-game-button" class="header-buttons" v-on:click="startGame">Start!</button>
                <button id="settings-button" class="header-buttons" v-on:click="showSettings">Settings</button>
                <button id="end-game-button" class="header-buttons" v-on:click="stopGame">Stop!</button>
            </div>
            <div id="tab">
                <settingsTab id="settings-tab" hidden></settingsTab> 
            </div>
            <div id="timer">
                <timer></timer>
            </div>
        </div>

    `,
    methods: {
        startGame: function(){
            
        },

        stopGame: function(){
            
        },

        showSettings: function(){
            document.getElementById("settings-tab").style.display = 'block';
            document.getElementById("sokobanGrid").style.display = 'none';
            document.getElementById("arrows").style.display = 'none';
        },
    }
}