// retorna os nomes dos menbros de um Map  qe tem no sistema

function getAdmins(){
    let admins = [];

    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Fernando', 'Admin');
usuarios.set('Jorge', 'User');

console.log(getAdmins(usuarios));
