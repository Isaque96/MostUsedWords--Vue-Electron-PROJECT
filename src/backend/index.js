const { ipcMain } = require('electron');
const pathsToRows = require('./pathsToRow');

ipcMain.on('process-subtitles', (event, paths) => {
  console.log(paths);

  pathsToRows(paths).then(rows => console.log(rows)).then(() => {
    event.reply('process-subtitles', [    
      { name: "you", amount: 900 },
      { name: "he", amount: 853 },
      { name: "i", amount: 1234 },  
      { name: "she", amount: 876 },  
      { name: "our", amount: 133 },  
      { name: "house", amount: 23 },  
    ])    
  })
});