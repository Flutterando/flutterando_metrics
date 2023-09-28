---

sidebar_label: 'Instalação e Uso'
sidebar_position: 1
---

# Instalando o pacote

Para instalar o pacote como uma dependência de desenvolvimento, execute

```sh
$ dart pub add --dev flutterando_metrics
```

ou para um pacote Flutter

```sh
$ flutter pub add --dev flutterando_metrics
```

ou adicione manualmente ao `pubspec.yaml`

```yaml title="pubspec.yaml"
environment:
  sdk: '>=2.18.0 <3.0.0'

dev_dependencies:
  flutterando_metrics: ^5.5.0
```

e depois execute

```sh
$ dart pub get
```

ou para um pacote Flutter

```sh
$ flutter pub get
```

## Uso {#usage}


### Interface de Linha de Comando {#cli}

Para usar o Flutterando Metrics como uma ferramenta de linha de comando, consulte a [seção de documentação da Interface de Linha de Comando](../cli).

### Biblioteca {#library}

Para usar o Flutterando Metrics como uma biblioteca, consulte este [exemplo](https://github.com/Flutterando/flutterando-metrics/blob/master/example/lib/main.dart).
