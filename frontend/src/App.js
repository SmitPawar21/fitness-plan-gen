import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { DashboardPage } from './pages/DashboardPage';
import { GenPlanPage } from './pages/GenPlanPage';
import { SubscriptionPage } from './pages/SubscriptionPage';
import { ChatbotPage } from './pages/ChatbotPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { ToDoListPage } from './pages/ToDoListPage';
import { PlanInfoPage } from './pages/PlanInfoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/userinfo' element={<UserInfoPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/generateplan' element={<GenPlanPage />} />
          <Route path='/subscription' element={<SubscriptionPage />} />
          <Route path='/chatbot' element={<ChatbotPage />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/todolist' element={<ToDoListPage />} />
          <Route path='/planinfo' element={<PlanInfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
