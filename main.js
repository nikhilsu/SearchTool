searchVocabDotComFromContextMenu = function(word){
	var query = word.selectionText;
	openVocabularDotComTab(query);
};

function openVocabularDotComTab(wordToSearch){
	chrome.tabs.create({url: "https://www.vocabulary.com/dictionary/" + wordToSearch});
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('submit').addEventListener('click',function(){
		var searchText = document.getElementById('searchBox').value;
		openVocabularDotComTab(searchText);
	});
});

chrome.contextMenus.create({
	title: "Search on Vocabulary.com",
	contexts:["selection"],
	onclick: searchVocabDotComFromContextMenu
});