import React from "react";
import { PageRouter, Redirect, ThemeProvider } from "simon-ui";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { FormPage } from "./pages/FormPage";
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
              { path: "/button", component: <Redirect to="/" /> },
              { path: "/form", component: <FormPage /> },
            ],
          },
        ]}
      />
    </ThemeProvider>
  );
}
export default App;
