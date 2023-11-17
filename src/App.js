// import logo from './logo.svg';
import './App.css';
import Welcome from './class1';
import Welcome1 from './classprops';
import Welcome2 from './welcome';
import List from './list';
import Table from './table';
import Tableprobs from './tablepros';
import DataList1 from './task2Classlist';
import Yamaha from './yamaha';
import Incdec from './incdec';
function App() {
  const dataArrayo = [
    { id: 1, name: 'Yoosuf', department: 'maths' },
    { id: 2, name: 'Yokesh', department: 'physics' },
    { id: 3, name: 'yamini', department: 'chemistry' },
    { id: 4, name: 'yalini', department: 'English' },
    { id: 5, name: 'yahyaa', department: 'Tamil' },
  
    
  ];
  const depart=[
    {
      name:"Mathemetics"
    },
    {
      name:"physics"
    },{
      name:"chemistry"
    },{
      name:"computer science"
    }
  ]
  const tabledetails=[

    {
      departments:"Science",
      tname:"cita",
      salary:45000,
      experiance:3
    },
    {
      departments:"Arts",
      tname:"rita",
      salary:55000,
      experiance:6
    },
    {
      departments:"Computer Science",
      tname:"katija",
      salary:45000,
      experiance:3
    },
    {
      departments:"IT",
      tname:"Banu",
      salary:75000,
      experiance:3
    }






  ]
  return (
    <div className='container'>
    <div className="App">
      <Welcome/>
      <Welcome1 name = "Khan"age="25"/>
      < Welcome2 name = "john"age="25"/>
    </div>
    
    <div className='list'><h2>task1 functionalList with props</h2><List departName={depart} /></div>
    <div className='list2'><h1>task2 Class list Component</h1><DataList1 data={dataArrayo} /></div>
    <div><h1>task 3  </h1><Incdec/></div>
    <div><h1>task 4 Yamaha </h1><Yamaha/></div>
    
    <div className='t'><h1>Table</h1><Table/></div>
    
    <div className='tb'><h1>Table with props</h1><Tableprobs tabledata={tabledetails}/></div>
    
    </div>

  ); 
}

export default App;
