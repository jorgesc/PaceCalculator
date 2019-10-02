import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

import Sport from "../../Sport";
import SportSelector from "../SportSelector";
import SportSelectorButton from "../SportSelectorButton";

describe("SportSelector tests", () => {
  it("Receives sports as props", () => {
    const sport1: Sport = {
      name: "Sport1",
      icon: "",
      units: "a",
      showRythm: (distance: number, time: string): string => "",
      showTotalTime: (distance: number, rythm: string): string => "",
    };
    const sport2 = {...sport1, name: "Sport2", units: "b"};
    const sport3 = {...sport1, name: "Sport3", units: "c"};

    const wrapper = mount(
      <SportSelector sports={[sport1, sport2, sport3]} selected={0} />,
    );

    const buttons = wrapper.find(SportSelectorButton);
    expect(buttons).toHaveLength(3);
    expect(buttons.at(0).text()).toEqual(sport1.name);
    expect(buttons.at(1).text()).toEqual(sport2.name);
    expect(buttons.at(2).text()).toEqual(sport3.name);
  });
});
