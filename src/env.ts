// env.ts

/**
 * Deteksi lingkungan eksekusi.
 * Urutan pengecekan penting: Worker memiliki `self` tetapi tidak memiliki `document`.
 */

const isBrowser = typeof document !== "undefined";
const isWorker = typeof self !== "undefined" && !isBrowser;
const isCli = !isBrowser && !isWorker;

// Alternatif untuk membedakan Worker Deno vs Worker Browser (opsional)
// Di Deno Worker, `self` ada, tetapi `window` tidak.
// Di Deno CLI, `self` juga bisa undefined atau berbeda.

export const env = {
  browser: isBrowser,
  worker: isWorker,
  cli: isCli,
} as const;

export default env;