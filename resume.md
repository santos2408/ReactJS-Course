## React Básico

- Funções iniciadas por letra maiúscula indicam que são componentes. Dentro 
desses componentes podemos escrever em JSX, ou seja, utilizar 'html' dentro do 
arquivo JS. Para interpolarmos expressões JS dentro do JSX devemos inserir dentro 
de chaves. Ex: <a className="azul" alt={`Texto escrito com template string`}></a>

- Os componentes só podem retornar um único elemento pai, ou seja, ele deve ter 
um elemento raiz que agrupa todos os outros e só esse elemento raiz pode ser 
retornado. Para inserirmos mais de um elemento pai podemos utilizar o chamado 
'fragmento': <></>, que é uma tag vazia que não cria nenhum HTML mas permite 
inserir mais de um elemento 'raiz' dentro do componente.

- Dentro do componente, como estamos escrevendo JSX, ou seja, estamos dentro de 
um arquivo JS, algumas nomenclaturas podem ser palavras reservadas do JS como 
o atribute 'class' do HTML, portanto o atribute 'class' dentro do JSX se chamado
'className'.

- Para usarmos um componente em outro local do projeto, ao final da declaração 
dele devemos inserir um 'export default 'nome do componente'.
Ex: export default Navbar

- Para utilizar o componente devemos declará-lo como uma tag html. Ex: <Navbar />.
Na declaração do componente podemos inserir algumas propriedades.

### Componente Funcionais e Componentes de Classe

- Componentes funcionais são componentes de funções, ou seja, componentes criados 
a partir de funções que retornam um JSX. Quando um componente funcional contém 
um estado chamamos ele de 'stateful component' e quando não contém estados 
chamamos de 'stateless component'

function App () {
  return (JSX)
}

- Componentes de classe são componentes criados a partir de uma classe e que 
devem ser extendidas de um objeto 'Component' de React. Realizam a mesmo função 
de componente funcional no entanto para renderizarmos um JSX devemos invocar o 
método render() e retornar o JSX.

class App extends Component {
  render() {
    return (JSX)
  }
}