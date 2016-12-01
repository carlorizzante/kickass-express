const env = process.env.NODE_ENV || "dev";

if (env === "dev" || env === "test") {

  const config = require("./config.json");
  const config_env = config[env];

  Object.keys(config_env).forEach(key => {
    process.env[key] = config_env[key];
  });
}
