import 'dart:isolate';

import 'package:flutterando_metrics/analyzer_plugin.dart';

void main(List<String> args, SendPort sendPort) {
  start(args, sendPort);
}
