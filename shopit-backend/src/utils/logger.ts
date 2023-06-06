import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  base: {
    "pino-pretty": true,
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
