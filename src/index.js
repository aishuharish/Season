import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./Spinner";

// const App = () => {
//   const [lat, setLat] = useState(400);

//   window.navigator.geolocation.getCurrentPosition(
//     (position) => setLat(position.coords.latitude),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: {lat} </div>;
// };

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { lat: null, errorMessage: null };
  //   }

  //   componentDidMount() {
  //     console.log(
  //       "component is mounted for the first time,  My component was rendered to the screen"
  //     );
  //   }

  //   componentDidUpdate() {
  //     console.log("My component was just updated -it rerendered");
  //   }

  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage)
      return <SeasonDisplay lat={this.state.lat} />;
    if (!this.state.lat && this.state.errorMessage)
      return <div>Error:{this.state.errorMessage} </div>;
    return <Spinner message="Please allow access to location" />;
  }

  render() {
    return (
      <div style={{ border: " 10px solid red" }}>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
