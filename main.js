$(document).ready(function(){
    
    $('form').on('submit', function(e) {
        e.preventDefault(); 

        const tarefaPendente = $('#linhas-atividades').val(); 
        if (tarefaPendente) {
            
            const tarefa = $('<li></li>').text(tarefaPendente);
            
            
            tarefa.on('click', function() {
                $(this).toggleClass('completed');
            });

          
            $('#tarefa').append(tarefa);
        }

        
        $('#linhas-atividades').val('');
    });

    
    $('#cancelar').on('click', function() {
        $('#linhas-atividades').val('');
    });
});
