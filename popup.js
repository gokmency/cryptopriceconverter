document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings
    chrome.storage.sync.get({
        defaultCurrency: 'USD',
        showUnitPrice: true,
        enableContextMenu: true,
        showNotifications: true
    }, (items) => {
        document.getElementById('defaultCurrency').value = items.defaultCurrency;
        document.getElementById('showUnitPrice').checked = items.showUnitPrice;
        document.getElementById('enableContextMenu').checked = items.enableContextMenu;
        document.getElementById('showNotifications').checked = items.showNotifications;
    });

    // Save settings
    document.getElementById('saveSettings').addEventListener('click', () => {
        const settings = {
            defaultCurrency: document.getElementById('defaultCurrency').value,
            showUnitPrice: document.getElementById('showUnitPrice').checked,
            enableContextMenu: document.getElementById('enableContextMenu').checked,
            showNotifications: document.getElementById('showNotifications').checked
        };

        chrome.storage.sync.set(settings, () => {
            const status = document.getElementById('status');
            status.textContent = 'Settings saved!';
            setTimeout(() => {
                status.textContent = '';
            }, 2000);

            // Notify background script about settings change
            chrome.runtime.sendMessage({ type: 'settingsUpdated', settings });
        });
    });
});
