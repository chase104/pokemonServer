const express = require('express')

const app = express()

app.use(express.static('public'));

app.get("/get_data", (req, res) => {
    let classes = [
        {name: "cohort 48"},
        {name: "cohort 49"}
    ]
    res.send(classes);
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})

