const express = require('express')
const app = express()

let port = 3005
    /* WURZEL */
    app.get('/wurzel/:num', (req, res) => {
        const num = parseFloat(req.params.num)
        console.log(`Received: Number1:${req.params.num}`)
        let result = ""
        if (isNaN(num)) {
          console.log('Invalid DataType in Request')
          res.send('<h1>Invalid DataType</h1>')
        } else {
          result = Math.sqrt(num)
        }
        res.send({result})
      })

/*Service*/
app.listen(port, () => {
    console.log(`Monolater service started on port ${port}`)
})