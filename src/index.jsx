import { render } from "preact";

export function App() {
  return <p class="big">Hello World!</p>;
}

render(<App />, document.getElementById("app"));
