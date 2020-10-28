/* eslint-disable max-lines-per-function */
/* eslint-disable no-mixed-operators */
const plugin = {
  requestDidStart(requestContext) {
    if (requestContext.request.operationName === 'IntrospectionQuery') {
      return {};
    }

    const startHumanTime = new Date()
      .toISOString()
      .replace(/T/, ' ')
      .replace(/\..+/, '');
    const startTime = process.hrtime();
    console.log();
    console.log(requestContext.request.query);
    console.log(`Request start time: ${startHumanTime}`);

    return {
      willSendResponse(requestContext) {
        const durationNanos = process.hrtime(startTime);
        const durationMilliseconds =
          (durationNanos[0] * 1000000000 + durationNanos[1]) / 1000000;
        console.log(`Duration: ${durationMilliseconds} milliseconds`);
      },
    };
  },
};

export default plugin;
