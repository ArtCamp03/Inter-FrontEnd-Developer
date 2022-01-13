/* Chave primaria */
select *
from Clientes 
alter table Clientes add constraints pk_cliente primary key(Codigo)

select * from Clientes