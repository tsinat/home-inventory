$(function(){
    $('#save').click(addRoom);
    $('#save2').click(addItem);
    $('.delete').click(deleteRoom)
    $('.delete2').click(deleteItem)
});
function addItem(e){
    e.preventDefault();
    var name = $('#name').val();
    var value = $('#value').val();
    var category =$('#category').val();
    var room = $('#option').val();
    $.post('/items', {
        name:name,
        value:value,
        category:category,
        room:room
    })
    .done(function(data){
        console.log(data)
    })
    .fail(function(error){
        console.log(error);
    })

}
function addRoom(e){
    e.preventDefault();
    var name = $('#name').val();
    $.post('/rooms', {name:name})
        .done(function(data){
            console.log(data);
        })
        .fail(function(error){
            console.log(error);
        })
}
function deleteItem(e){
    var id = e.target.id;
    console.log(id);
    $.ajax({
       url: `/items/${id}`,
       type: 'DELETE',
       success: function(response) {
           $(e.target).closest('tr').remove();
           $('button.delete').attr('id', '')

       }
   });
}
function deleteRoom(e){
    var id = e.target.id;
    console.log(id);
    $.ajax({
       url: `/rooms/${id}`,
       type: 'DELETE',
       success: function(response) {
           $(e.target).closest('tr').remove();
           $('button.delete').attr('id', '')

       }
   });
}
