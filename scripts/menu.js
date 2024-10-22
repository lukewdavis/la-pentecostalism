// menu.js

// document.addEventListener("DOMContentLoaded", function() {
//     const menuHTML = `
//         <h2>Menu</h2>
//         <ul>
//             <li><a href="index.html">Homepage</a></li>
//             <li>
//                 <a href="about.html">About LA Pentecostalism</a>
//                 <ul>
//                     <li><a href="social.html">Social Factors</a></li>
//                     <li><a href="economic.html">Economic Factors</a></li>
//                     <li><a href="cultural.html">Cultural Factors</a></li>
//                     <li><a href="political.html">Political Influence</a></li>
//                 </ul>
//             </li>
//             <li><a href="gallery.html">Multimedia Gallery</a></li>
//             <li><a href="resources.html">Resources</a></li>
//             <li><a href="references.html">References</a></li>
//         </ul>
//     `;

//     // Insert the menu into the element with the class "menu"
//     document.querySelector(".menu").innerHTML = menuHTML;
// });

document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
        <h2>Menu</h2>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li>
                <a href="about.html">About LA Pentecostalism</a>
            </li>
            <li><a href="gallery.html">Multimedia Gallery</a></li>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="references.html">References</a></li>
        </ul>
    `;

    // Insert the menu into the element with the class "menu"
    document.querySelector(".menu").innerHTML = menuHTML;
});

// add favicon

document.addEventListener("DOMContentLoaded", function() {
    // Create a new link element for the favicon
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/x-icon';
    faviconLink.href = 'img/favicon.ico';  // Path to your favicon image

    // Append the favicon link to the <head> of the document
    document.head.appendChild(faviconLink);
});

