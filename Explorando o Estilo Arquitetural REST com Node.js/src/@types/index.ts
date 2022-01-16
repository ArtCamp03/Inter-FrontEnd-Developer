import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.get('./status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'Sucesso Total'});
});

app.listen(300, () => {
    console.log('Aplicaçao executando na porta 3000 !!');
})