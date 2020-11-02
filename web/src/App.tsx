import React from "react";
import { PageRouter, ThemeProvider } from "simon-ui";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <ThemeProvider theme={{}}>
      <PageRouter
        header={<Header />}
        drawer={<NavBar />}
        routes={[
          {
            path: "/",
            component: <div>Home</div>,
            routes: [
              { path: "/test", component: <div>Test</div> },
              { path: "/button", component: <div>Button</div> },
            ],
          },
        ]}
      />
    </ThemeProvider>
  );
}
export default App;
