module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('Você está na rota 3000 ultilizando um GET'));

    app.post('/atendimento', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota atendimento e está realizando um POST')
    })

}