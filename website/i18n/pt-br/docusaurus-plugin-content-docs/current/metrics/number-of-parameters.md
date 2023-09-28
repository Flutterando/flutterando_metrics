# Número de Parâmetros

O número de parâmetros em um método ou função indica quantas entradas ele recebe. Embora às vezes seja necessário ter muitos parâmetros, um grande número pode sugerir que o método faz muitas coisas ou que os parâmetros poderiam ser organizados em estruturas ou classes de dados mais coesas.

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    number-of-parameters: 5
    ...
```

## Exemplo {#example}

```dart
void createUser(String name, int age, String email, String password, String address) {
  // Alguma lógica aqui
}

```

**Número de Parâmetros** para a função exemplo é **5**.

É aconselhável reconsiderar o design se o seu método ou função precisar de mais do que o limite especificado. Por exemplo, na programação orientada a objetos, você pode usar uma classe de dados ou uma estrutura para agrupar parâmetros. Isso pode tornar a assinatura da função mais clara e gerenciável. No exemplo acima, você pode ter uma classe `UserDetails` com campos para `name`, `age`, `email`, `password` e `address`, e então a função receberia apenas um objeto `UserDetails` como seu parâmetro.
