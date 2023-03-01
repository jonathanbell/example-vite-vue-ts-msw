import { rest } from "msw";

export const handlers = [
  rest.get("/api", (req, res, ctx) => {
    console.log(
      self.location.hostname.toString() +
        ":" +
        self.location.port.toString() +
        "/api"
    );
    return res(
      ctx.delay(500),
      ctx.json({
        currentTime: new Date().toISOString(),
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username: "jonnyrocket",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
];
