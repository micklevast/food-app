// import logo from "./logo.svg";
import "./App.css";
import { MenuComponent } from "./components/MenuComponent";
import AllFood from "./myFood.json";

function App() {
  return (
    <div className="App">
      {/* {AllFood.map((val, index) => {
        return <div>{val.description}</div>;
      })} */}
      {/* <MenuComponent />
      <MenuComponent />
      <MenuComponent />
      <MenuComponent />
      <MenuComponent /> */}
      {AllFood.map((val, index) => {
        return (
          <div className="col-12">
            <MenuComponent
              name={val.name}
              imgLink={val.img}
              desc={val.description}
              comment={val.comments}
              author={val.author}
              date={val.date}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
