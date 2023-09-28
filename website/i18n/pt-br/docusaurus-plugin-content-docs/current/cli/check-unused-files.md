# Verifique arquivos não utilizados

Verifica arquivos `*.dart` não utilizados. Para executar o comando, execute:

```sh
$ dart run flutterando_metrics:metrics check-unused-files lib

# ou para um pacote Flutter
$ flutter pub run flutterando_metrics:metrics check-unused-files lib
```

Descrição completa do comando:

```text
Uso: metrics check-unused-files [argumentos...] <diretórios>

-h, --help                                       Exibe esta informação de uso.

-r, --reporter=<console>                         O formato da saída da análise.
                                                 [console (padrão), json]

-c, --print-config                               Exibe a configuração resolvida.

    --root-folder=<./>                           Pasta raiz.
                                                 (padrão é o diretório atual)
    --sdk-path=<caminho-do-diretório>            Caminho do diretório do SDK Dart.
                                                 Deve ser fornecido apenas quando você executa o aplicativo como executável compilado (https://dart.dev/tools/dart-compile#exe) e a detecção automática do caminho do SDK Dart falha.
    --exclude=<{/**.g.dart,/**.freezed.dart}>    Caminhos de arquivos em sintaxe Glob para serem excluídos.
                                                 (padrão é "{/**.g.dart,/**.freezed.dart}")


    --no-congratulate                            Não mostrar saída mesmo quando não houver problemas.

    --[no-]fatal-unused                          Trata arquivo não utilizado encontrado como fatal.

-d, --[no-]delete-files                          Deleta todos os arquivos não utilizados.
```

## Suprimindo o comando

Para suprimir o comando, adicione `ignore_for_file: unused-files` ao início de um arquivo.

## Suporte a Monorepo

Por padrão, o comando trata todos os arquivos que são exportados do pacote como usados. Para desabilitar este comportamento, use a flag `--monorepo`. Isso pode ser útil quando todos os pacotes em seu repositório são usados apenas dentro do repositório e não são publicados no pub.

## Exemplo de saída {#output-example}

### Console {#console}

Use `--reporter=console` para habilitar este formato.

![Console](../../../../../static/img/unused-files-console-report.png)

### JSON {#json}

O repórter imprime um único objeto JSON contendo informações meta e os caminhos dos arquivos não utilizados. Use `--reporter=json` para habilitar este formato.

#### Os campos do objeto **root** são {#the-root-object-fields-are}

- `formatVersion` - um inteiro representando a versão do formato (será incrementado cada vez que o formato de serialização mudar)
- `timestamp` - a data e hora de criação do relatório no formato AAAA-MM-DD HH:MM:SS
- `unusedFiles` - um array de [arquivos não utilizados](#the-unused-files-object-fields-are)
- `automaticallyDeleted` - uma indicação de arquivos não utilizados sendo automaticamente deletados

```JSON
{
  "formatVersion": 2,
  "timestamp": "2021-04-11 14:44:42",
  "unusedFiles": [
    {
      ...
    },
    {
      ...
    },
    {
      ...
    }
  ],
  "automaticallyDeleted": false
}
```

#### Os campos do objeto **unusedFiles** são {#the-unused-files-object-fields-are}

- `path` - um caminho relativo do arquivo não utilizado

```JSON
{
  "path": "lib/src/some/file.dart",
}
```
