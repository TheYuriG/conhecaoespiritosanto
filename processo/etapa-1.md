## Etapa Um: Prototipagem

Essa etapa descreve o protótipo inicial e o esqueleto visual do site.
Componentes são criados para serem utilizados repetidamente, cores e o estilo do
site são definidos e aplicados.

### Cores

As cores a serem usadas são as três cores principais da bandeira do Estado do
Espírito Santo: branco (rgb(255, 255, 255)), azul (rgb(100, 180, 240)) e rosa
(rgb(255, 174, 200)). Adicionalmente, tons acessórios são adicionados para serem
usados em botões e formulários, sendo elas azul-claro (rgb(135, 206, 200)),
rosa-claro (rgb(255, 192, 203)).

### Elementos visuais

O site conta com um painel de navegação fixo, seguido pelo conteúdo da página e
um rodapé fixo com o mapa do site na parte inferior da página. O conteúdo muda
de página para página, mas tanto o painel de navegação quanto o rodapé são
permanentes e presentes em todas as páginas.

### Inspirações para design

A primeira parte para criar algo no desenvolvimento web é ver como outros sites
de sucesso resolveram esse problema. Para a maioria dos produtos que pessoas
tentam vender, alguém já fez a mesma coisa ou algo muito parecido. Os sites a
seguir foram usados como inspiração para criar o 'layout' do nosso site:

- [Carrd template](https://7916931f43a06eb9.demo.carrd.co/)
- [Ruben Rekker](https://www.rubenrekker.com/)
- [Nelson Travel](https://www.nelson.travel/)
- [Adams And Butler](https://www.adamsandbutler.com/)

### Execução

Para começar, foi criado um componente que é responsável para gerar o Head da
página HTML. Esse passo é importante para que nosso site seja encontrado em
motores de pesquisa quando um usuário procurar por turismo no Estado do Espírito
Santo.

Depois disso, um componente responsável pelo banner de recebimento foi criado,
baseado na inspiração do Carrd listado acima.

Abaixo do banner, são listadas informações sobre os locais que temos informações
de visita, através de um componente de funções.

Por fim, é adicionado um rodapé a página que serve como mapa do site e links
para redes sociais relacionadas. Inicialmente, todos os links não são
funcionais, pois nenhuma dessas páginas foi criada ainda. Os links eventualmente
levarão às páginas de rotas, pontos de apoio e parceiros do site, além de um
template de email para sugerir essas três opções.

#### Página de erros

Um dos requisitos comuns de aplicações na web é a capacidade de lidar com erros
de acesso para URLs não existentes. Como foram criadas rotas para páginas que
ainda não existem na criação do rodapé, a apresentação de tal página de erro se
faz ainda mais necessária, portanto uma é criada.

Uma boa página de erro precisa ser clara ao informar ao usuário o que aconteceu
e que ações ele pode ter a partir dali. Como essa página de erro é para páginas
que não existem, vamos informar exatamente isso ao usuário e oferecer que ele
retorne para a página principal do site. Essa mesma página continuará a ser
usada futuramente, quando todos os links eventualmente levarem a rotas
funcionais, uma vez que o usuário ainda pode acessar, manualmente ou
erroneamente direcionado por um link quebrado, uma página que não existe.

No design inicial, a página de erro apresenta um design simples, mostrando uma
imagem de uma pessoa usando o computador, com uma expressão de surpresa. Abaixo
dessa imagem, segue o texto informando o erro e sugerindo retornar para a página
principal.
