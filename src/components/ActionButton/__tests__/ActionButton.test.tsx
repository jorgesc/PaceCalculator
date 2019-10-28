import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ActionButton, {StyledIcon} from "../ActionButton";

Enzyme.configure({adapter: new Adapter()});

const svgIcon = () => {
  return (
    <svg width="100" height="100">
      <g>
        <title>arrow</title>
        <path
          id="svg_3"
          d="m0,50l50,-50l50,50l-25,0l0,50l-50,0l0,-50l-25,0z"
          stroke-linecap="null"
          stroke-linejoin="null"
          stroke-dasharray="null"
          stroke-width="0"
          fill="#000000"
        />
      </g>
    </svg>
  );
};

describe("ActionButton tests", () => {
  it("Shows the correct text", () => {
    const text = "Hello wool";
    const wrapper = mount(
      <ActionButton onClick={() => null}>{text}</ActionButton>,
    );
    expect(wrapper.text()).toEqual(text);
  });

  it("Doesn't show icon when not present", () => {
    const text = "Hello wool";
    const wrapper = mount(
      <ActionButton onClick={() => null}>{text}</ActionButton>,
    );
    expect(wrapper.exists(StyledIcon)).toEqual(false);
  });

  it("Shows icon when is present", () => {
    const text = "Hello wool";
    const wrapper = mount(
      <ActionButton onClick={() => null} icon={svgIcon()}>
        {text}
      </ActionButton>,
    );
    expect(wrapper.exists(StyledIcon)).toEqual(true);
    expect(wrapper.find("svg")).toHaveLength(1);
  });

  it("Calls onClick", () => {
    const text = "Hello wool";
    const myCallback = jest.fn();
    const wrapper = mount(
      <ActionButton onClick={myCallback} icon={svgIcon()}>
        {text}
      </ActionButton>,
    );

    wrapper.simulate("click");
    expect(myCallback.mock.calls).toHaveLength(1);
  });
});
