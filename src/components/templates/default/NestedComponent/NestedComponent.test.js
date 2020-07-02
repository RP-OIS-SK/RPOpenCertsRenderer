import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import NestedComponent, { KeyValueComponent } from "./NestedComponent";

describe("KeyValueComponent", () => {
  it("toggles between show and hide value when clicked", () => {
    const component = shallow(<KeyValueComponent value="SOME_TEXT" />);
    const clickableSelector = "[data-component-id='toggle-display']";
    const displayedValueSelector = "[data-component-id='displayed-value']";

    // Default behaviour to display value
    const initialClasses = component.find(displayedValueSelector).props()
      .className;
    expect(initialClasses).not.toContain("d-none");

    // Hide value when label is clicked on
    component.find(clickableSelector).simulate("click");
    const intermediateClasses = component.find(displayedValueSelector).props()
      .className;
    expect(intermediateClasses).toContain("d-none");

    // Show value again when label is clicked
    component.find(clickableSelector).simulate("click");
    const finalClasses = component.find(displayedValueSelector).props()
      .className;
    expect(finalClasses).not.toContain("d-none");
  });
});

describe("NestedComponent", () => {
  it("renders primitives", () => {
    const stringPrimitive = renderer.create(
      <NestedComponent>{"Hello"}</NestedComponent>
    );
    expect(stringPrimitive.toJSON()).toMatchSnapshot();

    const numberPrimitive = renderer.create(
      <NestedComponent>{1337}</NestedComponent>
    );
    expect(numberPrimitive.toJSON()).toMatchSnapshot();

    const booleanPrimitive = renderer.create(
      <NestedComponent>{false}</NestedComponent>
    );
    expect(booleanPrimitive.toJSON()).toMatchSnapshot();
  });

  it("renders an array with KeyValueComponent", () => {
    const sampleArray = ["ITEM_1", "ITEM_2", "ITEM_3"];
    const component = renderer.create(
      <NestedComponent>{sampleArray}</NestedComponent>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders an object with KeyValueComponent", () => {
    const sampleObject = { foo: "bar", cow: "moo" };
    const component = renderer.create(
      <NestedComponent>{sampleObject}</NestedComponent>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders a nested object with KeyValueComponent", () => {
    const sampleObject = {
      foo: "bar",
      cow: { nested: "moo" },
      array: ["TEXT_1", 2, false]
    };
    const component = renderer.create(
      <NestedComponent>{sampleObject}</NestedComponent>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
