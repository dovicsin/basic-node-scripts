const fs = require('fs')

// Az első paraméter a fájl neve
const file = "data.txt";

for (let i = 1; i < 6; i++) {
  fs.writeFileSync(file, i +". sor \n",
	{
  	encoding: "utf8",
  	flag: "a+",
  	mode: 0o666
	});
	console.log("Az "+i+". sor kiírva");
}

console.log("Összes sor kiírva");
