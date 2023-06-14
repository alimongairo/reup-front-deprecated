const fs = require('fs');
const productList = [];

for (let i = 0; i < 10; i++) {
  productList.push({
    title: 'Блузка женская “Лэйди”',
    id: i,
    brand: 'Befree',
    price: 499,
    imgSource: [],
    like: i % 3 === 0,
  });
}

fs.writeFile('db.json', '', (err) => {
  if (err) {
    console.log(err);
  }
});

try {
  fs.writeFileSync('db.json', JSON.stringify({ productList }));
  console.log('migration done');
} catch (error) {
  console.log(error);
}
