import fs from 'fs';

fs.readFile('ingredients.json', "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  try {
    const jsonData = JSON.parse(data);
    const RCP = jsonData.COOKRCP01.row[0].RCP_PARTS_DTLS;
    
    const RCPsplit = RCP.split("\n");
    console.log(RCPsplit);
    // console.log(RCPsplit[1])
  } catch (err) {
    console.error(err);
  }
});