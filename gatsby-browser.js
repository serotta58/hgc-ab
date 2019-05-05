import ReactDOM from "react-dom";

require("prismjs/themes/prism-okaidia.css")

export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback);
