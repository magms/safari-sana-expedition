import https from 'https';

https.get('https://altezzatravel.com/climbing-kilimanjaro', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    require('fs').writeFileSync('kili.html', data);
  });
});
