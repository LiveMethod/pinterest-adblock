chrome.runtime.onMessage.addListener( (request, sender, response) => {
  if(request.siglePin === true) cleanSinglePin();
});

// cleaning the single pin view
function cleanSinglePin() {
  console.log('cleaning single pin....');
  // Eliminates small white ad dots
  // that overlay pins in single pin view
  var imageLinks = document.querySelectorAll('.closeupContainer .imageLink');
  console.log(`There are ${imageLinks.length} dots`);
  imageLinks.forEach(area => {
    var dots = area.querySelectorAll('[role="button"]');
    dots.forEach(dot => {
      console.log('removed dot')
      dot.remove();
    });
  });
  
}
