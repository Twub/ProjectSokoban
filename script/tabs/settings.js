export default {
    template: `
        <div id="settings-tab">

            <br>
            <br>
             
            <label id="sound-button-title">Disable or enable sound.</label>

            <br>
            <button id="disable-sound" class="settings-buttons">Disable Sound</button>
            <button id="enable-sound" class="settings-buttons">Enable Sound</button>

            <br>
            <br>

            <label id="volume-slider-title" for="volume-slider">Volume:</label>
            <br>
            <span>0</span><input type="range" min="0" max="100" value="50" id="volume-slider"><span>100</span>

            <br>
            <br>

            <label id="timer-title">Timer:</label>
            <br>
            <button id="enable-timer" class="settings-buttons">Enable timer</button>
            <button id="disable-timer" class="settings-buttons">Disable timer</button>

            <br>
            <br>

            <button id="save-button" class="settings-buttons" v-on:click="saveSettings">Save</button>

            <br>

            <button id="cancel-button" class="settings-buttons" v-on:click="ignoreSettings">Cancel</button>
        </div>
    `, 
    methods: {
        saveSettings: function(){
            
        },
        
        ignoreSettings: function(){
            
        }

    }
}
