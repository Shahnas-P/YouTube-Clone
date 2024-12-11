import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import appStore from './Utils/appStore';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }
      ]
    }
  ])

  return (
    <div className="l  no-scrollbar" >
      <Provider store={appStore}>
      <Header/>
      <RouterProvider router={appRouter} />
      </Provider>    
   </div>
  );
}

export default App;
