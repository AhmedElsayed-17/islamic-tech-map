import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const isUserSite = repo === `${owner}.github.io`;
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS && repo && owner);

export default defineConfig({
  output: 'static',
  site: isGitHubPages ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isGitHubPages && !isUserSite ? `/${repo}` : '/',
  trailingSlash: 'always',
});
