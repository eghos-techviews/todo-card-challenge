
const todoState = {
    title: "Todo Item Card",
    description: "Design and implement a responsive todo card component...",
    priority: "High",
    status: "Pending",
    dueDate: "2026-04-17T23:59",
    isEditing: false,
    isExpanded: false
};

const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const status = document.querySelector('[data-testid="test-todo-status"]');
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');
const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');
const overdueEl = document.querySelector('[data-testid="test-todo-overdue-indicator"]');

const editForm = document.querySelector('[data-testid="test-todo-edit-form"]');
const viewMode = document.querySelector('.view-mode');
const description = document.querySelector('[data-testid="test-todo-description"]');
const expandBtn = document.querySelector('[data-testid="test-todo-expand-toggle"]');

const editTitleInput = document.querySelector('[data-testid="test-todo-edit-title-input"]');
const editDescInput = document.querySelector('[data-testid="test-todo-edit-description-input"]');
const editPriorityInput = document.querySelector('[data-testid="test-todo-edit-priority-select"]');
const editDateInput = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');

const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
const cancelBtn = document.querySelector('[data-testid="test-todo-cancel-button"]');
const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');

const priorityIndicator = document.querySelector('[data-testid="test-todo-priority-indicator"]');
const priorityText = document.querySelector('[data-testid="test-todo-priority"]');

// INIT
// document.getElementById("desc-section").style.display = "none";
statusControl.value = todoState.status;
updatePriorityUI();
updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

editForm.classList.add("hidden");
viewMode.classList.remove("hidden");

// PRIORITY UI
function updatePriorityUI() {
    priorityText.textContent = todoState.priority;
    priorityIndicator.className = "priority-indicator";

    if (todoState.priority === "High") priorityIndicator.classList.add("high");
    else if (todoState.priority === "Medium") priorityIndicator.classList.add("medium");
    else priorityIndicator.classList.add("low");
}

// CHECKBOX
checkbox.addEventListener("change", () => {
    todoState.status = checkbox.checked ? "Done" : "Pending";
    status.textContent = todoState.status;
    statusControl.value = todoState.status;

    title.classList.toggle("completed", todoState.status === "Done");
});

// STATUS CONTROL
statusControl.addEventListener("change", () => {
    todoState.status = statusControl.value;
    status.textContent = todoState.status;

    checkbox.checked = todoState.status === "Done";
    title.classList.toggle("completed", todoState.status === "Done");
});

// EDIT MODE
editBtn.addEventListener("click", () => {
    todoState.isEditing = true;

    editTitleInput.value = todoState.title;
    editDescInput.value = todoState.description;
    editPriorityInput.value = todoState.priority;
    editDateInput.value = todoState.dueDate;

    editForm.classList.remove("hidden");
    viewMode.classList.add("hidden");
});

saveBtn.addEventListener("click", () => {
    todoState.title = editTitleInput.value;
    todoState.description = editDescInput.value;
    todoState.priority = editPriorityInput.value;
    todoState.dueDate = editDateInput.value;

    title.textContent = todoState.title;
    description.textContent = todoState.description;

    dueDateEl.setAttribute("datetime", todoState.dueDate);
    dueDateEl.textContent = `Due ${new Date(todoState.dueDate).toDateString()}`;

    updatePriorityUI();

    todoState.isEditing = false;
    editForm.classList.add("hidden");
    viewMode.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
    todoState.isEditing = false;
    editForm.classList.add("hidden");
    viewMode.classList.remove("hidden");
});

// EXPAND
const descSection = document.getElementById("desc-section");

// INIT (collapsed by default)
descSection.classList.add("collapsed");

expandBtn.addEventListener("click", () => {
    todoState.isExpanded = !todoState.isExpanded;

    if (todoState.isExpanded) {
        descSection.classList.remove("collapsed");
        expandBtn.textContent = "Collapse";
        expandBtn.setAttribute("aria-expanded", "true");
    } else {
        descSection.classList.add("collapsed");
        expandBtn.textContent = "Expand";
        expandBtn.setAttribute("aria-expanded", "false");
    }
});

// TIME
function updateTimeRemaining() {
    if (todoState.status === "Done") {
        timeRemainingEl.textContent = "Completed";
        overdueEl.textContent = "";
        return;
    }

    const dueDate = new Date(todoState.dueDate);
    const now = new Date();
    const diff = dueDate - now;

    let text = "";

    if (diff <= 0) {
        overdueEl.textContent = "Overdue";
        overdueEl.style.color = "red";

        const hours = Math.abs(Math.floor(diff / (1000 * 60 * 60)));
        text = hours < 1 ? "Due now!" : `Overdue by ${hours}h`;
    } else {
        overdueEl.textContent = "";
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60));

        if (days > 1) text = `Due in ${days} days`;
        else if (days === 1) text = "Due tomorrow";
        else if (hours >= 1) text = `Due in ${hours}h`;
        else text = "Due soon";
    }

    timeRemainingEl.textContent = text;
}