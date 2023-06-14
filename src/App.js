
import './App.css';
import Header from './components/header/Header';
import Company from './components/company/Company';
import SidebarMenu from './components/Menu/SidebarMenu';

function App() {
  return (
    
      <div class="container-fluid">
       <div class="row flex-nowrap">
            <SidebarMenu />
             <div class="col py-5">
                    <Header />
                    <Company />
            </div>
        </div>
    </div>
  );
}

export default App;
