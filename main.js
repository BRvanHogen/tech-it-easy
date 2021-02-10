// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


function countInventoryToSell (televisions) {
  console.log("SALES", televisions);
  let totalCount = 0;

  for (const television of televisions) {
    console.log("television in loop", television.originalStock, television.sold);

    const toSellOfThisType = television.originalStock - television.sold;
    console.log("to sell of this type: ", toSellOfThisType);
    totalCount = totalCount + toSellOfThisType;
  }
  console.log("Total count:", totalCount);
  return totalCount;
}

const totalCount = countInventoryToSell(inventory);



const numberToSell = document.getElementById('number-to-sell');
numberToSell.textContent = totalCount;

console.log(numberToSell);


// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

const tvNames = inventory.map((name) => {
  return name.brand + " " + name.name;
});
console.log(tvNames);

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.


const soldOut = inventory.filter((television) =>{
  return television.originalStock === television.sold;
});

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.

const ambiLight = inventory.filter((hasAmbiLight)=> {
  return hasAmbiLight.options.ambiLight === true;
})

console.log(ambiLight);

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

const priceSortLowToHigh = inventory.sort((a, b)=> {
  return a.price - b.price});

console.log(priceSortLowToHigh);

// Opdracht 3
// Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren
// van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.


const tvPrices = inventory.map((price) => {
  return price.price * (price.originalStock - price.sold);
});
console.log(tvPrices);

const totalRevenue = tvPrices.reduce(function (a, b)
{ return a + b}, 0);

console.log(totalRevenue);

const totalIntendedRevenueInCurrency = document.getElementById('total-intended-revenue-in-currency');
totalIntendedRevenueInCurrency.textContent = totalRevenue;

console.log(totalIntendedRevenueInCurrency);

//     Opdracht 3b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient
//     hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

const revenueSoFarAsArray = inventory.map((money) => {
  return money.sold * money.price;
});
console.log(revenueSoFarAsArray);

const sumOfRevenueSoFar = revenueSoFarAsArray.reduce(function (a, b)
{return a + b}, 0);
console.log(sumOfRevenueSoFar);

const sumOfRevenuePostFred = sumOfRevenueSoFar - 8803;
console.log(sumOfRevenuePostFred);

const totalRevenueSoFar = document.getElementById('total-sold-in-currency');
totalRevenueSoFar.textContent = sumOfRevenuePostFred;

console.log(sumOfRevenuePostFred);


// Opdracht 4
// Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit.
//     Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

const tvType1 = document.createElement('p');
dashboard.appendChild(tvType1);
tvType1.textContent = inventory[0].brand + " " + inventory[0].name;

const tvType2 = document.createElement('p');
dashboard.appendChild(tvType2);
tvType2.textContent = inventory[1].brand + " " + inventory[1].name;


// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
//     Maak een functie die één tv-object als parameter verwacht en de naam op de volgende
// manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV
// of NIKKEI NH3216SMART - HD smart TV.
//     Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.

const tvObjectsFormatted = inventory.map((format) =>{
  return format.brand + " " + format.type + " " + format.name;
})
console.log(tvObjectsFormatted);

function nameFormatter(arrayPosition) {
console.log(tvObjectsFormatted[arrayPosition]);}

nameFormatter(5);

// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
//     Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar
// de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere
// tv zou kunnen gebruiken.

const tvPriceFormatted = function priceFormatter(price) {
  return ('\u20AC') + price + ",-";
}
console.log(tvPriceFormatted(379));

// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes
// van één tv in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de
// groottes op de volgende manier samenvoegt:
//     [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches
// ([schermgrootte omgerekend]cm) etc.
//     Dus een input van [32] geeft
// 32 inch (81 cm)
// en een input van [43, 50, 55, 58] geeft
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken,
//     zowel voor tvs met maar één schermgrootte als met tientallen schermgroottes.

//de functie:
// -- [x] we maken een screen-sizes array met map
// -- [ ] deze variabele roepen we aan als parameter in een functie
// -- [ ] de functie rekent de input om naar centimeter en maakt een string van het geheel
// -- [ ] dit moeten er zelfs tientallen kunnen zijn

const screenSizesArray = inventory.map((television) =>{
  return television.availableSizes;
})

console.log(screenSizesArray);

console.log(screenSizesArray[0]);

function screenSizeConvertFormat(size) {
  return size + " inch" + "(" + Math.round(size * 2.54) + "cm)";
}


for (let i = 0; i < screenSizesArray.length; i++) {
  const television = screenSizesArray[i];
  console.log(television);
  const sizeString = screenSizeConvertFormat(television);
  console.log(sizeString);
}
