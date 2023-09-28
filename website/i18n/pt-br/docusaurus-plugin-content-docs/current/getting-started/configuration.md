---

sidebar_position: 2
---

# Configuração

Para configurar o pacote, adicione uma entrada `flutterando_metrics` ao `analysis_options.yaml`. Esta configuração é usada tanto pelo CLI quanto pelo plugin do analisador.

```yaml title="analysis_options.yaml"
flutterando_metrics:
  extends:
    - ... # configura a lista de configurações predefinidas
  metrics:
    - ... # configura a lista de métricas relatadas
  metrics-exclude:
    - ... # configura a lista de arquivos que devem ser ignorados pelas métricas
  rules:
    - ... # configura a lista de regras
  rules-exclude:
    - ... # configura a lista de arquivos que devem ser ignorados pelas regras
  anti-patterns:
    - ... # configura a lista de anti-padrões
```

Exemplo básico de configuração:

```yaml title="analysis_options.yaml"
flutterando_metrics:
  metrics:
    cyclomatic-complexity: 20
    number-of-parameters: 4
    maximum-nesting-level: 5
  metrics-exclude:
    - test/**
  rules:
    - newline-before-return
    - no-boolean-literal-compare
    - no-empty-block
    - prefer-trailing-comma
    - prefer-conditional-expressions
    - no-equal-then-else
  anti-patterns:
    - long-method
    - long-parameter-list
```

## Estendendo uma configuração predefinida

Para estender uma predefinição existente, adicione uma referência ao arquivo `.yaml` com a predefinição na entrada `extends`. Por exemplo:

```yaml title="analysis_options.yaml"
flutterando_metrics:
  extends:
    - package:flutterando_metrics/presets/all.yaml
  rules:
    - arguments-ordering:
        child-last: true
    - avoid-banned-imports: false
```

Todas as predefinições [podem ser encontradas aqui](https://github.com/Flutterando/flutterando_metrics/tree/master/lib/presets).

## Configurando uma entrada de métrica {#configuring-metrics-entry}

Para habilitar uma métrica, adicione seu ID à entrada `metrics` no `analysis_options.yaml`. Todas as métricas podem receber um valor de limite. Se nenhum valor for fornecido, o valor padrão será usado.

## Configurando uma entrada de exclusão de métrica {#configuring-a-metrics-exclude-entry}

Para excluir arquivos de um relatório de métricas, forneça uma lista de expressões regulares para arquivos ignorados. Por exemplo:

```yaml title="analysis_options.yaml"
flutterando_metrics:
  metrics-exclude:
    - test/**
    - lib/src/some_file.dart
```

## Configurando uma entrada de regra {#configuring-a-rules-entry}

Para habilitar uma regra, adicione seu ID à entrada `rules`. Todas as regras têm uma severidade que pode ser substituída pela entrada de configuração `severity`. Por exemplo,

```yaml title="analysis_options.yaml"
flutterando_metrics:
  rules:
    - newline-before-return:
        severity: style
```

definirá a severidade para `style`. Valores de severidade disponíveis:

- none
- style
- performance
- warning
- error

Regras com um distintivo `configurable` têm configuração adicional; consulte seus documentos para obter mais informações.

## Configurando uma entrada de exclusão de regra {#configuring-a-rules-exclude-entry}

Para excluir arquivos de uma análise de regras, forneça uma lista de expressões regulares para arquivos ignorados. Por exemplo:

```yaml title="analysis_options.yaml"
flutterando_metrics:
  rules-exclude:
    - test/**
    - lib/src/some_file.dart
```

## Configurando uma entrada de anti-padrão {#configuring-an-anti-pattern-entry}

Para habilitar um anti-padrão, adicione seu ID à entrada `anti-patterns`. Todos os anti-padrões têm uma severidade que pode ser substituída pela entrada de configuração `severity`. Por exemplo,

```yaml title="analysis_options.yaml"
flutterando_metrics:
  anti-patterns:
    - long-method:
        severity: warning
```

definirá a severidade para `warning`.

## Ignorando uma regra ou anti-padrão {#ignoring-a-rule-or-anti-pattern}

Se um aviso específico de regra ou anti-padrão deve ser ignorado, ele pode ser sinalizado com um comentário. Por exemplo,

```dart
// ignore: no-empty-block
void emptyFunction() {}
```

informa ao analisador para ignorar esta instância do aviso `no-empty-block`.

Comentários de fim de linha também são suportados. O seguinte comunica a mesma coisa:

```dart
void emptyFunction() {} // ignore: no-empty-block
```

Para ignorar uma regra em todo o arquivo, use o comentário `ignore_for_file`. Por exemplo,

```dart
// ignore_for_file: no-empty-block
...

void emptyFunction() {}
```

informa ao analisador para ignorar todas as ocorrências do aviso kebab-case-types neste arquivo.

É a mesma abordagem que o pacote dart linter [usa](https://github.com/dart-lang/linter#usage).

Além disso, a entrada `exclude` para a configuração do analisador pode ser usada para ignorar arquivos. Por exemplo,

```yaml title="analysis_options.yaml"
analyzer:
  exclude:
    - "example/**"
    - "build/**"
    - "**/*.g.dart"
    - "**/*.freezed.dart"
```

funcionará tanto para o analisador quanto para este plugin.

Se você deseja que uma regra específica ignore arquivos, você pode configurar a entrada `exclude` para ela. Por exemplo,

```yaml title="analysis_options.yaml"
flutterando_metrics:
  rules:
    - no-equal-arguments:
        exclude:
          - test/**
```

e exemplo semelhante para anti-padrão,

```yaml title="analysis_options.yaml"
flutterando_metrics:
  anti-patterns:
    - long-method:
        exclude:
          - test/**
```
