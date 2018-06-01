module.exports = {


    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(() => res.status(500).send())
    },

    addProduct: (req, res) => {
        const db = req.app.get('db');
        const { photo, name, price } = req.body
        db.add_product([photo, name, price])
            .then(inventory => res.status(200).send(inventory))
            .catch(() => res.status(500).send())
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params
        console.log(req.params)
        //YOU NEED TO SEND INFO IN SQUARE BRACKETS!!
        db.delete_product([id])
            .then(inventory => res.status(200).send(inventory))
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            })
    }
}