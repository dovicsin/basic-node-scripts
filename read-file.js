const fs = require('fs')

try {
    // Az első paraméter a fájl elérése majd megadjuk, hogy milyen a karakter kódolása a beolvasandó fájlnak
    const data = fs.readFileSync('/fájl teljes elérése/teszt.txt', 'utf8')
	
    //Adatok kiírása a consolra, hogy lássuk mi található benne
    console.info(data)
	
} catch (err) {
	// Fontos, hogy a try esetében ide a catch ágba jön a futás hiba esetén, ha egy ilyen hibát elkaptunk, akkor azt irassuk is ki.
	console.error(err)
}
