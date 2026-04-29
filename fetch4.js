import https from 'https';

https.get('https://sky.coflnet.com/api/flip/bazaar/spread', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData.slice(0, 2));
        } catch (e) {
            console.error(e.message);
        }
    });
});
