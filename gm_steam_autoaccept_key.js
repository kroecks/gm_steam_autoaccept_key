// ==UserScript==
// @name         Steam Key Auto-Accept
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically accept SSA and click continue on Steam key registration page
// @author       Kenneth Roecks
// @match        https://store.steampowered.com/account/registerkey*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kroecks/gm_steam_autoaccept_key/main/gm_steam_autoaccept_key.js
// @downloadURL  https://raw.githubusercontent.com/kroecks/gm_steam_autoaccept_key/main/gm_steam_autoaccept_key.js
// ==/UserScript==

(function() {
    'use strict';

    // Wait for page to fully load
    window.addEventListener('load', function() {
        // Find the checkbox
        const checkbox = document.getElementById('accept_ssa');
        
        if (checkbox && !checkbox.checked) {
            // Check the checkbox
            checkbox.checked = true;
            
            // Trigger change event in case Steam is listening for it
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            
            // Wait 1 second, then click continue
            setTimeout(function() {
                const continueBtn = document.getElementById('register_btn');
                if (continueBtn) {
                    continueBtn.click();
                }
            }, 1000);
        }
    });
})();