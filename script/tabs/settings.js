export default {
    template: `
        <div id="settings-tab">
            <button id="disable-sound" class="settings-buttons">Disable Sound</button>
            <button id="enable-sound" class="settings-buttons">Enable Sound</button>
            <label id="volume-slider-title" for="volume-slider"><span>0</span></label>
            <input type="range" min="0" max="100" value="50" id="volume-slider"><span>100</span>
            <button id="save-button">Save</button>
            <button id="cancel-button">Cancel</button>
        </div>
    `, 
    methods: {
        saveSettings: function(){
            
        },
        
        ignoreSettings: function(){

        }

    }
}
