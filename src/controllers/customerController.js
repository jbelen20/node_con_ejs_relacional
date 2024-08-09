const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if(err){
                res.json(err)
                //ver manejo de errores con next
            }
            res.render('customers', {
                data: customers
            })
        })
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ? ',[data], (err, customer) => {
            console.log(data[1]);
            res.send('worksss');
        })
    })
};


module.exports = controller;