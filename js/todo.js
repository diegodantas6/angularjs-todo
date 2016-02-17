angular.module('todoApp', []).controller('TodoListController', function() {

    var todoList = this;

    todoList.todos = [
        {text:'learn angular', done:true, classe: 'list-group-item-danger'},
        {text:'alterando o original', done:false, classe: 'list-group-item-warning'},
        {text:'build an angular app', done:false, classe: 'list-group-item-warning'}
    ];

    todoList.addTodo = function() {
        var texto = todoList.todoText;
        
        if (texto === undefined)
            texto = '';
        
        if (texto.length === 0) {
            alert('Favor preencher o texto');
        } else {
            todoList.todos.push({text:texto, done:false, classe: 'list-group-item-warning'});
            todoList.todoText = '';
        }        
    };

    todoList.remaining = function() {
        var count = 0;
        angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    todoList.archive = function() {
        var oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) {
                todoList.todos.push(todo);
            }
        });
    };
    
    todoList.onCheck = function(todo) {
        if (todo.done) {
            todo.classe = 'list-group-item-danger';
        } else {
            todo.classe = 'list-group-item-warning';
        }
    };
});
