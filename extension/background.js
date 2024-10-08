let currentSelectedText = '';  // Variable to temporarily store selected text

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendSelectedText") {
        // Save the selected text to memory
        currentSelectedText = message.text;
        console.log('Received selected text in background.js:', currentSelectedText);
    }
    
    // Handle request from the popup to get the selected text
    if (message.action === "getSelectedText") {
        sendResponse({ selectedText: currentSelectedText });
        console.log('Sent selected text to popup (background.js)', currentSelectedText);
    } else {
        sendResponse({"error": "Invalid action at background service"});
    }

    return true;  // Keep the messaging channel open for async operations
});
