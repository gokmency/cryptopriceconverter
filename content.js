// Supported cryptocurrencies and their CoinGecko IDs
const COINS = {
    // Top Tier (1-10)
    'BTC': 'bitcoin',
    'BITCOIN': 'bitcoin',
    'XBT': 'bitcoin',
    'ETH': 'ethereum',
    'ETHEREUM': 'ethereum',
    'USDT': 'tether',
    'TETHER': 'tether',
    'BNB': 'binancecoin',
    'BINANCE': 'binancecoin',
    'SOL': 'solana',
    'SOLANA': 'solana',
    'XRP': 'ripple',
    'RIPPLE': 'ripple',
    'USDC': 'usd-coin',
    'ADA': 'cardano',
    'CARDANO': 'cardano',
    'AVAX': 'avalanche-2',
    'AVALANCHE': 'avalanche-2',
    'DOGE': 'dogecoin',
    'DOGECOIN': 'dogecoin',

    // Second Tier (11-50)
    'DOT': 'polkadot',
    'POLKADOT': 'polkadot',
    'TRX': 'tron',
    'TRON': 'tron',
    'MATIC': 'matic-network',
    'POLYGON': 'matic-network',
    'DAI': 'dai',
    'TON': 'the-open-network',
    'LINK': 'chainlink',
    'CHAINLINK': 'chainlink',
    'SHIB': 'shiba-inu',
    'SHIBAINU': 'shiba-inu',
    'LTC': 'litecoin',
    'LITECOIN': 'litecoin',
    'BCH': 'bitcoin-cash',
    'BITCOINCASH': 'bitcoin-cash',
    'ATOM': 'cosmos',
    'COSMOS': 'cosmos',
    'UNI': 'uniswap',
    'UNISWAP': 'uniswap',
    'XMR': 'monero',
    'MONERO': 'monero',
    'ETC': 'ethereum-classic',
    'ETHEREUMCLASSIC': 'ethereum-classic',
    'OKB': 'okb',
    'ICP': 'internet-computer',
    'FILECOIN': 'filecoin',
    'FIL': 'filecoin',
    'NEAR': 'near',
    'NEARPROTOCOL': 'near',
    'VET': 'vechain',
    'VECHAIN': 'vechain',
    'APT': 'aptos',
    'APTOS': 'aptos',
    'GRT': 'the-graph',
    'GRAPH': 'the-graph',
    'HBAR': 'hedera-hashgraph',
    'HEDERA': 'hedera-hashgraph',

    // Third Tier (51-100)
    'ALGO': 'algorand',
    'ALGORAND': 'algorand',
    'QNT': 'quant-network',
    'QUANT': 'quant-network',
    'STX': 'stacks',
    'STACKS': 'stacks',
    'EGLD': 'elrond-erd-2',
    'ELROND': 'elrond-erd-2',
    'SAND': 'the-sandbox',
    'SANDBOX': 'the-sandbox',
    'THETA': 'theta-token',
    'MANA': 'decentraland',
    'DECENTRALAND': 'decentraland',
    'AAVE': 'aave',
    'IMX': 'immutable-x',
    'IMMUTABLE': 'immutable-x',
    'XTZ': 'tezos',
    'TEZOS': 'tezos',
    'CRO': 'crypto-com-chain',
    'CRYPTOCOM': 'crypto-com-chain',
    'NEO': 'neo',
    'FTM': 'fantom',
    'FANTOM': 'fantom',
    'FLOW': 'flow',
    'KCS': 'kucoin-shares',
    'KUCOIN': 'kucoin-shares',
    'IOTA': 'iota',
    'MIOTA': 'iota',
    'BSV': 'bitcoin-sv',
    'BITCOINSV': 'bitcoin-sv',
    'CHZ': 'chiliz',
    'CHILIZ': 'chiliz',
    'XEC': 'ecash',
    'ECASH': 'ecash',
    'LUNC': 'terra-luna',
    'TERRACLASSIC': 'terra-luna',
    'HT': 'huobi-token',
    'HUOBI': 'huobi-token',

    // Fourth Tier (101-150)
    'ZEC': 'zcash',
    'ZCASH': 'zcash',
    'MKR': 'maker',
    'MAKER': 'maker',
    'ENJ': 'enjincoin',
    'ENJIN': 'enjincoin',
    'KAVA': 'kava',
    'ONE': 'harmony',
    'HARMONY': 'harmony',
    'HOT': 'holotoken',
    'HOLO': 'holotoken',
    'BAT': 'basic-attention-token',
    'BASICATTENTION': 'basic-attention-token',
    'WAVES': 'waves',
    'AR': 'arweave',
    'ARWEAVE': 'arweave',
    'COMP': 'compound-governance-token',
    'COMPOUND': 'compound-governance-token',
    'ZIL': 'zilliqa',
    'ZILLIQA': 'zilliqa',
    'DASH': 'dash',
    'DCR': 'decred',
    'DECRED': 'decred',
    'YFI': 'yearn-finance',
    'YEARN': 'yearn-finance',
    'MINA': 'mina-protocol',
    'MINAPROTOCOL': 'mina-protocol',
    'XEM': 'nem',
    'NEM': 'nem',
    'CELO': 'celo',

    // Fifth Tier (151-200)
    'SNX': 'synthetix-network-token',
    'SYNTHETIX': 'synthetix-network-token',
    'LRC': 'loopring',
    'LOOPRING': 'loopring',
    'QTUM': 'qtum',
    'ICX': 'icon',
    'ICON': 'icon',
    'OMG': 'omisego',
    'OMISEGO': 'omisego',
    'ANKR': 'ankr',
    'RVN': 'ravencoin',
    'RAVENCOIN': 'ravencoin',
    'ZRX': '0x',
    'ZEROX': '0x',
    'ONT': 'ontology',
    'ONTOLOGY': 'ontology',
    'BAL': 'balancer',
    'BALANCER': 'balancer',
    'IOST': 'iost',
    'NANO': 'nano',
    'DGB': 'digibyte',
    'DIGIBYTE': 'digibyte',
    'SC': 'siacoin',
    'SIACOIN': 'siacoin',
    'STORJ': 'storj',
    'STORAGE': 'storj',
    'STEEM': 'steem',
    'BTG': 'bitcoin-gold',
    'BITCOINGOLD': 'bitcoin-gold',
    'REN': 'republic-protocol',
    'REPUBLIC': 'republic-protocol',
    'LSK': 'lisk',
    'LISK': 'lisk'
};

