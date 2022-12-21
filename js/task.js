let tasks = new Array();
$("#add-task").on("click", addTask);

function addTask() {
  let task = {
    id: Math.floor(Math.random() * 999),
    title: "",
    content: "",
  };
  let taskColor = ["task-blue", "task-pink", "task-yellow"];
  let title = task.title == "" ? "Task" : task.title;
  $("#board").append(
    '<div class="task ' +
      taskColor[Math.floor(Math.random() * 3)] +
      '" id="task-' +
      task.id +
      '">' +
      '<div id="task-content">' +
      '<h3 id="task-title"><u>' +
      title +
      "</u><h3/>" +
      '<p id="task-content">' +
      task.content +
      "</p>" +
      "</div>" +
      '<button class="btn btn-light" id="edit-task-' +
      task.id +
      '">Edit</button>' +
      "</div>"
  );
  $("#task-" + task.id).draggable();
  $("#edit-task-" + task.id).on("click", { task: task }, editTask);

  tasks.push(task);
}

function editTask(e) {
  let task = e.data.task;
  $("#task-" + task.id)
    .find("#task-content")
    .replaceWith(
      '<div id="task-content">' +
        '<input id="input-title" placeholder="Task title" value="' +
        task.title +
        '" required>' +
        '<textarea id="textarea-content" placeholder="Task content">' +
        task.content +
        "</textarea>" +
        "</div>"
    );

  $("#edit-task-" + task.id).replaceWith(
    '<div id="control-edit-buttons">' +
      '<button class="btn btn-light" id="cancel-edit-' +
      task.id +
      '">Cancel</button>' +
      '<button class="btn btn-light" id="confirm-edit-' +
      task.id +
      '">Confirm</button></div>'
  );

  $("#cancel-edit-" + task.id).on("click", { task: task }, cancelEdit);
  $("#confirm-edit-" + task.id).on("click", { task: task }, confirmEdit);
}

function cancelEdit(e) {
  let task = e.data.task;
  let title = task.title == "" ? "Task" : task.title;
  $("#task-" + task.id)
    .find("#input-title")
    .replaceWith('<h3 id="task-title"><u>' + title + "</u></h3>");
  $("#task-" + task.id)
    .find("#textarea-content")
    .replaceWith('<p id="task-content">' + task.content + "</p>");
  $("#control-edit-buttons").replaceWith(
    '<button class="btn btn-light" id="edit-task-' + task.id + '">Edit</button>'
  );
  $("#edit-task-" + task.id).on("click", { task: task }, editTask);
}

function confirmEdit(e) {
  let task = e.data.task;
  let title = $("#task-" + task.id)
    .find("#input-title")
    .val();
  let content = $("#task-" + task.id)
    .find("#textarea-content")
    .val();
  let newTitle = title == "" ? "Task" : title;
  $("#task-" + task.id)
    .find("#input-title")
    .replaceWith('<h3 id="task-title"><u>' + newTitle + "</u></h3>");
  $("#task-" + task.id)
    .find("#textarea-content")
    .replaceWith('<p id="task-content">' + content + "</p>");
  $("#control-edit-buttons").replaceWith(
    '<button class="btn btn-light" id="edit-task-' + task.id + '">Edit</button>'
  );

  tasks.forEach((tasksElement) => {
    if (tasksElement.id == task.id) {
      tasksElement.title = title;
      tasksElement.content = content;
      $("#edit-task-" + task.id).on("click", { task: tasksElement }, editTask);
    }
  });
}
