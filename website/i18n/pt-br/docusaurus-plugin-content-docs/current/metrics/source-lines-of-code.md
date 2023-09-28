# Linhas de Código Fonte

**Linhas de Código Fonte** é um número aproximado de linhas de código fonte em uma função ou método. Linhas em branco ou comentários não são contados.

Esta métrica é usada para medir o tamanho de um programa de computador, contando o número de linhas no texto do código fonte do programa. **SLOC** é tipicamente usado para prever a quantidade de esforço que será necessária para desenvolver um programa, bem como para estimar a produtividade ou manutenibilidade da programação uma vez que o software é produzido.

## Usado para {#used-for}

* [Método Longo](../metrics/anti-patterns/long-method.md)

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    source-lines-of-code: 50
    ...
```

## Exemplo {#example}

```dart
MetricComputationResult<int> computeImplementation(
  Declaration node,
  Iterable<ScopedClassDeclaration> classDeclarations,
  Iterable<ScopedFunctionDeclaration> functionDeclarations,
  InternalResolvedUnitResult source,
) {
  final visitor = SourceCodeVisitor(source.lineInfo);
  node.visitChildren(visitor);

  return MetricComputationResult(
    value: visitor.linesWithCode.length,
    context: _context(node, visitor.linesWithCode, source),
  );
}
```

**Linhas de Código Fonte** para a função do exemplo é **6**.
