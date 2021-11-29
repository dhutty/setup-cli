const assert = require('assert');
const path = require('path');
const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const { getDownloadObject } = require('./lib/utils');

async function setup() {
  try {
    const cli = core.getInput('cli');
    const hub = core.getInput('hub') || 'github.com';
    const repo = core.getInput('repo') || process.env?.GITHUB_REPOSITORY ;
    const version = core.getInput('version') || '1.0.0';
    const dl = {
        cli: cli,
        hub: hub,
        repo: repo,
        version: version
    }
    core.info(`thing: ${dl}`);

    // Download the specific version of the tool, e.g. as a tarball/zipball
    const download = getDownloadObject(dl);
    const pathToTarball = await tc.downloadTool(download.url);

    // Extract the tarball/zipball onto host runner
    const extract = download.url.endsWith('.zip') ? tc.extractZip : tc.extractTar;
    const pathToCLI = await extract(pathToTarball);

    // Expose the tool by adding it to the PATH
    core.addPath(path.join(pathToCLI, download.binPath));
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup

if (require.main === module) {
  setup();
}
