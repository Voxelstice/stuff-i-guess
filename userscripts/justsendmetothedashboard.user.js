// ==UserScript==
// @name         JUST send me to the dashboard.
// @version      0.1
// @description  Sends you to the dashboard when https://create.roblox.com/? is opened. Disable this userscript to disable
// @author       Voxelstice
// @match        https://create.roblox.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // quite a simple one isn't it
    window.location.href = "https://create.roblox.com/dashboard/creations"
})();
