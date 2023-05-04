function catar(site) {
    var site
    fetch (site)
    
     .then(response => response.text())
     .then(data => {
       // Insert the content into the main HTML
       document.getElementById('content').innerHTML = data;
     })
     .catch(error => {
       console.error('Error fetching external.html:', error);
     });
   }