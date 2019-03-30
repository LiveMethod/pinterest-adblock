//---------------------------
// TODO
//---------------------------

//---------------------------
// CONFIG
//---------------------------

var shouldLog = false;

var gridItemSelector = '[data-grid-item="true"]';

var pinSelector = '.pinWrapper';

//---------------------------
// EVENT LISTENER
//---------------------------

// Info:
// https://stackoverflow.com/questions/2844565/is-there-a-javascript-jquery-dom-change-listener/11546242#11546242

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// when a DOM mutation occurs
var observer = new MutationObserver(function(mutations, observer) {
    shouldLog && console.log(mutations, observer);
    detox();
});

var mainContainer = document.querySelector(".mainContainer");

observer.observe(document.body, {
  subtree: true,
  childList: true,
});

//---------------------------
// DOM MANIPULATION
//---------------------------

function detox(event) {
  var promoTags = document.querySelectorAll('[title="Promoted by"]');

  // Find and remove every promo ad tag's parent pin
  promoTags.forEach( item => {
    var gridItem = item.closest(gridItemSelector);
    var parentPin = item.closest(pinSelector);

    // find and delete only the image
    // (leaving behind a colored background)
    var image = parentPin.querySelectorAll('img');
    image.forEach( img => {
      img.remove();
    })

    // Delete the last child of the pin wrapper,
    // which is the ad attribution
    var lastChild = parentPin.lastChild;
    lastChild.remove();

    // TODO: eliminate hover style on griditem
  });
}

// fire once on load
shouldLog && console.log('pinterest detox is running');
detox();