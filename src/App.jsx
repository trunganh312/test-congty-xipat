import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./components/Dashboard";
import PostMananger from "./components/PostMananger";
import Setting from "./components/Setting";
import Header from "./components/Header";
import { LineChart } from "./components/LineChart";
import { ColumnChart } from "./components/ColumnChart";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<AdminLayout />}>
          <Route
            path='/'
            element={
              <>
                <img
                  className='h-screen'
                  src='https://t4.ftcdn.net/jpg/01/05/72/61/360_F_105726195_r0MpL0Noxp2NeMh3RsRwCskbeL7ensjV.jpg'
                  alt=''
                />
              </>
            }
          ></Route>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='subcription' element={<LineChart />} />
            <Route path='revenue' element={<ColumnChart />} />
          </Route>
          <Route path='post-mananger' element={<PostMananger />} />
          <Route path='settings' element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
