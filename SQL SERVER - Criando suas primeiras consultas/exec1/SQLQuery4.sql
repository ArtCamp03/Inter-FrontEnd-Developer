/* selecionar tabela */
select * from Clientes

select * from Produtos

/* Inserindo na tabela */
insert Produtos values(2,'caneta','azul',2.5);
insert Produtos values(1,'caneta','vermelha',1.5);
insert Produtos values(3,'caneta','preta',2.0);
insert Produtos values(4,'papel higienico','suave',4.5);
insert Produtos values(5,'cartolina','branca',6.0);

select * from Pedido

insert Pedido(2,'2022-02-25',0,3,7);
insert Pedido(4,getdate,1,2,2);
insert Pedido(2,getdate,0,4,3);
insert Pedido(5,getdate(),1,2,7);
insert Pedido(6,getdate(),0,7,5);

/* se for nula */
select isnull[DataSolicitacao getdate()] ,*
from Clientes

/*usando condicional case */
select * ,
	case
	when TipoPesssoa = 'F' then 'Fisica'
		when TipoPesssoa = 'J' then 'Juridica'
		else 'Pessoa Indefinida'
		end
from Clientes

/*usando conversao */

select * , convert(varchar, DataSolicitacao, 103) 
from Pedido

/*usando condicional case e convertendo getdate() para string*/
select * ,
	case
	when TipoPesssoa = 'F' then 'Fisica'
		when TipoPesssoa = 'J' then 'Juridica'
		else 'Pessoa Indefinida'
		end = convert(vacher, getdate(), 103)
from Clientes