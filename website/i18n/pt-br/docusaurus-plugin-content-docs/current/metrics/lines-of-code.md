# Linhas de Código

Linhas de código representam o número total de linhas em um método (ou _função_). Linhas de comentários e linhas em branco também são contadas. Um método mais longo é frequentemente difícil de manter, tende a fazer muitas coisas e pode dificultar o entendimento do que está acontecendo.

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    lines-of-code: 100
    ...
```

## Exemplo {#example}

```dart
  MetricComputationResult<int> computeImplementation(
    Declaration node,
    Iterable<ScopedClassDeclaration> classDeclarations,
    Iterable<ScopedFunctionDeclaration> functionDeclarations,
    InternalResolvedUnitResult source,
  ) =>
      MetricComputationResult(
        value: 1 +
            source.lineInfo.getLocation(node.endToken.offset).lineNumber -
            source.lineInfo.getLocation(node.beginToken.offset).lineNumber,
      );
```

**Linhas de Código** para a função do exemplo é **11**.
