![image](https://ik.imagekit.io/bot95am5zi/proffy_FPyDbOrWT.png "logo")

Proffy é uma aplicação desenvolvida na Next Level Week 2 da Rocketseat onde alunos e professores poderão se conectar para ter aulas online, foram desenvolvidas a aplicação web e a aplicação mobile.

A Rocketseat montou esse projeto tendo em vista o dia nacional do profissional da educação (6 de agosto).

- - -

## Índices

1. [ Funcionalidades ](#funcionalidades)\
1.1 [Aplicação Web](#aplicação-web)\
1.2 [Aplicação mobile](#aplicação-mobile)
2. [ Tecnologias utilizadas ](#tecnologias-utilizadas)
3. [ O que eu aprendi ](#o-que-eu-aprendi)\
3.1 [ Front-end web](#front-end-web)\
3.2 [ Back-end ](#back-end)\
3.3 [ Mobile ](#mobile)
4. [ Como usar ](#como-usar)

- - -

<a name="funcionalidades"></a>

## Funcionalidades

<a name="aplicação-web"></a>

### Aplicação web

  - Escolher entre estudar ou dar aulas.
  - Cadastrar o perfil para professores, como nome, biografia, informações sobre a aula e horários disponíveis.
  - Filtrar por matéria, dia da semana e horário.
  - listar todos os professores que têm disponibilidade.
  - Entrar em contato com os professores.

<a name="aplicação-mobile"></a>

### Aplicação mobile

  - Possui as mesmas funcionalidades da aplicação web.
  - Favoritar alguns professores.
  - Visualizar os professores que foram marcados como favorito.

- - -

<a name="tecnologias-utilizadas"></a>

## Tecnologias utilizadas

  - Typescript
  - NodeJS
  - ReactJS

- - -

<a name="o-que-eu-aprendi"></a>

## O que eu aprendi

<a name="front-end-web"></a>

### Front-end web

ReactJS é uma biblioteca focada no desenvolvimento de interfaces.

Construção de **SPAs** (Single Page Applications).

**SPAs** são aplicações que não precisa ser recarregada do 0 toda vez que o usuário navega de uma tela para outra, somente os conteúdos diferentes entre as telas são recarregados. Isso nasceu de uma necessidade de melhorar a experiência do usuário final e para ter mais controle sobre a interface do projeto.

Construção de interfaces responsivas utilizando o conceito de **Mobile First**.

Esse conceito foca no desenvolvimento da interface mobile primeiro para depois adaptar para uma tela maior, como um tablet ou desktop.

Motivações: a maiorias das pessoas acessam um site principalmente pelo celular e não mais pelos computadores.

O react é uma biblioteca estritamente Frontend, assim que a aplicação é carregada, o React começa a montar a interface, ou seja ela é criada em tempo de execução.

Em ReactJS temos uma biblioteca chamada ReactDOM que faz com que o React consiga entender que a forma que ele precisa criar interfaces é com HTML.

Componentes são funções que retornam um HTML, na maioria das vezes criamos componentes para podermos reaproveitar código entre várias telas, mantendo o código mais simples.

**Importante**: 
- Nome do componente deve iniciar com letra maiúscula, caso contrário o react entenderá que é uma tag html.
- Toda vez que for trabalhar com HTML dentro do TSX/JSX é obrigatório importar o React dentro do código.
- TSX/JSX: Typescript/Javascript com XML.
- Sempre que for importar algum arquivo, se não for do node_modules, precisa passar o caminho inteiro do arquivo.

A unidade _rem_ funciona da mesma forma que porcentagem, rem significa **root** + a unidade **em**, são adaptáveis ao tamanho da tela.
Por exemplo, se o tamanho da fonte no root for 60% de 16px (tamanho padrão), estamos transformando esse valor em 9,6px, isso quer dizer que toda vez que escrevemos 1rem é a mesma coisa que 9,6px.
Trabalhar com essa unidade de medida permite alterar o tamanho de qualquer fonte, box e containers modificando apenas o valor no root.
Isso também é importante para trabalhar com acessibilidade, principalmente quando o usuário tem controle sobre o tamanho da fonte.

**Propriedades** são atributos que são enviados para o componente.

<a name="back-end"></a>

### Back-end


<a name="mobile"></a>

### Mobile

A construção de interfaces no ReactNative é com interface nativa do IOS e do Android.

- - -

<a name="como-usar"></a>

## Como usar

> Clone o repositório
```shell
$ git clone https://github.com/TakaGui/proffy.git
```
> Vá até os repositórios server, web e mobile
```shell
$ cd proffy
$ cd web
```
> Instale as dependências em cada repositório
```shell
$ npm install
```
ou
```shell
$ yarn
```