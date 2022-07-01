import './App.css';
import { Component } from 'react';

// ============== Seção 2: React ( O Básico ) ==============

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Titulo 01',
        body: 'Com este commit, um erro não identificado causou o bug de estados estáticos nos componentes da UI.'
      },
      {
        id: 2,
        title: 'Titulo 02',
        body: 'A equipe de suporte precisa saber que a normalização da data corrigiu o bug no parse retroativo do DOM'
      },
      {
        id: 3,
        title: 'Titulo 03',
        body: 'Nesse pull request, o deploy automatizado no Heroku otimizou a renderização do carregamento de JSON'
      }
    ]
  }

  render() {
    const { posts } = this.state

    return (
      <div className="App">
        {posts.map(({ id, title, body }) => (
          <article key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </article>
        ))}
      </div>
    );
  }
}

export default App;
