# Simple TODO List App

A straightforward, browser-based TODO list application that allows you to add, delete, and store your tasks. This project demonstrates fundamental JavaScript concepts including DOM manipulation, event handling, and persisting data using the browser's `localStorage`.

## Features

* **Add Tasks:** Quickly add a new task item and a corresponding due date.
* **Delete Tasks:** Remove tasks you've completed.
* **Persistent Storage:** Tasks are saved to your browser's `localStorage`, so they will still be there even after you close the tab or refresh the page.
* **Input Validation:** Prevents you from adding empty tasks or tasks without a date.
* **Default Task:** Loads a default task on first use to show you how it works.

## Technologies Used

* **HTML:** For the basic structure of the web page.
* **CSS:** (Not included in the script, but used for styling the app).
* **JavaScript (ES6+):** For all application logic, including:
    * DOM Manipulation
    * Event Listeners (`click`)
    * `localStorage` API (for saving and retrieving data)
    * `JSON.parse()` and `JSON.stringify()`

## How to Use

To run this project on your local machine:

1.  **Download the files:**
    * Clone the repository: `git clone <your-repo-url-here>`
    * Or, download the `index.html`, `style.css` (if you have one), and `script.js` files into the same folder.

2.  **Open the file:**
    * Simply open the `index.html` file in any modern web browser (like Chrome, Firefox, or Edge).

3.  **Start adding tasks!**
    * Type your task in the first box, select a date, and click "Add".

## Project Code Overview

This project is built around a few key functions:

* `addTodo()`: Reads the values from the input fields, adds the new task object to the `todoList` array, and then calls `saveTodoItem()` and `displayTodoItem()`.
* `displayTodoItem()`: Renders the entire `todoList` array to the screen. It loops through the array, generates an HTML string, and sets it as the `.innerHTML` of the container. It is also responsible for adding `addEventListener` to the delete buttons.
* `saveTodoItem()`: Serializes the `todoList` array into a JSON string and saves it to `localStorage` under the key `todoList`.
* **Initialization Logic:** When the script first loads, it checks `localStorage` for an existing `todoList`. If it finds one, it parses the JSON data. If not, it creates a new list with a default sample task.
