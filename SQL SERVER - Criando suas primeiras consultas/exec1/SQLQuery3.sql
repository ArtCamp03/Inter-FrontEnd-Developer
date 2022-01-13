/* seleciona todas as tabelas */
select * from Clientes

/* seleciona a tabela Clientes cujo atributo Nome tenha o atributo TipoPessoa igual a 'F' 
*/
select Nome 
from Clientes
where TipoPessoa = 'F';

/* fazendo update */
update Clientes 
set Codigo = 7, 
	Nome = 'Luiz'
where TipoPessoa = 'F';

/* fazendo delete todos os registros da tabela clientes*/
delete from Clientes

/* fazendo delete todos os registros da tabela clientes cuja satisfaça a condiçao where*/
delete from Clientes
where Codigo in(5,7);

/* selecionar cliente especifico */
select * from Clientes
where Codigo = 1 
AND TipoPessoa = 'F'


/*
insert into Clientes (Codigo, Nome, TipoPessoa) values (1,'Artur','F');

insert Clientes (Codigo, Nome, TipoPessoa) values (5,'Joao','F');

insert Clientes values (3,'Maria','J');

insert Clientes values (8,'Maria','F'), (7,'Antonio','J');
*/