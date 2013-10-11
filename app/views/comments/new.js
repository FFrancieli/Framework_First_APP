<% modal_content = j(render partial: 'comments/modal', locals:{comment: @comment}) %>
$("#modal-container").html("<%= j(render partial: 'comments/modal', locals:{comment: @comment}) %>");
$("#modal-comments").modal();