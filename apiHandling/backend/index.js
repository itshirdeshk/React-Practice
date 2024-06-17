import express from "express"

const app = express();

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Book',
            price: 20
        },
        {
            id: 2,
            name: 'Bike',
            price: 20000
        },
        {
            id: 3,
            name: 'Car',
            price: 2000000
        },
    ]

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.json(filterProducts)
        return
    }

    setTimeout(() => {
        res.json(products)
    }, 3000)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})