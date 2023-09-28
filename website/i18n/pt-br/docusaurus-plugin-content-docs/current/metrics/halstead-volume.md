# Volume de Halstead

As métricas de Halstead são baseadas nos números de operadores e operandos.

Primeiro, precisamos decidir o que entendemos por operadores e operandos. Operadores e operandos são definidos por sua relação entre si - em geral, um operador realiza uma ação e um operando participa dessa ação. Um exemplo simples de um operador é algo que realiza uma operação usando zero ou mais operandos. Um operando é algo que pode participar de uma interação com zero ou mais operadores. Vamos olhar para o exemplo:

```dart
int x = x + 1;
```

`x` ocorre duas vezes, então se pegarmos `int`, `x` e `1` como operandos e `=` e `+` como operadores, temos 4 operandos (3 únicos) e 2 operadores (2 únicos). Tomando **OP** como o número de operadores, **OD** como o número de operandos, **UOP** como o número de operadores únicos e **UOD** como o número de operandos únicos, definimos as métricas primárias de Halstead como:

* O Comprimento de Halstead (LTH) é: `OP + OD`
* O Vocabulário de Halstead (VOC) é: `UOP + UOD`

O Volume de Halstead é baseado no Comprimento e no Vocabulário.

* Volume de Halstead (VOL) é: `LTH * log2(VOC)`

Você pode ver isso como a massa do código - quanto informação o leitor do código tem que absorver para entender seu significado. A maior influência na métrica `Volume` é o `Comprimento de Halstead`, que causa um aumento linear no Volume, ou seja, dobrar o Comprimento dobrará o Volume. No caso do Vocabulário, o aumento é logarítmico. Por exemplo, com um Comprimento de 10 e um Vocabulário de 16, o Volume é 40. Se dobrarmos o Comprimento, o Volume dobra para 80. Se mantivermos o Comprimento em 10 e dobrarmos o Vocabulário para 32, obtemos um volume de 50.

## Exemplo de Configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    halstead-volume: 150
    ...
```

## Exemplo {#example}

```dart
MetricComputationResult<double> computeImplementation(
  Declaration node,
  Iterable<ScopedClassDeclaration> classDeclarations,
  Iterable<ScopedFunctionDeclaration> functionDeclarations,
  InternalResolvedUnitResult source,
) {
  final visitor = HalsteadVolumeAstVisitor();
  node.visitChildren(visitor);

  final lth = visitor.operators + visitor.operands;

  final voc = visitor.uniqueOperators + visitor.uniqueOperands;

  final vol = lth * _log2(voc);

  return MetricComputationResult<double>(value: vol);
}
```

O **Volume de Halstead** para a função exemplo é **138**.
