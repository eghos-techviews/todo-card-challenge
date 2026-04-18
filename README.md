:::writing{variant=“standard” id=“84219”}

⸻

Stage 1 Submission

Live Demo
	•	Todo Card (Stage 1A): https://regal-faun-7b85aa.netlify.app/index.html
	•	Profile Card (Stage 1B): https://regal-faun-7b85aa.netlify.app/profile.html

GitHub Repository

https://github.com/eghos-techviews/todo-card-challenge.git



Overview

This project contains two components:

1. Todo Card (Stage 1A)

An interactive, stateful todo card built with vanilla HTML, CSS, and JavaScript.

2. Profile Card (Stage 1B)

A responsive and accessible profile card component with dynamic time updates.


Stage 1A — Improvements from Stage 0
	•	Added edit mode with form inputs
	•	Implemented status control (Pending, In Progress, Done)
	•	Synced checkbox + status dropdown
	•	Added priority indicator (color-based)
	•	Implemented expand/collapse description
	•	Added time tracking with live updates
	•	Added overdue detection
	•	Improved accessibility (aria attributes, labels)
	•	Improved responsive layout



Stage 1B — Features
	•	Semantic HTML structure using <article>, <section>, <nav>, <figure>
	•	Dynamic epoch time (Date.now())
	•	Accessible avatar image with alt text
	•	Social links with:
	•	target="_blank"
	•	rel="noopener noreferrer"
	•	Hobbies and dislikes lists
	•	Responsive layout (mobile → desktop)
	•	Keyboard accessible navigation
	•	aria-live="polite" for time updates



Accessibility Notes
	•	All interactive elements are keyboard accessible
	•	Proper labels and semantic HTML used
	•	Time updates use aria-live for screen readers
	•	Focus styles are visible
	•	Images include meaningful alt text



Limitations
	•	No persistent storage (data resets on refresh)
	


How to Run Locally
	1.	Clone the repo
	2.	Open folder in VS Code
	3.	Open index.html or profile.html in browser


Design Decisions
	•	Used vanilla JS to demonstrate core DOM/state understanding
	•	Centralized state management for Todo Card
	•	Kept UI minimal but functional for clarity and performance

⸻

:::
