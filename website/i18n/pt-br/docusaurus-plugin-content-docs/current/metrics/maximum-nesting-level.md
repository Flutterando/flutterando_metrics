# Nível Máximo de Aninhamento

**Nível Máximo de Aninhamento** refere-se ao nível máximo de blocos aninhados/estruturas de controle que estão presentes em um método (ou _função_). Código com um nível profundo de aninhamento é frequentemente complexo e difícil de manter.

Geralmente, os blocos com instruções `if`, `else`, `else if`, `do`, `while`, `for`, `switch`, `catch`, etc são parte dos loops aninhados.

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    maximum-nesting-level: 5
    ...
```

## Exemplo {#example}

```dart
void visitBlock(Block node) {
  final nestingNodesChain = <AstNode>[];

  AstNode astNode = node;
  do {
    if (astNode is Block &&
        (astNode?.parent is! BlockFunctionBody ||
            astNode?.parent?.parent is FunctionExpression ||
            astNode?.parent?.parent is ConstructorDeclaration)) {
      nestingNodesChain.add(astNode);
    }

    astNode = astNode.parent;
  } while (astNode.parent != _functionNode);

  if (nestingNodesChain.length > _deepestNestingNodesChain.length) {
    _deepestNestingNodesChain = nestingNodesChain;
  }

  super.visitBlock(node);
}
```

**Nível Máximo de Aninhamento** para a função do exemplo é **3**.
