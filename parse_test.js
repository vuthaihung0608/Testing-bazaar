const msg = "[Bazaar] Sell Offer Setup! 14x Suspicious Scrap for 2,950,766 coins.";
const prefix = "[Bazaar] Sell Offer Setup! ";
if (msg.startsWith(prefix)) {
    const rest = msg.substring(prefix.length);
    const m = rest.match(/^([\d,]+)x (.+) for ([\d,]+(\.\d+)?) coins\.$/);
    if (m) {
        let amt = parseInt(m[1].replace(/,/g, ''));
        let item = m[2];
        let total = parseFloat(m[3].replace(/,/g, ''));
        console.log(amt, item, total, total/amt);
    }
}
