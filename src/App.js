import logo from './logo.svg';
import './App.css';


function App() {
  return ( 
 <div className='container'>  
            <div className="sidebar">
              <div className='logo'>
              </div>
              <div>
              <p className='logged'>Nome dos Jogadores</p>
        <p className='logged'>Pontuação dos Jogadores</p>
              </div>
      
      </div>
      <div className='areaDeJogo'>
      <div className="perguntas">Perguntas</div>
      <div className='resposta'>Área das Respostas</div>
      <div className="cartas">

<div className='div3'>Respostas</div>
<div className='div3'>Respostas</div>
<div className='div3'>Respostas</div>
<div className='div3'>Respostas</div>
<div className='acoes'>
<button>Troca as 5 cartas aleatoriamente</button>
<button>Troca uma 1 carta aleatoriamente</button>
</div>
</div>
    
    </div>
    </div>
  );
}

export default App;
