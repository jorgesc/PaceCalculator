import React from "react";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

import InputField from "../";

describe("InputField tests", () => {
  let wrapper: ReactWrapper;
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();

    wrapper = mount(
      <InputField
        value="Hello world"
        label="TEST"
        icon=""
        units="test"
        placeholder=""
        onChange={onChange}
        buttons={[{text: "Hello", value: "H"}, {text: "World", value: "wo"}]}
      />,
    );
  });

  it("Shows value specified on value prop", () => {
    expect(wrapper.find("input").props().value).toEqual("Hello world");
  });

  it("Changing its value triggers onChange function", () => {
    wrapper.find("input").simulate("change", {target: {value: "It works!!"}});
    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0][0]).toEqual("It works!!");
  });

  it("Clicking a button triggers onChange", () => {
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0][0]).toEqual("wo");

    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(onChange.mock.calls).toHaveLength(2);
    expect(onChange.mock.calls[1][0]).toEqual("H");
  });
});
