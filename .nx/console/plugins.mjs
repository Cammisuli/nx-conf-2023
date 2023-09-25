export default {
  schemaProcessors: [
    (schema, workspace, logger) => {
      return {
        ...schema,
        options: schema.options.map((opt) => {
          if (opt.name === 'directory') {
            return {
              ...opt,
              'x-priority': 'important',
            };
          }
          return opt;
        }),
      };
    },
  ],
};
