# AIS Learning Platform

This project contains a small React example implementing an adaptive math quiz. The component is modular so it can be reused in other projects.

## Setup

1. Run `npm install` to install all dependencies listed in `package.json`.
2. Start the development server with `npm start`.

## Usage

1. Copy the files from `src/components/AdaptiveQuiz` into your React project.
2. Import and render the `AdaptiveQuiz` component:

```jsx
import AdaptiveQuiz from './components/AdaptiveQuiz/AdaptiveQuiz';

function App() {
  return <AdaptiveQuiz />;
}
```

3. The quiz adjusts its difficulty based on the student's streak and shows a score and level display. Styling is kept in `AdaptiveQuiz.css`.
