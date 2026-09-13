# 🚀 DevStack Manager

A simple and modern React application for exploring development categories and building a personalized technology stack.

---

## 📌 Project Description

**DevStack Manager** is a React + TypeScript project where users can browse different development technologies, add technologies to their personal stack, and remove them whenever they want.

The project focuses on practicing important React concepts such as:

* Components
* Props
* State
* Conditional Rendering
* List Rendering
* Parent-Child Communication

---

## 🛠️ Technologies Used

* ⚛️ **React**
* 🟦 **TypeScript**
* 🎨 **Tailwind CSS**
* 🔔 **React Toastify**
* ⚛️ **React Icons**

---

## ✨ Features

### 1. 🔍 Browse Development Categories

Users can see different development technologies and categories loaded from JSON data.

### 2. ➕ Add & Remove Technologies

Users can add a technology to their personal stack and remove it whenever they want.

### 3. 📚 Dynamic Stack Management

The selected stack updates instantly.

Buttons also change their state depending on whether a technology is already selected.

For example:

* **Add to Stack** → technology is not selected
* **Added to Stack** → technology is already selected

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write **HTML-like code inside JavaScript/TypeScript**.

It makes React UI easier to write and understand because we can describe the structure of the interface directly inside our components.

### Example

```tsx
const title = <h1>My Development Stack</h1>;
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed by a component that can change over time.

### Simple idea

```text
Props → Parent sends data → Child

State → Component stores and updates data
```

In this project:

* Category information is passed to the category card using **props**.
* Selected technologies are stored using **state**.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to **store and update data**.

I used it to keep track of the technologies selected by the user.

### Example

```tsx
const [selectedStack, setSelectedStack] =
    useState<devStackTypes[]>([]);
```

When a user adds or removes a technology, `setSelectedStack()` updates the state and React re-renders the UI.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform **side effects** in a React component.

Examples include:

* Fetching data
* Calling an API
* Loading JSON data
* Working with browser APIs

### Example

```tsx
useEffect(() => {
    fetch("/data/categories.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
}, []);
```

I used `useEffect` to load the JSON data after the component's initial render.

The empty dependency array `[]` means the effect does not re-run because of state or prop changes.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand:

* Which item was added
* Which item was removed
* Which item was changed

### Example

```tsx
{categoriesData.map((category) => (
    <CategoryCard
        key={category.id}
        category={category}
    />
))}
```

Using a unique ID as the key helps React efficiently update the list.

---

## 6. What is conditional rendering?

Conditional rendering means showing different UI depending on a condition.

For example, in this project, when the selected stack is empty, I show an empty-stack message.

### Example

```tsx
{selectedStack.length === 0 ? (
    <p>
        Your stack is empty. Add some technologies!
    </p>
) : (
    <StackCard items={selectedStack} />
)}
```

So:

* If there are no selected technologies → show the empty message.
* If technologies exist → show the selected stack.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

### Parent → Child

```tsx
<CategoryCard category={category} />
```

Here, `category` is passed from the parent to `CategoryCard`.

A child can send information back to the parent using a **callback function passed as a prop**.

### Example

```tsx
<CategoryCard
    category={category}
    onClick={handleChange}
/>
```

The child can then call:

```tsx
onClick(category);
```

This allows the child to send data back to the parent.

### Simple idea

```text
Parent
   │
   │ Props
   ↓
Child
   │
   │ Callback function
   ↓
Parent
```

### Remember

```text
Parent → Child = Props

Child → Parent = Callback function
```

---


**Practice. Build. Understand. Improve. 🚀**
