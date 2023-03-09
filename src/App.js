
import './App.css';

function App() {
  return (
    <div className='pricecards'>
   <Details 
   cost='FREE'
   
   amount = '$ 0 /month'
   
   user = '✔️singleuser'
   storage = '✔️5GB storage'
   publicprojects = '✔️unlimited public projects'
   access = '✔️community acess'
   privateprojects= '❌unlimited private projects'
   support = '❌Dedicated phone support'
   Domain = '❌Free subdomain'
   statusreport = '❌Monthly Status Reports'
   btn='BUTTON'  />
   <Details
   cost='PLUS'
   
   amount = '$ 9 /month'
   
   user = '✔️5 users'
   storage = '✔️50GB storage'
   publicprojects = '✔️unlimited public projects'
   access = '✔️community acess'
   privateprojects= '✔️unlimited private projects'
   support = '✔️Dedicated phone support'
   Domain = '✔️Free subdomain'
   statusreport = '❌Monthly Status Reports'
   btn='BUTTON'
    />
   <Details
   cost='PRO'
   amount = '$ 49 /month'
   
   user = '✔️unlimited users'
   storage = '✔️150GB storage'
   publicprojects = '✔️unlimited public projects'
   access = '✔️community acess'
   privateprojects= '✔️unlimited private projects'
   support = '✔️Dedicated phone support'
   Domain =  '✔️Free subdomain'
   statusreport = '✔️Monthly Status Reports'
   btn='BUTTON'
    />
   
    </div>
  );
}

export default App;


function Details(props){
  return(
    <div className='card'>
      <h3 className='heading'>
        
        {props.cost}</h3>
      <p className='cost'>{props.amount}{props.month}</p>
      <hr></hr>
      <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.publicprojects}</p>
      <p>{props.access}</p>
      <p>{props.privateprojects}</p>
      <p>{props.support}</p>
      <p>{props.Domain}</p>
      <p>{props.statusreport}</p>
      <button className='btn'>{props.btn}</button>

    </div>

  )
}