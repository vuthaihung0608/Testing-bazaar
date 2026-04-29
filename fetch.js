import https from 'https';

https.get('https://api.hypixel.net/v2/skyblock/bazaar', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            const products = Object.keys(parsedData.products);
            const targets = ['PERFECT_AMBER_GEMSTONE', 'WITHER_SHIELD', 'CRIMSON_ESSENCE', 'JACOBS_TICKET', 'SUSPICIOUS_SCRAP'];
            console.log("Found matches:");
            for (let t of targets) {
                 const match = products.find(p => p.includes(t.replace('JACOBS', 'JACOB')) || t.includes(p) || p.includes(t.split('_')[0]));
                 console.log(t, '->', match);
            }
        } catch (e) {
            console.error(e.message);
        }
    });
});
