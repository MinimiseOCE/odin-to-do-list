myTasks = []

const showButton = document.querySelector('#newTask');
showButton.addEventListener('click', function() {
    showForm()
});

function deleteTask() {
    const task = document.querySelector('.task');
    task.addEventListener('click', function() {
        task.style.textDecoration = 'line-through';
        task.style.color = 'green';
    });
}

const formInfo = document.querySelector('#submit');
formInfo.addEventListener('click', function() {
    console.log('hi')
    getFormInfo()
    showForm()
});

function showForm() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

class myTask {
    constructor(title,desc,dueDate,priority,created) {

    this.title = title
    this.desc = desc
    this.dueDate = dueDate
    this.priority = priority
    this.created = created
    this.info = function(){
        return [title, desc, dueDate, priority, created]
    }
}
}

function getFormInfo() {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let important = document.getElementById("important").checked;
    let created = false;
    myTasks.push(new myTask (title, desc, dueDate, important, created))
    addTask()
}

function addTask() {
    for (const item of myTasks) {
        if (item.created == false) {
            let div = document.createElement('div');
            div.classList.add("task");
            div.innerHTML += item.title + ': '  + item.desc + ' by ' + item.dueDate
            document.getElementById("tasks").appendChild(div);
            item.created = true;
        }
        deleteTask();
    }
}   