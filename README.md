# :gear: `setup-cli` ![](https://github.com/dhutty/setup-cli/workflows/Tests/badge.svg)
> A generic GitHub Action, to install a CLI (or other binary) into GitHub's hosted Actions runners, using JavaScript.

## About
This action, which was based upon the GitHub's own [demonstration codebase](https://github.com/github-developer/example-setup-gh), sets up a specified binary CLI tool, on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the specified CLI on the runner environment.

## Usage

As an example, let's setup the [`fetch`][1] CLI from the GitHub repository.

A specific version of the CLI can be installed (optional, defaults to `1.0.0`):

```yaml
steps:
- uses: dhutty/setup-cli@v1
  with:
    cli: fetch
    repo: https://github.com/gruntwork-io/fetch
    version:
      0.4.2
```

## Inputs
The actions supports the following inputs:

* `cli`: (required) The name of the cli to install
* `repo`: (required) The repository which contains the release of the cli
- `version`: The version of the cli to install

## Limitations

Currently this is only tested with GitHub based git repositories and GitHub Releases. It might work with others such as gitlab and if it does not yet, it would be easy to modify to do so.

## Development/Contributing

Please see [CONTRIBUTING][./CONTRIBUTING.md].

## License
[MIT](LICENSE).

[1]: https://github.com/gruntwork-io/fetch
