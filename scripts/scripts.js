// Function to add the sidebar to the page
function addSidebar() {
var sidebarHTML = `
    <!-- Sidebar/menu -->
    <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index: 3; width: 400px; border-right: 2px solid black;" id="mySidebar">
    <div class="w3-container w3-display-container w3-padding-16">
        <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
        <h3 class="w3-wide"><b>Pentecostalism in Latin America</b></h3>
    </div>
    <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">
        <a href="index.html" class="w3-bar-item w3-button">Overview</a>
        <a onclick="myAccFunc()" href="javascript:void(0)" class="w3-button w3-block w3-white w3-left-align" id="myBtn">
        Latin America <i class="fa fa-caret-down"></i>
        </a>
        <div id="demoAcc" class="w3-bar-block w3-show w3-padding-large w3-medium">
        <a href="typological.html" class="w3-bar-item w3-button">Categorization</a>
        <a href="historical.html" class="w3-bar-item w3-button">History</a>
        <a href="social-scientific.html" class="w3-bar-item w3-button">Influence</a>      
        <a href="theological.html" class="w3-bar-item w3-button">Theology</a>
        </div>
        <a href="multimedia.html" class="w3-bar-item w3-button">Multimedia</a>
        <a href="resources.html" class="w3-bar-item w3-button">Resources</a>
    </div>
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onclick="document.getElementById('credits').style.display='block'">Credits</a> 
    </nav>
`;
document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
}

// Call the function when the page loads
window.onload = addSidebar;

// Accordion 
function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", " w3-hide");
    }
  }
  
  // Click on the "Jeans" link on page load to open the accordion for demo purposes
  document.getElementById("myBtn").click();
  
  
  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
