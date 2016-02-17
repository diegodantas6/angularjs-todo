angular.module('todoApp', []).controller('ClienteController', function() {

    var cliente = this;
    
    cliente.jovem = {
        id: 0,
        nome: '',
        cpf: ''
    };

    cliente.lista = [
        {id: 1, nome: 'Jovem 1', cpf: '123'},
        {id: 2, nome: 'Jovem 2', cpf: '234'},
        {id: 3, nome: 'Jovem 3', cpf: '345'}
    ];

    cliente.salvar = function() {
        
        cliente.lista.push(cliente.jovem);
        
        //cliente.jovem = null;
    };

    cliente.visualizar = function(jovem) {

        //cliente.jovem = jovem;
        
        angular.copy(jovem, cliente.jovem);
        
        $('#btnSalvar').hide();
    };

    cliente.alterar = function(jovem) {
        
        //cliente.jovem = jovem;
        
        angular.copy(jovem, cliente.jovem);
        
        $('#btnSalvar').show();
    };

    cliente.excluir = function(jovem) {
        
        var index = cliente.lista.indexOf(jovem);
        
        cliente.lista.splice(index, 1);
    };
    
});
