$("#modal-container").html("<%= j(render partial: 'comments/modal', locals:{comment: @comment}) %>");
$("#modal-comments").modal();