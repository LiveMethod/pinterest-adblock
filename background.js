// on navigation, send a single pin message when appropriate
chrome.webNavigation.onCompleted.addListener( () => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {singlePin: true}, response => {
      // no reponse needed right now
    });
  });
  console.log('Sending message to clean single pin page');
}, {url: [{urlContains : 'pinterest.com/pin/'}]});