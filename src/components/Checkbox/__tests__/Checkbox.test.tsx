import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Checkbox from "../";

Enzyme.configure({adapter: new Adapter()});

describe("Checkbox tests", () => {
  it("Works in uncontrolled mode", () => {
    const callback = jest.fn();
    const wrapper = mount(<Checkbox onChange={callback} />);

    wrapper.simulate("click");
    wrapper.simulate("click");
    wrapper.simulate("click");

    expect(callback.mock.calls).toHaveLength(3);
    expect(callback.mock.calls[0][0]).toEqual(true);
    expect(callback.mock.calls[1][0]).toEqual(false);
    expect(callback.mock.calls[2][0]).toEqual(true);
  });

  it("Works in controlled mode", () => {
    const callback = jest.fn();
    const wrapper = mount(<Checkbox onChange={callback} value={false} />);

    wrapper.simulate("click");
    expect(wrapper.props().value).toBe(false);
    expect(callback.mock.calls).toHaveLength(1);
  });

  it("Shows correct texts", () => {
    const wrapper = mount(<Checkbox onChange={() => null} />);
    expect(wrapper.text()).toEqual("OnOff");

    const wrapperLeft = mount(
      <Checkbox onChange={() => null} leftText={"Hello"} />,
    );
    expect(wrapperLeft.text()).toEqual("HelloOff");

    const wrapperRight = mount(
      <Checkbox onChange={() => null} rightText={"World"} />,
    );
    expect(wrapperRight.text()).toEqual("OnWorld");

    const wrapperAll = mount(
      <Checkbox onChange={() => null} leftText={"Hello"} rightText={"World"} />,
    );
    expect(wrapperAll.text()).toEqual("HelloWorld");
  });
});
