import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import Note from "./Note";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

type States = {
  text: string,
  notes: array
};

const cookie_key = "NOTES";
class App extends React.Component<{}, States> {
  state = {
    text: "",
    notes: []
  };

  onChange = (event: string | number) => {
    this.setState({ text: event.target.value });
  };

  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }
  submit = () => {
    const { text, notes } = this.state;
    notes.push({ text });
    this.setState({ notes });

    bake_cookie(cookie_key, this.state.notes);
  };

  clear = () => {
    delete_cookie(cookie_key);
    this.setState({ notes: [] });
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
        <hr />
        <Button onClick={() => this.clear()}>Clear Notes</Button>
      </div>
    );
  }
}

export default App;
