import './App.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import HomepageComponent from './components/HomepageComponent/HomepageComponent';
import ToDoListComponent from './components/ToDoListComponent/ToDoListComponent';
import UserProfilesComponent from './components/UserProfilesComponent/UserProfilesComponent';
import WeatherComponent from './components/WeatherComponent/WeatherComponent';

function App() {
  

  return (
    <>
    <Router>




    <Routes>
      <Route path="/" element={<HomepageComponent/>}/>
      <Route path="/toDoList" element={<ToDoListComponent/>} />
      <Route path="/userProfiles" element={<UserProfilesComponent/>} />
      <Route path="/homePage" element={<HomepageComponent/>} />
      <Route path="/weather" element={<WeatherComponent/>} />
    </Routes>
    



</Router>
    </>
  )
}

export default App
