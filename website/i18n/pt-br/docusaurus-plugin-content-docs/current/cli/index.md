# CLI

Para usar o pacote como uma ferramenta de linha de comando, execute

```sh
$ dart run flutterando_metrics:metrics <comando> lib
```
ou para um pacote Flutter

```sh
$ flutter pub run flutterando_metrics:metrics <comando> lib
```

Alternativamente, o pacote pode ser instalado globalmente

```sh
$ dart pub global activate flutterando_metrics
$ flutterando_metrics <comando> lib
```

ou para um pacote Flutter

```sh

$ flutter pub global activate flutterando_metrics
$ flutterando_metrics <comando> lib

```

Ele produzirá um resultado em um dos formatos suportados:

- Console
- GitHub
- Checkstyle
- Codeclimate
- HTML
- JSON

**Nota:** você precisa configurar a entrada `rules` no `analysis_options.yaml` para ter o relatório de regras incluído no resultado.

## Comandos disponíveis {#available-commands}

A tabela a seguir mostra quais comandos você pode usar com a ferramenta:

| Comando                    | Exemplo de uso                                                     | Descrição curta                                           |
| -------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| analyze                    | dart run flutterando_metrics:metrics analyze lib                     | Relata métricas de código, regras e violações de anti-padrões. |
| check-unnecessary-nullable | dart run flutterando_metrics:metrics check-unnecessary-nullable lib  | Verifica parâmetros nullable desnecessários.               |
| check-unused-files         | dart run flutterando_metrics:metrics check-unused-files lib          | Verifica arquivos \*.dart não utilizados.                  |
| check-unused-l10n          | dart run flutterando_metrics:metrics check-unused-l10n lib           | Verifica localizações não utilizadas em arquivos *.dart.   |
| check-unused-code          | dart run flutterando_metrics:metrics check-unused-code lib           | Verifica código não utilizado em arquivos *.dart.          |

Para obter ajuda adicional em qualquer um dos comandos, digite `dart run flutterando_metrics:metrics help <comando>`

## Uso em repositórios multi-pacote {#multi-package-repositories-usage}

Se você executar um comando a partir da raiz de um repositório multi-pacote (também conhecido como monorepo), ele encontrará os arquivos `analysis_options.yaml` corretamente.

Além disso, se você usa [Melos](https://pub.dev/packages/melos), você pode adicionar um comando personalizado ao `melos.yaml`.

```yaml title="melos.yaml"
metrics:
  run: |
    melos exec -c 1 --ignore="*example*" -- \
      flutter pub run flutterando_metrics:metrics analyze lib
  description: |
    Execute `flutterando_metrics` em todos os pacotes.
     - Nota: você também pode contar com a janela de Análise Dart / Problemas do seu IDE.
```

## Chamando o cli do seu próprio pacote com a configuração do linter

Se você tem um pacote separado com todas as configurações de linter e Flutterando metrics que é usado por seus outros pacotes e deseja chamar o Flutterando metrics de forma transitiva, adicione uma pasta `bin` com um arquivo Dart, por exemplo:

```dart metrics.dart
import 'package:flutterando_metrics/cli_runner.dart';

Future<void> main(List<String> args) async {
  await CliRunner().run(args);
}
```

Depois disso, você poderá executar o flutterando_metrics chamando o executável do seu pacote.
