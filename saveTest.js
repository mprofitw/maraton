const colors = [
    {
        id: 1,
        name: 'ipsum',
        country: 'us',
        color: 'blue',
    },
    {
        id: 2,
        name: 'ipsum',
        country: 'us',
        color: 'red',
    },
    {
        id: 3,
        name: 'dolor',
        country: 'gb',
        color: 'green',
    },
    {
        id: 4,
        name: 'amet',
        country: 'pl',
        color: 'white',
    },
];


const save = () => {
    const fs = require('fs');

// convert JSON object to a string
    const data = JSON.stringify(colors);

// write file to disk
    fs.writeFile('testowy.json', data, 'utf8', (err) => {

        if (err) {
            console.log(`Error writing file: ${err}`);
        } else {
            console.log(`File is written successfully!`);
        }

    });
}

async function saveToFile() {
    console.log('Zapisuje do pliku...')
    await setTimeout(2000)
    console.log('Zapisano ...!')
}
(async ()=>{
await saveToFile()
    await save()
    console.log('Zapisano!')
})()

