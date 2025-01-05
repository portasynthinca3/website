// jquery.min.js
const $ = (sel) => document.querySelector(sel);
const $all = (sel) => document.querySelectorAll(sel);

document.addEventListener("DOMContentLoaded", () => {
    // Replace abbreviations with FANCY abbreviations
    const abbrHost = $("#abbr-host");
    $all("abbr").forEach((abbr) => {
        // Create element
        const hoverElm = document.createElement("span");
        hoverElm.className = "fancy-abbr";
        abbrHost.appendChild(hoverElm);
        hoverElm.textContent = abbr.title;
        abbr.title = "";
    
        // Show on enter
        abbr.addEventListener("mouseenter", (evt) => {
            hoverElm.style.opacity = "0.95";
        });
    
        // Hide on leave
        abbr.addEventListener("mouseleave", (evt) => {
            hoverElm.style.opacity = "0";
        });
    
        // Move
        abbr.addEventListener("mousemove", (evt) => {
            hoverElm.style.left = `${evt.clientX + 5}px`;
            hoverElm.style.top = `${evt.clientY + 5}px`;
        });
    });
});

// see? 32 lines of JS and a shit ton of CSS is ALL it takes to make an
// arguably beautiful website!
//
// stop using massive frameworks where they are not needed. stop wasting
// people's computing resources. stop wasting the world's internet bandwidth.
