import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
const root = process.cwd();
export function loadYamlDir<T = any>(relative: string): T[] {
  const dir = path.join(root, relative);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f)=>f.endsWith('.yaml')||f.endsWith('.yml')).sort()
    .map((f)=>YAML.parse(fs.readFileSync(path.join(dir,f),'utf8')) as T);
}
export function loadYamlFile<T = any>(relative: string): T {
  return YAML.parse(fs.readFileSync(path.join(root,relative),'utf8')) as T;
}
export function text(value:any, lang='en'):string {
  if(typeof value==='string') return value;
  if(value && typeof value==='object') return value[lang] || value.en || value.ar || '';
  return '';
}
export const resources=loadYamlDir('data/resources');
export const gaps=loadYamlDir('data/gaps');
export const sources=loadYamlDir('data/sources');
export const taxonomy=loadYamlFile('data/taxonomy.yaml');
