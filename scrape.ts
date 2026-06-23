import https from 'https';

https.get('https://altezzatravel.com/tanzania-safari', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // look for Next.js data or something similar
    // We can also extract the packages using a regex
    const matches = data.match(/<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/);
    if (matches && matches[1]) {
      const parsed = JSON.parse(matches[1]);
      console.log("Found NEXT DATA");
      // Need to find where the safari packages are in the parsed data
      // For now let's just write the data to a file so we can view it
      const fs = require('fs');
      fs.writeFileSync('next_data.json', JSON.stringify(parsed, null, 2));
    } else {
      console.log("No NEXT DATA found.");
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
