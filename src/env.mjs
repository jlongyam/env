import envRuntime from "./envRuntime.mjs";
import envGlobal from "./envGlobal.mjs";

const env = envRuntime
env.global = envGlobal;

export default env