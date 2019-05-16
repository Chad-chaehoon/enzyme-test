import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import Note from "./Note";

type States = {
  text: string,
  notes: array
};
class App extends React.Component<{}, States> {
  state = {
    text: "",
    notes: []
  };

  onChange = (event: string | number) => {
    this.setState({ text: event.target.value });
  };

  submit = () => {
    const { text, notes } = this.state;
    notes.push({ text });
    this.setState({ notes });
  };

  render() {
    return (
      <div className="body">
        <h2>Note to Self</h2>
        <Form>
          <FormControl onChange={this.onChange} />{" "}
          <Button onClick={this.submit}>Submit</Button>
        </Form>
        {this.state.notes.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
      </div>
    );
  }
}

export default App;
