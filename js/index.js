function addTask() {
  $("#board").append(
    '<div id="task">' +
      '<div id="task-content">' +
      '<h3 id="task-title"><u>Task</u><h3/>' +
      "</div>" +
      '<button id="edit-task">Edit</button>' +
      "</div>"
  );
  $("#task").draggable();
  $("#edit-task").on("click", editTask);
}
$("#add-task").on("click", addTask);

function editTask() {
  $("#input-title").val($("#task-title").val());
  $("#task-content").replaceWith(
    '<div id="task-content">' +
      '<input id="input-title" placeholder="Task title" required>' +
      '<textarea id="textarea-content" placeholder="Task content"></textarea>' +
      "</div>"
  );

  $("#edit-task").replaceWith(
    '<div id="control-edit-buttons">' +
      '<button id="cancel-edit">Cancel</button>' +
      '<button id="confirm-edit">Confirm</button></div>'
  );
  $("#cancel-edit").on("click", cancelEdit);
  $("#confirm-edit").on("click", confirmEdit);
}

function cancelEdit() {
  //$("#task").replaceWith("");
}

function confirmEdit() {}
