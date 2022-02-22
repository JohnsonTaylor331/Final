$('#submit').on('click', function(e){7
    e.preventDefault(),
    
    $('.commentsContainer').prepend(`
    <div class="commentsContainer1">
        <p>${$('#user').val()}</p>
        <p>${$('#comment').val()}</p>
        <button type="button" id="delete">Delete</button>
        <button type="button" id="edit">Edit</button>
    </div`)
    
})

$('.commentsContainer').on('click','#delete', function(){
    let commentContainer = $(this).parents()[0];

    $(commentContainer).remove();
    
    
})
$('.commentsContainer').on('click', '#edit', function(){
    let edit = $(this).prev();
    let edit2 = $(edit).prev();
    $(edit2).remove();
    $('.commentsContainer1').append('<input  placeholder="Comment">')
})