// iterative-dev-workflow — OpenCode plugin.
//
// Injects AGENTS.md into the system prompt on every chat turn. Also attempts to register
// commands via the config hook as a bonus - but this is NOT the primary way commands get
// installed (that's the postinstall script, see bin/install-opencode-commands.mjs), since
// this hook's behavior isn't guaranteed to be honored across all OpenCode versions.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const data = {};
  for (const l of m[1].split('\n')) {
    const i = l.indexOf(':');
    if (i < 0) continue;
    data[l.slice(0, i).trim()] = l.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  return { data, body: m[2].trim() };
}

export default async ({ client } = {}) => ({
  config: async (cfg) => {
    cfg.command = cfg.command || {};
    const dir = path.join(__dirname, '..', '..', 'commands');
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const n = f.slice(0, -3);
      const p = parseFrontmatter(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (p?.data?.description) cfg.command[n] = { template: p.body, description: p.data.description };
    }
  },

  'experimental.chat.system.transform': async (_, o) => {
    const a = path.join(__dirname, '..', '..', 'AGENTS.md');
    if (fs.existsSync(a)) {
      const txt = fs.readFileSync(a, 'utf8');
      o.system.length ? (o.system.at(-1) += '\n\n' + txt) : o.system.push(txt);
    }
  },
});
