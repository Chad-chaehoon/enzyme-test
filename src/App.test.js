import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  let app = mount(<App />);
  it("renders the App title", () => {
    //console.log(app.debug());
    expect(app.find("h2").text()).toEqual("Note to Self");
  });
  //.at(1) index 1 (first button)
  it("renders the clear button", () => {
    expect(
      app
        .find(".btn")
        .at(1)
        .text()
    ).toEqual("Clear Notes");
  });

  describe("when rendering the form", () => {
    it("creates a Form component", () => {
      expect(app.find("Form").exists()).toBe(true);
    });

    it("renders a FormControl component", () => {
      expect(app.find("FormControl").exists()).toBe(true);
    });

    it("renders a submit button", () => {
      expect(
        app
          .find(".btn")
          .at(0)
          .text()
      ).toEqual("Submit");
    });
  });
});
