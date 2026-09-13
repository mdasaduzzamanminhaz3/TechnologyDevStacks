# 🚀 TechnologyDevStacks

TechnologyDevStacks is a React-based web application where users can explore different development technologies and build their own ideal technology stack.

The project provides a simple and interactive way to discover frontend, backend, database, and development tools.

## ✨ Features

* 🔍 **Explore Technologies** — Browse different technologies with their names, categories, descriptions, and icons.
* 🧩 **Build Your Own Stack** — Select technologies and create your personalized development stack.
* 🗑️ **Manage Your Stack** — Remove individual technologies or clear the entire selected stack with a single click.

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* Vite
* React Icons

## 📂 Project Structure

```text
TechnologyDevStacks/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   └── TechnologyStacks/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd TechnologyDevStacks
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The project will then be available on the local development server.

## 🌐 Deployment

This project can be deployed on any modern hosting platform, including:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Other static hosting platforms

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to write and understand because we can describe the UI directly inside our component code.

Example:

```tsx
const App = () => {
  return <h1>Hello TechnologyDevStacks</h1>;
};
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data that belongs to a component and can change over time.

For example, in this project, technology information is passed to the `StacksCard` component using props, while the selected technologies are stored using state.

---

## 3. What does the useState hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

I used `useState` in the technology stack section to keep track of the technologies selected by the user.

Example:

```tsx
const [selectedStacks, setSelectedStacks] = useState<TechnologyType[]>([]);
```

When a user selects a technology, it is added to `selectedStacks`.

When the user removes a technology, the state is updated.

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data, calling an API, or working with external resources.

If the JSON data needs to be loaded after the component renders, `useEffect` can be used to fetch the data and store it in state.

In this project, the technology data comes from JSON data, which provides information about the available technologies.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which items were added, removed, or changed and update the UI efficiently.

In this project, I used the technology `id` as the key:

```tsx
{technologies.map((technology) => (
  <StacksCard
    key={technology.id}
    technology={technology}
  />
))}
```

Using a unique ID is better than using the array index because the ID identifies the actual item.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

I used it to show a message when the user's stack is empty.

```tsx
{selectedStacks.length === 0 ? (
  <span>Your Stack is empty</span>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

If no technology is selected, the user sees **"Your Stack is empty"**.

If technologies are selected, the selected technologies are displayed instead.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using **props**.

For example:

```tsx
<StacksCard
  technology={technology}
  handleAddToStack={handleAddToStack}
/>
```

Here, the parent sends the technology data and the `handleAddToStack` function to the child.

The child can then call the function when the user performs an action.

For example:

```tsx
<button onClick={() => handleAddToStack(technology)}>
  Add to Stack
</button>
```

So, the parent passes data and functions through props, and the child can communicate back by calling the function received from the parent.

---

## 📱 Responsive Design

TechnologyDevStacks is designed to work across different screen sizes.

It supports:

* 📱 Mobile devices
* 📱 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

Tailwind CSS responsive utility classes are used to create the responsive layout.

---

## 🎨 UI & Styling

The project uses:

* **Tailwind CSS** for styling
* **DaisyUI** for reusable UI components
* **React Icons** for icons
* **React-Toastify** for user notifications

For example, when a technology is added to the stack, a toast notification informs the user that the technology has been successfully added.

---

## 📌 Project Purpose

The main purpose of this project is to practice React concepts such as:

* Components
* Props
* State
* Hooks
* Conditional Rendering
* Array `.map()`
* Event Handling
* TypeScript
* Responsive Design
* Component communication

---

## 👨‍💻 Author

**Md Asaduzzaman Minhaz**

Built with ❤️ using React, TypeScript, Tailwind CSS, and DaisyUI.
