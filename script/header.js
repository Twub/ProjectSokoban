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
            <settingsTab></settingsTab> <!-- Enkapsulera det du vill göma/visa i tag och sen använd css för att hide/show -->
        </div>

    `,
    methods: {
        startGame: function(){

        },

        stopGame: function(){

        },

        showSettings: function(){
            document.getElementById("sokobanGrid").style.visibility = 'hidden'; // bara för test just nu ska inte använda mig av denna implementation senare.
        }
    }
}