import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer, Options } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }) as any);

Enzyme.configure({
  adapter: new Adapter()
});
