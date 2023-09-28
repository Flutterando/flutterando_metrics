---
sidebar_label: 'Installation and Usage'
sidebar_position: 1
---

# Installing the package

To install the package as a dev dependency run

```sh
$ dart pub add --dev flutterando_metrics

# or for a Flutter package
$ flutter pub add --dev flutterando_metrics
```

## OR

add it manually to `pubspec.yaml`

```yaml title="pubspec.yaml"
environment:
  sdk: '>=2.18.0 <3.0.0'

dev_dependencies:
  flutterando_metrics: ^5.5.0
```

and then run

```sh
$ dart pub get

# or for a Flutter package
$ flutter pub get
```

## Usage {#usage}


### CLI {#cli}

To use Flutterando Metrics as a command-line tool refer to the [Command Line Interface documentation section](../cli).

### Library {#library}

To use Flutterando Metrics as a library refer to this [example](https://github.com/Flutterando/flutterando_metrics/blob/master/example/lib/main.dart).
