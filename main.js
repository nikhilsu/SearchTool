searchUrbanDict = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.vocabulary.com/dictionary/" + query});
};

chrome.contextMenus.create({
  title: "Search on Vocabulary.com",
  contexts:["selection"],
  onclick: searchUrbanDict
});
