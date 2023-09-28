# Índice de Manutenibilidade

`Índice de Manutenibilidade` é uma métrica de software que mede quão manutenível (fácil de suportar e alterar) o código-fonte é. O índice de manutenibilidade é calculado como uma fórmula fatorada composta por `Source Lines Of Code`, `Cyclomatic Complexity` e `Halstead Volume`.

A fórmula original:

```dart
MI = 171 − 5.2 * log(HALVOL) − 0.23 * log(CYCLO) − 16.2 * log(SLOC)
```

Usamos a versão de Microsoft Visual Studio com uma escala deslocada (de 0 a 100):

```dart
MI = max(0, (171 − 5.2 * log(HALVOL) − 0.23 * log(CYCLO) − 16.2 * log(SLOC)) * 100 / 171)
```

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    maintainability-index: 50
    ...
```

## Exemplo {#example}

```dart
MetricComputationResult<int> computeImplementation(
  Declaration node,
  Iterable<ScopedClassDeclaration> classDeclarations,
  Iterable<ScopedFunctionDeclaration> functionDeclarations,
  InternalResolvedUnitResult source,
  Iterable<MetricValue> otherMetricsValues,
) {
  final halVol = otherMetricsValues.firstWhere(
    (value) => value.metricsId == HalsteadVolumeMetric.metricId,
  );

  final cyclomatic = otherMetricsValues.firstWhere(
    (value) => value.metricsId == CyclomaticComplexityMetric.metricId,
  );

  final sloc = otherMetricsValues.firstWhere(
    (value) => value.metricsId == SourceLinesOfCodeMetric.metricId,
  );

  final halVolScale = log(max(1, halVol.value));
  final cycloScale = cyclomatic.value;
  final slocScale = log(max(1, sloc.value));

  final indiceDeManutenibilidade =
      (171 - halVolScale * 5.2 - cycloScale * 0.23 - slocScale * 16.2) / 171;

  return MetricComputationResult(
    value: (indiceDeManutenibilidade * 100).clamp(0, 100).ceil(),
  );
}
```

**Índice de Manutenibilidade** para a função do exemplo é **56**.

> **Nota:** O Índice de Manutenibilidade ainda é uma métrica muito experimental e não deve ser levado tão a sério quanto as outras métricas.
