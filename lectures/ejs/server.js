
const express = require('express');
const app = express();

const inventory = [
  { name: 'Candle', qty: 4 },
  { name: 'Cheese', qty: 10 },
  { name: 'Phone', qty: 1 },
  { name: 'Tent', qty: 0 },
  { name: 'Torch', qty: 5 }
]


app.get('/', (req, res) => {
  res.render('home.ejs', {
    msg: "hello world!",
    player: {
        name: "Mohd"
    },
    inventory
  });
});

app.get('/:itemIndex', (req,res) => {
    const index = req.params.itemIndex;
    res.render('show.ejs', {
        item: inventory[index]
    })
})


app.listen(3000, () => {
    console.log('server is working fine!!');
});
