import https from 'https';

https.get('https://api.hypixel.net/v2/skyblock/bazaar', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            const products = Object.keys(parsedData.products);
            console.log(products.filter(p => p.includes('JACOB') || p.includes('WITHER_SHIELD') || p.includes('ESSENCE') || p.includes('AMBER_GEM') || p.includes('PERIDOT_GEM')));
        } catch (e) {
            console.error(e.message);
        }
    });
});
