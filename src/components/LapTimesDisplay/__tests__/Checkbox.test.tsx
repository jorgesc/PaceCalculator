import React from "react";
import thunk from "redux-thunk";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Checkbox, {StyledLabel, StyledCheckboxContainer} from "../Checkbox";

Enzyme.configure({adapter: new Adapter()});

describe("Checkbox tests", () => {
  it("When there is no label prop, doesnt show StyledLabel", () => {
    const wrapper = mount(<Checkbox onChange={() => 0} checked={false} />);
    expect(wrapper.find(StyledLabel)).toHaveLength(0);
  });

  it("Show the label correctly when it exists", () => {
    const lab = "ASFNKaenakle";
    const wrapper = mount(
      <Checkbox onChange={() => 0} label={lab} checked={false} />,
    );
    expect(wrapper.find(StyledLabel)).toHaveLength(1);
    expect(wrapper.find(StyledLabel).text()).toEqual(lab);
  });

  it("Calls the callback function when clicked", () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={onChange} checked={false} />);
    wrapper.find(StyledCheckboxContainer).simulate("click");
    expect(onChange.mock.calls).toHaveLength(1);
  });
});
