// .storybook/preview.js
import "../styles/globals.css"
// import everything from next/image
import * as NextImage from "next/image";
// Exports from msw
import { setupWorker, rest } from "msw";

// Quick check to make sure we are in a browser
if( typeof global.process === "undefined" ) {
  // We'll do an assignment for a new worker called setupWorker
  const worker = setupWorker(
    // Inside this function I wanna setup a rest route
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      return res(ctx.json({ name: "John Doe" }))
    })
  );
  worker.start();
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}