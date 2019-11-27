import settingsManager from './settingsManager.js'

export default {
    components: {
        settingsManager,
    },
    template: `
        <div id="settings-tab">

            <br>
            <br>
             
            <label id="sound-button-title">Disable or enable sound.</label>

            <br>
            <button id="enable-sound" class="settings-tab-buttons" v-on:click="isSoundEnable = true">Enable Sound</button>
            <button id="disable-sound" class="settings-tab-buttons" v-on:click="isSoundEnable = false">Disable Sound</button>
            
            <br>
            <br>

            <label id="volume-slider-title" for="volume-slider">Volume: {{ volume }}</label>
            <br>
            <span>0</span><input type="range" min="0" max="100" value="50" id="volume-slider" v-model="volume"><span>100</span>

            <br>
            <br>

            <label id="timer-title">Timer:</label>
            <br>
            <button id="enable-timer" class="settings-tab-buttons" v-on:click="isTimerEnable = true">Enable timer</button>
            <button id="disable-timer" class="settings-tab-buttons" v-on:click="isTimerEnable = false">Disable timer</button>

            <br>
            <br>

            <button id="save-button" class="settings-tab-buttons" v-on:click="saveSettings">Save</button>

            <br>
            <br>

            <button id="cancel-button" class="settings-tab-buttons" v-on:click="ignoreSettings">Cancel</button>
        </div>
    `,
    data() {
        return {
            isSoundEnable: '',
            isTimerEnable: '',
            volume: 50,
        }
    },
    methods: {
        saveSettings: function(){
            
        },
        
        ignoreSettings: function(){
            this.showSodokoGrid();
        },

        showSodokoGrid: function(){
            document.getElementById("settings-tab").style.display = 'none';
            document.getElementById("sokobanGrid").style.display = 'flex';
        }

    }
}
