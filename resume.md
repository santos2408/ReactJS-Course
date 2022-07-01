
# Módulo 1 do Curso

## React Básico

- Funções iniciadas por letra maiúscula indicam que são componentes. Dentro 
desses componentes podemos escrever em JSX, ou seja, utilizar 'html' dentro do 
arquivo JS. Para interpolarmos expressões JS dentro do JSX devemos inserir dentro 
de chaves. Ex: <a className="azul" alt={`Texto escrito com template string`}></a>

- Os componentes só podem retornar um único elemento pai, ou seja, ele deve ter 
um elemento raiz que agrupa todos os outros e só esse elemento raiz pode ser 
retornado. Para inserirmos mais de um elemento pai podemos utilizar o chamado 
'fragmento': <></>, que é uma tag vazia que não cria nenhum HTML mas permite 
inserir mais de um elemento 'raiz' dentro do componente. Ele pode ser invocado 
também através de <React.Fragment />.

- Dentro do componente, como estamos escrevendo JSX, ou seja, estamos dentro de 
um arquivo JS, algumas nomenclaturas podem ser palavras reservadas do JS como 
o atribute 'class' do HTML, portanto o atribute 'class' dentro do JSX será 
chamado de 'className'.

- Para usarmos um componente em outro local do projeto, ao final da declaração 
dele devemos inserir um 'export default 'nome do componente'.
Ex: export default Navbar

- Para utilizar o componente devemos declará-lo como uma tag html. Ex: <Navbar />.
Na declaração do componente podemos inserir algumas propriedades que veremos nas 
aulas mais a frente.

### Componente Funcionais e Componentes de Classe

- Componentes funcionais são componentes de funções, ou seja, componentes criados 
a partir de funções que retornam um JSX. Quando um componente funcional contém 
um estado chamamos ele de 'stateful component' e quando não contém estados 
chamamos de 'stateless component'. Amtigamente componentes que continham estado 
deveriam ser classes e componentes sem estado poderiam ser funções ou classes.

- Hoje em dia podemos ter funções usando Hooks, que são usados para controlar o 
estado do componente. Portanto, hoje em dia não é necessária saber a diferença 
entre componente 'stateless ou statefull', hoje identificamos apenas componentes 
que tem ou não estado. Se são 'statefull ou stateless', só isso, independente se 
é função ou classe.

- Lembre-se que o que o componente retorna não é exatamente o componente e sim 
um elemento, que é um bloco de construção da aplicação, o que queremos ver na tela.
Elementos compõem os componentes. Os componentes retornam os elementos React que 
queremos que apareça na tela.

function App () {
  return (JSX)
}

- Componentes de classe são componentes criados a partir de uma classe e que 
devem ser extendidas de um objeto 'Component' de React. Realizam a mesmo função 
de componente funcional, ou seja, criam um componente, no entanto para renderizarmos 
um JSX devemos invocar o método render() e retornar o JSX. Ex:

class App extends Component {
  render() {
    return (JSX)
  }
}