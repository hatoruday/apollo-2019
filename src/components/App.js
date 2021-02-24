import {HashRouter as Router, Route} from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/:id' component = {Detail}/>
      </Router>
      {/*처음 시작은 App.js App js에서 라우터를 임포트 받아서 라우트를 라우터 태그 안에 적고, 처음 기본 위치를 홈 콤포넌트.*/}
    </div>
  );
}

export default App;
