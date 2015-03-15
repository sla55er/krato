define(
[
    'underscore',
    'jquery',
    'backbone',
    'swal',
],
function (_, $, Backbone, swal)
{
    var PopupHelper = {

        confirmation: function(callback)
        {
            swal({
                title: "You are about to delete this building. Are you sure?",
                //text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#00AF4D",
                confirmButtonText: "Delete",
                closeOnConfirm: false
            }, function () {
                callback();
                swal("Deleted!", "The building has been deleted.", "success");
            });
        }
    };

    return PopupHelper;
});