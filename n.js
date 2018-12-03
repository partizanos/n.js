console.log(
`
#########
#       #
# The N #
#       #
#########
`);

var words = []
process.argv.forEach(function (val, index, array) {
  if(index >1) {
  	console.log(index + ': ' + val);
    words.push(val);
  }
});
var search = words.join(" ")
var links = `
	https://www.google.ch
		/search?q=
			`+search+`
		&oq=`+search+`

	`
var command = "chromium-browser '"+links+"'"; 
console.log("Command: ", command)
require('child_process')
	.exec( command ,
	   (error, stdout, stderr) => {
		 console.log(`stdout: ${stdout}`);
		 console.log(`stderr: ${stderr}`);
		 if (error !== null) 
		 	console.log(
		  `exec error: ${error}`);
	}) 
