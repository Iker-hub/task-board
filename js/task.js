class Task {
  init() {
    this.tasks = null;

    $("#add-task").on("click", addTask);
  }

  addTask() {
    let task = {
      id: this.tasks.lenght + 1,
      title: "Task",
      content: "",
    };

    $("#board").append(
      '<div id="task task-' +
        task.id +
        '">' +
        '<div id="task-content">' +
        '<h3 id="task-title"><u>' +
        task.title +
        "</u><h3/>" +
        '<p id="task-content">' +
        task.content +
        "</p>" +
        "</div>" +
        '<button id="edit-task">Edit</button>' +
        "</div>"
    );
    $("#task").draggable();
    $("#edit-task").on("click", editTask(task.id));

    this.tasks.push(task);
  }

  editTask(id) {
    $("#task-" + id + "#input-title").val($("#task-title").val());
    $("#task-content").replaceWith(
      '<div id="task-content">' +
        '<input id="input-title" placeholder="Task title" value="' +
        $("#task-title").val() +
        '"required>' +
        '<textarea id="textarea-content" placeholder="Task content">' +
        $("#textarea-content").val() +
        "</textarea>" +
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

  cancelEdit() {
    //$("#task").replaceWith("");
  }

  confirmEdit() {
    $("#input-title").replaceWith(
      '<h3 id="task-title"><u>' + $("#input-title").val() + "</u></h3>"
    );
    $("#textarea-content").replaceWith(
      '<p id="task-content">' + $("#textarea-content").val() + "</p>"
    );
    $("#control-edit-buttons").replaceWith(
      '<button id="edit-task">Edit</button>'
    );
    $("#edit-task").on("click", editTask);
  }
}

export { Task };
