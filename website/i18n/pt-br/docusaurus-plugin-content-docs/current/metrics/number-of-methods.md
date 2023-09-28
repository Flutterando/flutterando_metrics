# Número de Métodos

O número de métodos é o total de métodos em uma classe (ou _mixin_, ou _extension_). Muitos métodos indicam uma alta complexidade.

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    number-of-methods: 10
    ...
```

Se uma classe, mixin ou extensão tiver um número excessivo de métodos, pode ser um indicador de que essa classe está fazendo muitas coisas e pode violar o Princípio da Responsabilidade Única (SRP). Refatorar a classe, dividindo-a em classes menores ou usando composição, pode ser uma boa maneira de lidar com alta complexidade e manter o código mais limpo e manutenível.
