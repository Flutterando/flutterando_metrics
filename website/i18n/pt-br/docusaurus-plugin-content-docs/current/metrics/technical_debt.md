# Dívida Técnica

O custo do retrabalho adicional causado pela escolha de uma solução fácil (limitada) agora, em vez de usar uma abordagem melhor que levaria mais tempo. A métrica contabiliza a dívida com base no padrão:

- comentário todo

```dart
void fooBar() {
  // TODO: precisa migrar para o logger
  debugPrint('log');
}
```

- comentário suprimindo regras

```dart
// ignore_for_file: unused_local_variable

void fooBar() {
  // ignore: invalid_assignment
  int x = '';
}
```

- conversão para `dynamic`

```dart
void fooBar() {
  final a = Foo() as dynamic;
}
```

- comentário de anotação `Deprecated`

```dart
@Deprecated('Use a classe Bar')
class Foo {}
```

- Arquivos não migrados para nullsafety

```dart
// @dart=2.9

void fooBar() {
  debugPrint('log');
}
```

Você pode configurar o custo de cada caso suportado e especificar o tipo de unidade da dívida.

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    technical-debt:
      threshold: 1
      todo-cost: 161
      ignore-cost: 320
      ignore-for-file-cost: 396
      as-dynamic-cost: 322
      deprecated-annotations-cost: 37
      file-nullsafety-migration-cost: 41
      unit-type: "USD"
    ...
```

## Exemplo {#example}

```dart
// @dart=2.9

// ignore_for_file: always_declare_return_types

@Deprecated('Use a classe Bar')
class Foo {}

// TODO(desenvolvedor): comentário estilo flutter
void fooBar() {
  // ignore: always_put_control_body_on_new_line
  final a = Foo() as dynamic;
}

```

**Dívida Técnica** para a função do exemplo é **955 USD**.
