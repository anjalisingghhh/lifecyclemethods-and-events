# React Parent-Child Component Communication Example

This is a simple React project demonstrating parent-child communication between two components: `ParentComponent` and `ChildComponent`. The example includes the use of state management, prop passing, event handling, conditional rendering, and lifecycle methods.

## Features
- **Parent-Child Communication**: The parent component (`ParentComponent`) passes state values as props to the child component (`ChildComponent`), and the child can update the parent's state through event handlers.
- **Conditional Rendering**: The child component can be hidden or shown based on the parent's state.
- **Input Handling**: The parent receives input from the child component and updates the `name` state.
- **Component Lifecycle Methods**: The project utilizes lifecycle methods such as `componentDidMount`, `componentWillUnmount`, and `shouldComponentUpdate` for state management and optimization.

## Project Setup

To set up this project locally, follow the steps below:

### Prerequisites

1. Make sure you have `Node.js` and `npm` (or `yarn`) installed on your computer.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repository/react-parent-child-communication.git
    cd react-parent-child-communication
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

    This will run the app on `http://localhost:3000` in your browser.

### Directory Structure

The basic directory structure of this project is as follows:


### Technologies Used
- **React**: JavaScript library for building user interfaces
- **React 18**: Using the new `createRoot` API for rendering
- **JSX**: JavaScript XML syntax for templating in React
- **React Component Lifecycle**: `componentDidMount`, `componentWillUnmount`, `shouldComponentUpdate`

### How It Works
- The **`ParentComponent`** manages the state and handles events. It passes a `name` prop to the **`ChildComponent`** and can hide or show the child component based on its own state.
- The **`ChildComponent`** renders an input field and a button. When the input field is changed, it triggers the parent's handler to update the state. The child also has a button that toggles the visibility of some content.

### Important Methods and Concepts
- **Lifecycle Methods**: 
  - `componentDidMount()`: Called when the component is mounted (both parent and child).
  - `componentWillUnmount()`: Called when the child component is removed from the DOM.
  - `shouldComponentUpdate()`: Determines whether the child component should re-render based on the `show` prop.

- **Event Handling**: The parent handles events from the child through passed props and updates its state accordingly.

### Conclusion
This project demonstrates a basic React app with parent-child communication, conditional rendering, and state management. It’s a good starting point for learning about React’s component architecture and lifecycle methods.
