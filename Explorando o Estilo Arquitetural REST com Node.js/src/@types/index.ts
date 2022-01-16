import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();

// configuraçao da aplicaçao
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// configuraçao da rota
app.use(usersRoute);

app.get('./status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'Sucesso Total'});
});

// Inicializaçao do servidor
app.listen(300, () => {
    console.log('Aplicaçao executando na porta 3000 !!');
})