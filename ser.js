const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

let furnitureStore = [
  { id: 1, name: 'שולחן סלון', price: 1200, category: 'שולחנות' },
  { id: 2, name: 'כסא אוכל', price: 250, category: 'כסאות' },
  { id: 3, name: 'ארון קודש', price: 4500, category: 'ארונות' }
];

app.get('/furniture', (req, res) => {
  res.json(furnitureStore);
});

app.get('/furniture/:name', (req, res) => {
  const furnitureName = req.params.name;
  const item = furnitureStore.find(f => f.name === furnitureName);
  
  if (!item) {
      return res.status(404).json({ error: 'הרהיט לא נמצא בחנות' });
  }
  
  res.json(item);
});

//3. הוספת מוצר חדש לחנות
app.post('/furniture', (req, res) => {
        console.log("POST עובד!");

  const { name, price, category } = req.body;
  
  if (!name || !price) {
      return res.status(400).json({ error: 'יש לספק שם ומחיר למוצר' });
  }

  const newItem = {
      id: furnitureStore.length > 0 ? furnitureStore[furnitureStore.length - 1].id + 1 : 1,
      name,
      price,
      category: category || 'כללי'
  };

  furnitureStore.push(newItem);
  res.status(201).json({ message: 'המוצר נוסף בהצלחה', item: newItem });
});

app.put('/furniture/:name', (req, res) => {
  const furnitureName = req.params.name;
  const { price } = req.body;

  if (price === undefined) {
      return res.status(400).json({ error: 'יש לספק מחיר חדש לעדכון' });
  }

  const item = furnitureStore.find(f => f.name === furnitureName);

  if (!item) {
      return res.status(404).json({ error: 'הרהיט לא נמצא בחנות' });
  }

  item.price = price;
  res.json({ message: 'המחיר עודכן בהצלחה', item });
});

app.delete('/furniture/:name', (req, res) => {
  const furnitureName = req.params.name;
  const index = furnitureStore.findIndex(f => f.name === furnitureName);

  if (index === -1) {
      return res.status(404).json({ error: 'הרהיט לא נמצא בחנות' });
  }

  const deletedItem = furnitureStore.splice(index, 1);
  res.json({ message: 'המוצר נמחק בהצלחה', item: deletedItem[0] });
});

//הפעלת השרת
app.listen(PORT, () => {
  console.log(`השרת רץ בהצלחה בכתובת: http://localhost:${PORT}`);
});