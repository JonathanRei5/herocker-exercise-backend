# Exercícios do dia 25.2
_Clique [aqui](https://github.com/JonathanRei5/trybe-exercicios/tree/main/modulo-03-desenvolvimento-back-end/bloco-25-deployment/dia-02-deploy-docker-e-heroku) para ir para o repositório de exercícios._

Link para a aplicação https://heroku-backend-123.herokuapp.com/users

### Comandos utilizados:

Cria um _app_ Heroku
```bash
heroku create heroku-backend-123 --remote heroku-prod
```

Altera a _stack_
```bash
heroku stack:set container
```

Executa as _migrations_
```bash
heroku run npx sequelize db:migrate
```

Executa os _seeders_
```bash
heroku run npx sequelize db:seed:all
```

Faz _deploy_
```bash
git push heroku-prod
```

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/)
