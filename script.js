
const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const status = document.querySelector('[data-testid="test-todo-status"]');
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');
const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');

// Checkbox toggle
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        title.classList.add("completed");
        status.textContent = "Done";
    } else {
        title.classList.remove("completed");
        status.textContent = "Pending";
    }
});

// Edit & Delete actions
editBtn.addEventListener("click", () => {
    console.log("edit clicked");
});

deleteBtn.addEventListener("click", () => {
    alert("Delete clicked");
});

// Time remaining logic
function updateTimeRemaining() {
    const dueDate = new Date(dueDateEl.getAttribute("datetime"));
    const now = new Date();

    const diff = dueDate - now;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let text = "";

    if (diff <= 0) {
        const overdueHours = Math.abs(hours);
        text = overdueHours < 1
            ? "Due now!"
            : `Overdue by ${overdueHours} hour${overdueHours > 1 ? "s" : ""}`;
    } else if (days > 1) {
        text = `Due in ${days} days`;
    } else if (days === 1) {
        text = "Due tomorrow";
    } else if (hours >= 1) {
        text = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
        text = `Due in ${minutes} minutes`;
    }

    timeRemainingEl.textContent = text;
}


updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);