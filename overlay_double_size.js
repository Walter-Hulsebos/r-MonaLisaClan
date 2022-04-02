// ==UserScript==
// @name         MonaLisaClan DOUBLE SIZE
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Keep the canvas beautiful!
// @author       /u/djdogjuam2 & /u/irate_kalypso
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Walter-Hulsebos/r-MonaLisaClan/blob/main/overlay_double_size.js
// @downloadURL  https://github.com/Walter-Hulsebos/r-MonaLisaClan/raw/main/overlay_double_size.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/Walter-Hulsebos/r-MonaLisaClan/main/GIANT_LAYOUT.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            
            return i;
        })())

    }, false);
}


