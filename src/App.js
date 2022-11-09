import './App.css';

const Head = (props) => {
  return <h2 className="TextProps">{props.text}</h2>
}

const App = () => {
  const name = "Benny"
  return (
    <div>
      <header className="App-header">
        <div className="MainDiv">
        <div>
        <h1 className="TextProps">My name Is {name}</h1>
        <Head text="Lorem ipsum dolor sit amet" />
        </div>
        
        <img className="ImgProps" src="Yarrick.jpeg" alt="The Great Yarrick"></img>
        </div>
        <hr></hr>
        <div>
        <h1 className="TextProps">Oddi</h1>
        <h2 className="TextProps">2020 - Nú</h2>
        <p className="TextProps">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam rhoncus varius mi ut blandit. Fusce ultrices tellus eu vulputate 
          ullamcorper. Donec pulvinar hendrerit neque vitae fermentum. Nulla semper 
          at purus vitae auctor. Fusce id consequat purus. Phasellus dignissim 
          ultricies odio. Suspendisse lacinia vel massa eget laoreet. Aliquam commodo 
          vel leo quis eleifend. Cras ut eleifend mauris. Donec pulvinar eu sem quis 
          interdum.</p>
        </div>
        <div>
        <h1 className="TextProps">Oddi</h1>
        <h2 className="TextProps">2020 - Nú</h2>
        <p className="TextProps">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam rhoncus varius mi ut blandit. Fusce ultrices tellus eu vulputate 
          ullamcorper. Donec pulvinar hendrerit neque vitae fermentum. Nulla semper 
          at purus vitae auctor. Fusce id consequat purus. Phasellus dignissim 
          ultricies odio. Suspendisse lacinia vel massa eget laoreet. Aliquam commodo 
          vel leo quis eleifend. Cras ut eleifend mauris. Donec pulvinar eu sem quis 
          interdum.</p>
        </div>
        <div>
        <h1 className="TextProps">Oddi</h1>
        <h2 className="TextProps">2020 - Nú</h2>
        <p className="TextProps">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam rhoncus varius mi ut blandit. Fusce ultrices tellus eu vulputate 
          ullamcorper. Donec pulvinar hendrerit neque vitae fermentum. Nulla semper 
          at purus vitae auctor. Fusce id consequat purus. Phasellus dignissim 
          ultricies odio. Suspendisse lacinia vel massa eget laoreet. Aliquam commodo 
          vel leo quis eleifend. Cras ut eleifend mauris. Donec pulvinar eu sem quis 
          interdum.</p>
        </div>
      </header>
    </div>
  );
}


export default App;
