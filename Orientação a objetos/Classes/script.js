// classses em java script nao é muito utilizado , mas devido a nova atualizaçao do ECMANscript  pode ser implementado

// geito antigo
var Meal = function(food){
    this.food = food
}

Meal.prototype.eat = function(){
    return ' ';
}

// geito Novo
class Meal{
    constructor(food){
        this.food = food;
    }

    eat(){
        return '';
    }
}
