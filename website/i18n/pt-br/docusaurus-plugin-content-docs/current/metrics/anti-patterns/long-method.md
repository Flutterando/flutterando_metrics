# Método Longo

Blocos longos de código são difíceis de reutilizar e entender porque geralmente são responsáveis por mais de uma coisa. Separar esses em vários blocos curtos com nomes adequados ajuda a reutilizar o seu código e entender melhor sem ler o corpo dos métodos.

Linhas de código com comentários de esclarecimento geralmente são um sinal de possível extração de método, porque você pode nomear o método extraído de uma maneira que cubra a descrição do comentário e, em seguida, remover o comentário. Mesmo comentários para uma linha são um sinal de extração de método.

* Para encurtar um método, basta aplicar o comando **Extract Method**.
* Se variáveis locais e parâmetros impedem uma extração de método, aplique os comandos **Replace Temp with Query**, **Introduce Parameter Object** ou **Preserve Whole Object**.
* Declarações condicionais ou loops indicam a possibilidade de extração de método. Use o comando **Decompose Conditional** para expressões condicionais e **Extract Method** para loops.

## Estratégia de detecção {#detection-strategy}

Usa o valor de [`Source lines of Code`](../metrics/source-lines-of-code.md) e compara-o com o limite configurado.

## Exceções {#exceptions}

* Método de construção de widget Flutter.

---

P.S. Usamos a terminologia do livro **Refactoring Improving the Design of Existing Code** de *Martin Fowler*.
