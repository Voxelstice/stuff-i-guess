// ==UserScript==
// @name         Remove Unnecessary Roblox Tabs
// @version      0.1
// @description  Remove the stupid clutter!
// @author       Voxelstice
// @match        https://www.roblox.com/home
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

async function doShit() {
    'use strict';

    var places = await document.getElementById("place-list")
    var mainPlaces = places.childNodes[0].childNodes[0].childNodes

    // destroy recommended tab..
    mainPlaces[1].remove()

    // destroy sponsored
    mainPlaces[2].remove()

    // destroy recommended again
    mainPlaces[2].remove()
    mainPlaces[3].remove()
}

setTimeout(doShit, 2000)
