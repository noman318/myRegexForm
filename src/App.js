import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="container d-flex justify-content-center mb-3">
      <div>
      {/* <h1>My Validation in Form</h1> */}
      <MyForm />
      </div>

    </div>
  );
}

export default App;
