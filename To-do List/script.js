document.addEventListener("DOMContentLoaded", () => {
  const user_input = document.getElementById("add_task");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []
  tasks.forEach(task) => render_task(task);

  document.getElementById("add_btn").addEventListener("click", () => {
    const text_task = user_input.value.trim();
    if (text_task === "") return
    const newTask = {
      id: Date.now(),
      text: text_task,
      completed: false,
    }

    tasks.push(newTask);
    save_tasks();
    user_input.value = "" // This line clears the input once the value is taken
    console.log(tasks);
  })

  function render_task(task) {
    console.log(task)
  }

  function save_tasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

})