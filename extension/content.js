console.log("Gmail Summarizer content script loaded");

document.addEventListener('selectionchange', () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        console.log("Text selected:", selectedText);
        // Send the selected text directly to the background script
        chrome.runtime.sendMessage({ action: "sendSelectedText", text: selectedText });
    }
});
