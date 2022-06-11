import Login from './routes/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Cursos from './routes/Cursos';
import AddCursos from './routes/AddCursos';
import EditCursos from './routes/EditCursos';
import Alunos from './routes/Alunos';
import AddAlunos from './routes/AddAlunos';
import EditAlunos from './routes/EditAlunos';
import Matriculas from './routes/Matriculas';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/cursos">
              <Cursos />
            </Route>
            <Route path="/add-cursos">
              <AddCursos />
            </Route>
            <Route path="/edit-cursos">
              <EditCursos />
            </Route>
            <Route path="/alunos">
              <Alunos />
            </Route>
            <Route path="/add-alunos">
              <AddAlunos />
            </Route>
            <Route path="/edit-alunos">
              <EditAlunos />
            </Route>
            <Route path="/matriculas">
              <Matriculas />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;