# Complexidade Ciclomática

Número de caminhos linearmente independentes através de um bloco de código. Operadores condicionais ou loops aumentam o número de caminhos em um código. Quanto mais caminhos, maior o número de casos de teste que precisam ser implementados. A métrica segue a definição original de McCabe:

- Métodos têm uma complexidade base de 1.
- cada declaração de fluxo de controle (`if`, `catch`, `throw`, `do`, `while`, `for`, `break`, `continue`) e expressão condicional (`? ... : ...`) aumentam a complexidade.
- `else`, `finally` e `default` não contam.
- alguns operadores como `&&`, `||`, `?.`, `??` e `??=` também aumentam a complexidade.

## Exemplo de Configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    cyclomatic-complexity: 20
    ...
```

## Exemplo {#example}

```dart
void visitBlock(Token firstToken, Token lastToken) {
  const tokenTypes = [
    TokenType.AMPERSAND_AMPERSAND,
    TokenType.BAR_BAR,
    TokenType.QUESTION_PERIOD,
    TokenType.QUESTION_QUESTION,
    TokenType.QUESTION_QUESTION_EQ,
  ];

  var token = firstToken;
  while (token != lastToken) {
    if (token.matchesAny(tokenTypes)) {
      _increaseComplexity(token);
    }

    token = token.next;
  }
}
```

A **Complexidade Ciclomática** para a função exemplo é **3**.
