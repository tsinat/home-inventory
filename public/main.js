$(function(){
    $('#save').click(addRoom);
    $('.delete').click(deleteRoom)
    $('.delete2').click(deleteItem)
});
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
