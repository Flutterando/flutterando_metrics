# Peso de uma Classe

Número de métodos públicos **funcionais** dividido pelo número total de métodos públicos.

Esta métrica tenta quantificar se a interface da classe medida (ou _mixin_, ou _extensão_) revela mais dados do que comportamento. Valores baixos indicam que a classe revela muito mais dados do que comportamento, o que é um sinal de má encapsulação.

Nossa definição de método **funcional** exclui getters e setters.

## Exemplo de configuração {#config-example}

```yaml
flutterando_metrics:
  ...
  metrics:
    ...
    weight-of-class: 0.33
    ...
```
