import React from "react";
import thunk from "redux-thunk";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Checkbox from "../../Checkbox";

Enzyme.configure({adapter: new Adapter()});

describe("Checkbox tests", () => {
  it("Calls the callback function when clicked", () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={onChange} value={false} />);
    wrapper.simulate("click");
    expect(onChange.mock.calls).toHaveLength(1);
  });
});
