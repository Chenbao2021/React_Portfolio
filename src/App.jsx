import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import logo from './assets/images/logo.svg';
import calendar from './assets/images/calendar.jpeg';
import {FaNodeJs } from 'react-icons/fa';
import './App.css';
import Option from './codes/options/option';
import {ajcf, dessin, funny, hanfu, rando} from './assets/images/activitiesLogo/main.js';
import {android, web} from './assets/images/projetLogo/main.js';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


function App() {
  const images = [
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  ];
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.3,
    arrows: true,
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='headName'>Chenbao <span style={{ color: '#68a063' }}>YU</span></h1>
      </header>
      <body className='App-body'>
        <div className='subject1'> 
          <h1>Mes activités</h1>
          <div className='activitiesContainer' image=''>
            <Option name='Café (AJCF)' image={ajcf}/>
            <Option name='Hanfu (Boyan)' image={hanfu}/>
            <Option name='Dessins' image={dessin}/>
            <Option name='Rando && Muscul' image={rando}/>
            <Option name='Funny moments' image={funny}/>
          </div>  
        </div>
        <div className='subject2'> 
          <h1>Mes projets / CV</h1> 
          <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '30%', alignItems: 'center', }}>
            <img src={logo} className="App-logo-react" alt="logo"/>
            <FaNodeJs className='App-logo-node' size={"100%"} color='#68a063'/>
          </div>
          <div className='projetOptions'>
            <Option name='Café' image={web}/>
            <Option name='Créatea' image={web}/>
            <Option name='KDS' image={android}/>
            <Option name='Fidélité' image={android}/>
          </div>
        </div>
        <div className='subject3'>
          <h1>Evenements à venir</h1>
            <Zoom {...zoomOutProperties}>
              {images.map((each, index) => (
                <img key={index} style={{ width: "100%", height: '100%' }} src={each} />
              ))}
            </Zoom>
        </div>
      </body>
    </div>
  );
}

export default App;
