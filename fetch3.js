import https from 'https';

https.get('https://sky.coflnet.com/api/flip/bazaar/spread', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData.map(d => ({id: d.id, name: d.name, sell: d.sell})).slice(0, 10));
        } catch (e) {
            console.error(e.message);
        }
    });
});
