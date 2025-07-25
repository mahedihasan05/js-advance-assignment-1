const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") {
    alert("Please Enter a Value");
    return;
  }

  const li = document.createElement("li");
  li.className = "bg-white flex items-center justify-between p-2 rounded-md";

  const span = document.createElement("span");
  span.textContent = text;
  span.className = "flex-1";

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "flex gap-2";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeBtn.className = "bg-[#28a745] text-white px-2 py-1 rounded-md";
  completeBtn.onclick = () => span.classList.toggle("line-through");

  const editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  editBtn.className = "bg-[#ebd316] text-white px-2 py-1 rounded-md";
  editBtn.onclick = () => {
    const newText = prompt("Edit your ToDo:", span.textContent);
    if (newText !== null) span.textContent = newText.trim();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.className = "bg-[#dc3545] text-white px-2 py-1 rounded-md";
  deleteBtn.onclick = () => li.remove();

  buttonGroup.append(completeBtn, editBtn, deleteBtn);
  li.append(span, buttonGroup);
  todoList.appendChild(li);

  input.value = "";
});
