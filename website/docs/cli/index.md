# CLI

To use the package as a command-line tool, run

```sh
$ dart run flutterando_metrics:metrics <command> lib

# or for a Flutter package
$ flutter pub run flutterando_metrics:metrics <command> lib
```

Alternatively, the package can be installed globally

```sh
$ dart pub global activate flutterando_metrics
$ metrics <command> lib

# or for a Flutter package
$ flutter pub global activate flutterando_metrics
$ metrics <command> lib
```

It will produce a result in one of the supported formats:

- Console
- GitHub
- Checkstyle
- Codeclimate
- HTML
- JSON

**Note:** you need to configure `rules` entry in the `analysis_options.yaml` to have rules report included into the result.

## Available commands {#available-commands}

The following table shows which commands you can use with the tool:

| Command                    | Example of use                                                    | Short description                                         |
| -------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------- |
| analyze                    | dart run flutterando_metrics:metrics analyze lib                    | Reports code metrics, rules and anti-patterns violations. |
| check-unnecessary-nullable | dart run flutterando_metrics:metrics check-unnecessary-nullable lib | Checks unnecessary nullable parameters.                   |
| check-unused-files         | dart run flutterando_metrics:metrics check-unused-files lib         | Checks unused \*.dart files.                              |
| check-unused-l10n          | dart run flutterando_metrics:metrics check-unused-l10n lib          | Checks unused localization in *.dart files.               |
| check-unused-code          | dart run flutterando_metrics:metrics check-unused-code lib          | Checks unused code in *.dart files.                       |

For additional help on any of the commands, enter `dart run flutterando_metrics:metrics help <command>`

## Multi-package repositories usage {#multi-package-repositories-usage}

If you run a command from the root of a multi-package repository (aka monorepo), it'll pick up `analysis_options.yaml` files correctly.

Additionally, if you use [Melos](https://pub.dev/packages/melos), you can add custom command to the `melos.yaml`.

```yaml title="melos.yaml"
metrics:
  run: |
    melos exec -c 1 --ignore="*example*" -- \
      flutter pub run flutterando_metrics:metrics analyze lib
  description: |
    Run `flutterando_metrics` in all packages.
     - Note: you can also rely on your IDEs Dart Analysis / Issues window.
```

## Calling the cli from your own package with the linter configuration

If you have a separate package with all the linter and Flutterando metrics configurations which is used by your other packages and you want to call Flutterando metrics transitively add a `bin` folder with a Dart file, for example

```dart metrics.dart
import 'package:flutterando_metrics/cli_runner.dart';

Future<void> main(List<String> args) async {
  await CliRunner().run(args);
}
```

After that you will be able to run Flutterando metrics by calling your package executable.
