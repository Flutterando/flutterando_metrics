[![Build Status](https://shields.io/github/actions/workflow/status/Flutterando/flutterando-metrics/package_analyze.yaml?logo=github&logoColor=white&branch=master)](https://github.com/Flutterando/flutterando-metrics/)
[![Coverage Status](https://img.shields.io/codecov/c/github/Flutterando/flutterando-metrics?logo=codecov&logoColor=white)](https://codecov.io/gh/Flutterando/flutterando-metrics/)
[![Pub Version](https://img.shields.io/pub/v/flutterando_metrics?logo=dart&logoColor=white)](https://pub.dev/packages/flutterando_metrics/)
[![Dart SDK Version](https://badgen.net/pub/sdk-version/flutterando_metrics)](https://pub.dev/packages/flutterando_metrics/)
[![License](https://img.shields.io/github/license/Flutterando/flutterando-metrics)](https://github.com/Flutterando/flutterando-metrics/blob/master/LICENSE)
[![Pub popularity](https://badgen.net/pub/popularity/flutterando_metrics)](https://pub.dev/packages/flutterando_metrics/score)
[![GitHub popularity](https://img.shields.io/github/stars/Flutterando/flutterando-metrics?logo=github&logoColor=white)](https://github.com/Flutterando/flutterando-metrics/stargazers)

<img
  src="https://raw.githubusercontent.com/Flutterando/flutterando-metrics/master/assets/logo.svg"
  alt="Flutterando Metrics logo"
  height="150" width="150"
  align="right">

# Flutterando Metrics

**Note: you can find [the full documentation on the website](https://metrics.flutterando.com.br/docs/individuals/getting-started/)**

[Configuration](https://metrics.flutterando.com.br/docs/individuals/configuration/) |
[Metrics](https://metrics.flutterando.com.br/docs/individuals/metrics/) |
[Anti-patterns](https://metrics.flutterando.com.br/docs/individuals/anti-patterns/)



Flutterando Metrics is a toolkit that helps you identify and fix problems in your Dart and Flutter code. These problems can range from potential runtime bugs and violations of best practices to styling issues. Flutterando Metrics includes over 70 built-in rules to validate your code against various expectations, and you can customize these rules to fit your specific needs.

- Reports [code metrics](https://metrics.flutterando.com.br/docs/individuals/metrics/)
- Checks for [anti-patterns](https://metrics.flutterando.com.br/docs/individuals/anti-patterns/)
- Checks [unused `*.dart` files](https://metrics.flutterando.com.br/docs/individuals/cli/check-unused-files/)
- Checks [unused l10n](https://metrics.flutterando.com.br/docs/individuals/cli/check-unused-l10n/)
- Checks [unnecessary nullable parameters](https://metrics.flutterando.com.br/docs/individuals/cli/check-unnecessary-nullable/)
- Can be used as [CLI](https://metrics.flutterando.com.br/docs/individuals/cli/)

## Links

- See [CHANGELOG.md](./CHANGELOG.md) for major/breaking updates, and [releases](https://github.com/Flutterando/flutterando-metrics/releases) for a detailed version history.
- To contribute, please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.
- Please [open an issue](https://github.com/Flutterando/flutterando-metrics/issues/new?assignees=dkrutskikh&labels=question&template=question.md&title=%5BQuestion%5D+) if anything is missing or unclear in this documentation.

## Installation

```sh
$ dart pub add --dev flutterando_metrics

# or for a Flutter package
$ flutter pub add --dev flutterando_metrics
```

## Basic configuration

Add configuration to `analysis_options.yaml` and reload IDE to allow the analyzer to discover the plugin config.

You can read more about the configuration [on the website](https://metrics.flutterando.com.br/docs/individuals/configuration/).



### Basic config

```yaml title="analysis_options.yaml"
analyzer:
  plugins:
    - flutterando_metrics

flutterando_metrics:
  metrics:
    cyclomatic-complexity: 20
    number-of-parameters: 4
    maximum-nesting-level: 5
  metrics-exclude:
    - test/**

```

## Usage

### CLI

The package can be used as CLI and supports multiple commands:

| Command            | Example of use                                            | Short description                                         |
| ------------------ | --------------------------------------------------------- | --------------------------------------------------------- |
| analyze            | dart run flutterando_metrics:metrics analyze lib            | Reports code metrics anti-patterns violations. |
| check-unnecessary-nullable | dart run flutterando_metrics:metrics check-unnecessary-nullable lib | Checks unnecessary nullable parameters in functions, methods, constructors. |
| check-unused-files | dart run flutterando_metrics:metrics check-unused-files lib | Checks unused \*.dart files.                              |
| check-unused-l10n  | dart run flutterando_metrics:metrics check-unused-l10n lib  | Check unused localization in \*.dart files.               |
| check-unused-code  | dart run flutterando_metrics:metrics check-unused-code lib  | Checks unused code in \*.dart files.                      |

For additional help on any of the commands, enter `dart run flutterando_metrics:metrics help <command>`

**Note:** if you're setting up Flutterando Metrics for multi-package repository, check out [this website section](https://metrics.flutterando.com.br/docs/individuals/cli#multi-package-repositories-usage/).

#### Analyze

Reports code metrics and anti-patterns violations. To execute the command, run

```sh
$ dart run flutterando_metrics:metrics analyze lib

# or for a Flutter package
$ flutter pub run flutterando_metrics:metrics analyze lib
```

It will produce a result in one of the format:

- Console
- GitHub
- Codeclimate
- HTML
- JSON

Console report example:

![Console report example](https://raw.githubusercontent.com/Flutterando/flutterando-metrics/master/assets/analyze-console-report.png)

#### Check unnecessary nullable parameters

Checks unnecessary nullable parameters in functions, methods, constructors. To execute the command, run

```sh
$ dart run flutterando_metrics:metrics check-unnecessary-nullable lib

# or for a Flutter package
$ flutter pub run flutterando_metrics:metrics check-unnecessary-nullable lib
```

It will produce a result in one of the format:

- Console
- JSON

Console report example:

![Console report example](https://raw.githubusercontent.com/Flutterando/flutterando-metrics/master/assets/unnecessary-nullable-console-report.png)

#### Check unused files

Checks unused `*.dart` files. To execute the command, run

```sh
$ dart run flutterando_metrics:metrics check-unused-files lib

# or for a Flutter package
$ flutter pub run flutterando_metrics:metrics check-unused-files lib
```

It will produce a result in one of the format:

- Console
- JSON

Console report example:

![Console report example](https://raw.githubusercontent.com/Flutterando/flutterando-metrics/master/assets/unused-files-console-report.png)

#### Check unused localization

Checks unused Dart class members, that encapsulates the app’s localized values.

An example of such class:

```dart
class ClassWithLocalization {
  String get title {
    return Intl.message(
      'Hello World',
      name: 'title',
      desc: 'Title for the Demo application',
      locale: localeName,
    );
  }
}
```

To execute the command, run

```sh
$ dart run flutterando_metrics:metrics check-unused-l10n lib

# or for a Flutter package
$ flutter pub run flutterando_metrics:metrics check-unused-l10n lib
```

It will produce a result in one of the format:

- Console
- JSON

Console report example:

![Console report example](https://raw.githubusercontent.com/Flutterando/flutterando-metrics/master/assets/unused-l10n-console-report.png)

#### Check unused code

Checks unused code in `*.dart` files. To execute the command, run

```sh
$ dart run flutterando_metrics:metrics check-unused-code lib

# or for a Flutter package
$ flutter pub run flutterando_metrics:metrics check-unused-code lib
```

It will produce a result in one of the format:

- Console
- JSON

Console report example:

![Console report example](https://raw.githubusercontent.com/Flutterando/flutterando-metrics/master/assets/unused-code-console-report.png)

## Troubleshooting

Please read [the following guide](./TROUBLESHOOTING.md) if the plugin is not working as you'd expect it to work.

## Contributing

If you are interested in contributing, please check out the [contribution guidelines](https://github.com/Flutterando/flutterando-metrics/blob/master/CONTRIBUTING.md). Feedback and contributions are welcome!


## LICENSE

[MIT](./LICENSE)
