import React from "react";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

import Sport from "../../../models/Sport";
import SportSelector from "../SportSelector";
import SportSelectorButton from "../SportSelectorButton";

describe("SportSelector tests", () => {
  let sport1: Sport;
  let sport2: Sport;
  let sport3: Sport;

  let wrapper: ReactWrapper;

  let callback: jest.Mock;

  beforeEach(() => {
    callback = jest.fn();
    sport1 = {
      name: "Sport1",
      icon: "",
      units: "a",
      calculateRythmFromTotalTime: (distance: number, time: string): string => "",
      calculateTotalTimeFromRythm: (distance: number, rythm: string): string => "",
    };
    sport2 = {...sport1, name: "Sport2", units: "b"};
    sport3 = {...sport1, name: "Sport3", units: "c"};

    wrapper = mount(
      <SportSelector
        sports={[sport1, sport2, sport3]}
        selected={0}
        onChange={callback}
      />,
    );

    const buttons = wrapper.find(SportSelectorButton);
  });

  it("Receives sports as props", () => {
    const buttons = wrapper.find(SportSelectorButton);
    expect(buttons).toHaveLength(3);
    expect(buttons.at(0).text()).toEqual(sport1.name);
    expect(buttons.at(1).text()).toEqual(sport2.name);
    expect(buttons.at(2).text()).toEqual(sport3.name);
  });

  it("Clicking on one button calls its callback with the correct args", () => {
    const buttons = wrapper.find(SportSelectorButton);
    buttons.at(0).simulate("click");
    expect(callback.mock.calls).toHaveLength(1);
    expect(callback.mock.calls[0][0]).toBe(0);

    buttons.at(2).simulate("click");
    expect(callback.mock.calls).toHaveLength(2);
    expect(callback.mock.calls[1][0]).toBe(2);
  });
});
