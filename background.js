// Initialize context menu
function initializeContextMenu() {
    chrome.contextMenus.create({
        id: 'convertCrypto',
        title: 'Convert to USD',
        contexts: ['selection']
    });
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'convertCrypto') {
        chrome.tabs.sendMessage(tab.id, {
            type: 'convertSelection',
            text: info.selectionText
        });
    }
});

// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    // Initialize default settings
    chrome.storage.sync.get({
        defaultCurrency: 'USD',
        showUnitPrice: true,
        enableContextMenu: true,
        showNotifications: true
    }, (items) => {
        if (items.enableContextMenu) {
            initializeContextMenu();
        }
    });
});

// Listen for messages from popup or content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'settingsUpdated') {
        // Update context menu based on settings
        if (message.settings.enableContextMenu) {
            initializeContextMenu();
        } else {
            chrome.contextMenus.removeAll();
        }
    }
});
