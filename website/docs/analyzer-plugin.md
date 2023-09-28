---
sidebar_position: 1
---

# Analyzer Plugin

Flutterando Metrics can be used as a plugin for the Dart [`analyzer`](https://pub.dev/packages/analyzer). All issues produced by provided rules or anti-patterns will be highlighted in IDE.

To enable the plugin integration add `flutterando_metrics` entry to the analyzer plugins list:

```yaml title="analysis_options.yaml"
analyzer:
  plugins:
    - flutterando_metrics

flutterando_metrics: ... # package configuration
```

Plugin integration supports all IDE that are supported by the analyzer itself.

## Applying quick fixes {#applying-quick-fixes}

Rules that marked with a `has auto-fix` badge have auto-fixes available through the IDE context menu. VS Code example:

![VS Code example](../static/img/quick-fix.gif)

## Troubleshooting the plugin integration {#troubleshooting-the-plugin-integration}

If you have a problem with the plugin, refer to the [troubleshooting docs](https://github.com/Flutterando/flutterando_metrics/blob/master/TROUBLESHOOTING.md).
