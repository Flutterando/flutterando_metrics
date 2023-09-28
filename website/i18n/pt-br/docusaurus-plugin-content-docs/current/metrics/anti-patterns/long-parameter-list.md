# Lista Longa de Parâmetros

Listas longas de parâmetros são difíceis de entender e usar. Agrupá-los em um objeto permite agrupar parâmetros e alterar os dados transferidos apenas pela modificação do objeto. Quando você está trabalhando com objetos, deve passar o suficiente para que o método possa obter os dados de que precisa.

* Use **Replace Parameter with Method** quando puder obter dados chamando um método de um objeto.
* **Preserve Whole Object** permite pegar um grupo de argumentos e substituí-los pelo objeto.
* Use **Introduce Parameter Object** se tiver vários argumentos sem um objeto de agrupamento lógico.

***

P.S. Usamos a terminologia do livro **Refactoring Improving the Design of Existing Code** de *Martin Fowler*.
