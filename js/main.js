import TableCsv from './TableCsv.js'

// const tableRoot = document.querySelector('#csvRoot');
// const tableCsv = new TableCsv(tableRoot);
const tableRoot = document.querySelector("#csvRoot");
const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCsv(tableRoot);
// tableCsv.update()


// tableCsv.setHeader(['Id','Fname','Lname','Age'])
// tableCsv.update([
//     ['10','Mamba','Mwisho','30'],
//     ['70','Mamba','Mwisho','30'],
//     ['40','Mamba','Mwisho','30']
// ]
// ,['Id','Fname','Lname','Age']
//     )
// tableCsv.setBody([
    
//     ['1','Mamba','Mwisho','30'],

//     ['7','Mamba','Mwisho','30'],
//     ['4','Mamba','Mwisho','30']

// ]
//     )
// csvFileInput.addEventListener("change", (e) => {
//     Papa.parse(csvFileInput.files[0], {
//       delimiter: ",",
//       skipEmptyLines: true,
//       complete: (results) => {
//         console.log(results);
//         tableCsv.update(results.data.slice(1), results.data[0]);
//       }
//     });
//   }); 
//   csvFileInput.addEventListener("change", (e) => {
//   Papa.parse(csvFileInput.files[0],{
// 	download: true,
//     worker: true,
//     delimiter: ",",
//     skipEmptyLines: true,
// 	step: function(results) {
// 		console.log("Row:", results.data);
        
// 	},
// 	complete: (results) =>{
// 		console.log("All done!");
//         tableCsv.update(results.data.slice(1), results.data[0]);
// 	}
// });
//   });

// Newer
// Assuming csvFileInput is defined and refers to the file input element in your HTML

csvFileInput.addEventListener("change", (e) => {
    const file = csvFileInput.files[0];
    Papa.parse(file, {
      worker: true,
      delimiter: ",",
      skipEmptyLines: true,
      step: function (results) {
        // console.log(results.data);
        tableCsv.update(results.data.slice(1), results.data[0]);
      },
    });
  });
  
// csvFileInput.addEventListener("change", (e) => {
//     Papa.parse(csvFileInput.files[0],{
//     worker: true,
//     delimiter: ",",
//     skipEmptyLines: true,
//     step: function(results) {
//         console.log(results.data);
//         tableCsv.update(results.data.slice(1), results.data[0]);
//     }
// });
// });
//   self.addEventListener('message', function(e) {
//     console.log('worker is running');

//     var file = e.data.file;
//     var reader = new FileReader();

//     reader.onload = function (fileLoadedEvent) {
//         console.log('file loaded, posting back from worker');

//         var textFromFileLoaded = fileLoadedEvent.target.result;

//         // Post our text file back from the worker
//         self.postMessage(textFromFileLoaded);
//     };

//     // Actually load the text file
//     reader.readAsText(file, "UTF-8");
// }, false);