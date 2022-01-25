export const get = async (request) => {

  const now = new Date();

  return {
    body: {
      time: now.toISOString(),
      uptime: process.uptime(),
      app: { status: "up", message: "" }
    }
  }
}
