
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

### Componentes de Classe com estado (stateful)

- De forma resumida, estados são dados que o componente utiliza, é similar ao 
props mas é privado e totalmente controlado pelo componente. Toda vez que o estado 
muda, o método render irá renderizar novamente o componente pois houve uma mudança 
de estado dentro do componente.

- Veremos como criar um estado dentro de um componente com classe, mais a frente 
veremos como criar com Hooks também.

- Dentro da classe, o método constructor sempre irá receber como parâmetro as 
props e também a super para invocar o constructor da classe extendida. Podemos 
definir uma propriedade 'state' dentro do constructor que será um objeto vazio 
que alertará para o React que se suas propriedades forem alteradas, o render() 
deve ser executado novamente. As propriedades do estado serão os dados que o 
componente contém.

- Vale lembrar que, quando declaramos métodos dentro da classe, o React não irá 
fazer o 'binding' do this do método com a classe, ou seja, o this do método não 
irá referenciar o objeto no qual está trabalhando. Para evitarmos esse problema, 
devemos fazer uma 'bound method', criando uma propriedade com o nome do método, 
atribuindo esse método com o encadeamento do método bind passando o this do objeto.

- Com isso poderemos trabalhar com this tranquilamente dentro dos métodos. Mas 
perceba que isso vale apenas para as functions declarations. Se trabalharmos com 
métodos escritos em arrow funcions, esse problema desaparece, pois as arrow functions 
consideram o this do escopo onde está sendo declarada, ou seja, irá considerar o 
objeto de onde ela está, portando o this do objeto desejado.

- Para evitar fazer binding do this toda vez, pode ser uma prática recomendável 
utilizar arrow functions para os métodos, mas é imporante ter a noção do porque 
isso acontece e porque o arrow function funciona.

- Para de fato re-renderizarmos o estado do componente, devemos invocar o método 
setState(state) e indicar a mudança que ocorrerá no estado. Assim que um evento 
for disparado, por exemplo um clique, o render() será chamada novamente e irá 
atualizar apenas aquele pedaço do componente.

### State com arrays e objetos

- Para trabalharmos com arrays que se encontram dentro do state, se quisermos 
interar sobre eles devemos usar o método map(), retornando um JSX desejado. Vale 
lembrar que sempre quando iteramos por elementos o JSX retornado deve conter uma 
chave 'key' que deve ser única para aquele JSX retornado.

- Isso porque uma lista de itens iterados são semelhantes e o React precisa de 
uma forma rápida para identificar qual elemento o seu estado foi alterado para 
ele poder atualizar sem precisar renderizar todos os itens novamente. Deve-se 
colocar a 'key' no primeiro elemento retornado pela iteração.

- Se a iteração retornar mais de um elemento, esse retorno deve ter um elemento 
raiz que irá agrupar todos esses filhos, pois é necessário que o elemento 'pai'
contenha a key para o React identificar.

## Lifecycle Methods (Métodos de Ciclo de Vida)
