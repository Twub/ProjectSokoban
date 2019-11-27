import settingsTab from './tabs/settings.js';

export default{
    components: {
        settingsTab,
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
        </div>
    `,
    methods: {
        startGame: function(){

        },

        stopGame: function(){

        },

        showSettings: function(){
         //   document.getElementById("sokobanGrid").style.visibility = 'hidden'; // bara för test just nu ska inte använda mig av denna implementation senare.
            document.getElementById("settings-tab").style.display = 'block';
        }
    }
}

// <settingsTab id="settings-tab" hidden></settingsTab>