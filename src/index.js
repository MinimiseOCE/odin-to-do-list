myTasks = [];

const showButton = document.querySelector('#newTask');
showButton.addEventListener('click', () => {
  showForm();
});

function deleteTask() {
  document
    .getElementsByClassName('task')
    .addEventListener('click', function (event) {
      if (event.originalTarget.class === 'task') {
        this.parentElement.removeChild(this);
      }
    });
}
const formInfo = document.querySelector('#submit');
formInfo.addEventListener('click', () => {
  getFormInfo();
  showForm();
});

function showForm() {
  const popup = document.getElementById('myPopup');
  popup.classList.toggle('show');
}

class myTask {
  constructor(title, desc, dueDate, priority, created) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.created = created;
    this.info = function () {
      return [title, desc, dueDate, priority, created];
    };
  }
}

function getFormInfo() {
  const title = document.getElementById('title').value;
  const desc = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const important = document.getElementById('important').checked;
  const created = false;
  myTasks.push(new myTask(title, desc, dueDate, important, created));
  addTask();
}

function addTask() {
  for (const item of myTasks) {
    if (item.created == false) {
      const div = document.createElement('div');
      div.classList.add('task');
      div.innerHTML += `${item.title}: ${item.desc} by ${item.dueDate}`;
      document.getElementById('tasks').appendChild(div);
      item.created = true;
    }
    deleteTask();
  }
}
