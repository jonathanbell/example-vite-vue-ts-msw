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

  rest.get("/progress", (req, res, ctx) => {
    let progress: number = parseInt(sessionStorage.getItem("progress") ?? "0");

    if (progress < 100) {
      progress = progress + 10;
      sessionStorage.setItem("progress", progress.toString());
    } else {
      // Idea: we could reset the progress here if we wanted the bar to run forever
      // sessionStorage.removeItem("progress");
    }

    return res(
      ctx.delay(666),
      ctx.json({
        progress
      })
    );
  }),
];
