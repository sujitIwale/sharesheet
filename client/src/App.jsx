import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import HiddenRoute from "./components/routes/HiddenRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import { AuthState } from "./context/auth/AuthState";
import { FileState } from "./context/file/FileState";
import { SheetState } from "./context/sheet/SheetState";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Landing from "./pages/landing/Landing";
import Project from "./pages/project/Project";
import Sheet from "./pages/sheet/Sheet";

// (() => {
//   const temp = console.log
//   console.log = (...para) => {
//     if (process.env.NODE_ENV === 'development') {
//       temp(...para)
//     }
//   }
// })()



function App() {
  return (
    <Router>
      <AuthState>
        <MainLayout>
          <Switch>
            <Route exact path='/signin'>
              <SignIn />
            </Route>
            <Route exact path='/signup'>
              <SignUp />
            </Route>
            <HiddenRoute exact path='/landing' component={Landing} />
            <FileState>
              <SheetState>
                <PrivateRoute exact path='/' component={Project} />
                <PrivateRoute exact path='/sheet/:sheetId' component={Sheet} />
              </SheetState>
            </FileState>
            <Route path='*' element={<p>There's nothing here: 404!</p>} />
          </Switch>
        </MainLayout>
      </AuthState>
    </Router>
  );
}

export default App;
