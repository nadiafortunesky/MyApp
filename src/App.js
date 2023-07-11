import ContainerComponent from "./Componentes/Container";
import ItemListContainer from "./Componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <ContainerComponent/>
      <ItemListContainer texto= "Bienvenidos"/>
      
    </div>
  );
}

export default App;