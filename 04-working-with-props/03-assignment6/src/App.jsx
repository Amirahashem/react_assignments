import './App.css'
import Panel from './Panel';

function App() {
  

  return (
    <>
      <Panel title='About React'>
        <p>Build User Interfaces</p>
      </Panel>

      <Panel>
        <ul>
          <li>Props</li>
          <li>Component</li>
        </ul>
      </Panel>
    </>
  );
}

export default App
