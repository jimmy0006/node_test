const app = require('./index')

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
})

//npx artillery quick --count 100 -n 50 http://localhost:3000
//npx artillery run loadtest.json