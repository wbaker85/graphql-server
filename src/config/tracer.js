const { initTracer } = require('jaeger-client');

const config = {
  serviceName: 'apollo-opentracing-demo',
  sampler: {
    type: 'const',
    param: 1,
  },
  reporter: {
    logSpans: true,
    collectorEndpoint: 'http://localhost:14268/api/traces',
  },
};

const options = {
  logger: {
    info(msg) {
      console.log('INFO ', msg);
    },
    error(msg) {
      console.log('ERROR', msg);
    },
  },
};

const tracer = initTracer(config, options);

export default tracer;
