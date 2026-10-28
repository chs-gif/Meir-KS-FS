import express from 'express';
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

app.listen(PORT, () => {
    console.log(`השרת פועל בכתובת http://localhost:${PORT}`);
});