// Initialize user settings with defaults
let userSettings = {
    defaultCurrency: 'USD',
    showUnitPrice: true,
    enableContextMenu: true,
    showNotifications: true
};

// Load user settings
chrome.storage.sync.get(['defaultCurrency', 'showUnitPrice', 'enableContextMenu', 'showNotifications'], (result) => {
    userSettings = { ...userSettings, ...result };
});

// Listen for settings changes
chrome.storage.onChanged.addListener((changes) => {
    for (let [key, { newValue }] of Object.entries(changes)) {
        userSettings[key] = newValue;
    }
});

// Initialize context menu
function initializeContextMenu() {
    chrome.runtime.sendMessage({ action: 'createContextMenu' });
}

// Handle context menu initialization
if (userSettings.enableContextMenu) {
    initializeContextMenu();
}

// Create and manage popup
function createPopup(text, rect) {
    // Remove any existing popups
    const existingPopup = document.querySelector('.crypto-converter-popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    const popup = document.createElement('div');
    popup.className = 'crypto-converter-popup loading';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="loading-spinner"></span>
            <span class="loading-text">Converting...</span>
        </div>
    `;
    
    // Add popup to body
    document.body.appendChild(popup);

    // Calculate scroll position
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Get popup dimensions
    const popupRect = popup.getBoundingClientRect();

    // Calculate initial position (above the text)
    let posX = rect.left + scrollX;
    let posY = rect.top + scrollY - popupRect.height - 10;

    // Adjust position if it would go off-screen
    if (posY < scrollY) {
        // Position below if not enough space above
        posY = rect.bottom + scrollY + 10;
    }

    // Adjust horizontal position if needed
    if (posX + popupRect.width > window.innerWidth + scrollX) {
        posX = rect.right + scrollX - popupRect.width;
    }
    if (posX < scrollX) {
        posX = rect.left + scrollX;
    }

    // Set position
    popup.style.left = `${posX}px`;
    popup.style.top = `${posY}px`;

    // Add show class after a brief delay for animation
    requestAnimationFrame(() => {
        popup.classList.add('show');
    });

    return popup;
}

// Fetch cryptocurrency price
async function fetchPrice(coinId, currency) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${currency}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data[coinId][currency];
    } catch (error) {
        console.error('Error fetching price:', error);
        throw error;
    }
}

// Handle crypto conversion
async function handleCryptoConversion(text, rect) {
    const regex = /^(\d*\.?\d+)\s*([a-zA-Z]+(?:\s*[a-zA-Z-]+)*)$/i;
    const match = text.trim().match(regex);
    
    if (!match) return;

    const [, amountStr, coinSymbol] = match;
    const amount = parseFloat(amountStr);
    const coin = coinSymbol.toUpperCase().replace(/\s+/g, '');

    const coinId = COINS[coin];
    if (!coinId) return;

    const popup = createPopup(text, rect);

    try {
        const price = await fetchPrice(coinId, userSettings.defaultCurrency.toLowerCase());
        const total = amount * price;
        
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: userSettings.defaultCurrency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        let popupContent = `
            <div class="popup-content success">
                <div class="converted-amount">${formatter.format(total)}</div>
                ${userSettings.showUnitPrice ? 
                    `<div class="unit-price">
                        <span class="coin-name">${coin}</span>
                        <span class="price-value">${formatter.format(price)}</span>
                    </div>` : 
                    ''}
            </div>`;

        popup.innerHTML = popupContent;
        popup.className = 'crypto-converter-popup show';

        // Remove popup after delay
        setTimeout(() => {
            popup.classList.add('hide');
            setTimeout(() => popup.remove(), 300);
        }, 4000);

    } catch (error) {
        popup.innerHTML = `
            <div class="popup-content error">
                <div class="error-icon">⚠️</div>
                <div class="error-message">Failed to fetch price</div>
            </div>`;
        popup.className = 'crypto-converter-popup error show';
        
        setTimeout(() => {
            popup.classList.add('hide');
            setTimeout(() => popup.remove(), 300);
        }, 3000);
    }
}

// Handle text selection
document.addEventListener('mouseup', (event) => {
    const selection = window.getSelection();
    if (!selection.toString().trim()) return;

    const text = selection.toString().trim();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    handleCryptoConversion(text, rect);
});

// Handle context menu clicks
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'convertCrypto') {
        const selection = window.getSelection();
        if (!selection.toString().trim()) return;

        const text = selection.toString().trim();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        handleCryptoConversion(text, rect);
    }
});
