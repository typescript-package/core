<!-- <a href="https://www.typescriptlang.org/">
  <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257106/file-type-typescript-official-icon-md.png" width="20%" />
</a> -->

## typescript-package/core

Core package.

<!-- npm badge -->
[![npm version][typescript-package-npm-badge-svg]][typescript-package-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][typescript-package-badge-issues]][typescript-package-issues]
[![GitHub forks][typescript-package-badge-forks]][typescript-package-forks]
[![GitHub stars][typescript-package-badge-stars]][typescript-package-stars]
[![GitHub license][typescript-package-badge-license]][typescript-package-license]

<br>

## Table of contents

* [Installation](#installation)
* [Api](#api)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

## Installation

```bash
npm install @typescript-package/core
```

## Api

```typescript
import {
  resultCallback,
  typeOf
} from '@typescript-package/core';
```

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][typescript-package-license])

<!-- This package: typescript-package  -->
  <!-- GitHub: badges -->
  [typescript-package-badge-issues]: https://img.shields.io/github/issues/angular-package/typescript-package
  [typescript-package-badge-forks]: https://img.shields.io/github/forks/angular-package/typescript-package
  [typescript-package-badge-stars]: https://img.shields.io/github/stars/angular-package/typescript-package
  [typescript-package-badge-license]: https://img.shields.io/github/license/angular-package/typescript-package
  <!-- GitHub: badges links -->
  [typescript-package-issues]: https://github.com/angular-package/typescript-package/issues
  [typescript-package-forks]: https://github.com/angular-package/typescript-package/network
  [typescript-package-license]: https://github.com/angular-package/typescript-package/blob/master/LICENSE
  [typescript-package-stars]: https://github.com/angular-package/typescript-package/stargazers
<!-- This package -->

<!-- Package: typescript-package -->
  <!-- npm -->
  [typescript-package-npm-badge-svg]: https://badge.fury.io/js/%40typescript-package%2Ftypescript-package.svg
  [typescript-package-npm-badge]: https://badge.fury.io/js/%40typescript-package%2Ftypescript-package

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
