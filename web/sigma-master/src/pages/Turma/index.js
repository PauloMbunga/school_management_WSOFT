import React,  {useEffect, useState,useRef} from 'react';
import {useHistory}  from 'react-router-dom';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Calendar} from 'primereact/calendar';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';


import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';

import api from '../../service/api' 




const Turma = () => {

    
    const [description, setDescription] = useState('');
    const [numeroMaximo,setNumeroMaximo] = useState('0');

    const [turmas,setTurmas] = useState([]);

    const [sala,setSala] = useState([]);
    const [curso,setCurso] = useState([]);
    const [periodo,setPeriodo] = useState([]);
    const [classe,setClasse] = useState([]);

    const [ano_lectivo,setAnoLectivo] = useState(null);

    const [ano_lectivo_max,setAnoLectivoMax] = useState(null);
   
    const [selectedCurso,SetSelectedCurso]=useState('0');
    const [selectedPeriodo,SetSelectedPeriodo]=useState('0');
    const [selectedClasse,SetSelectedClasse]=useState('0');
   
    const [selectedSala,SetSelectedSala]=useState('0');

    const [selected, setSelected] = useState(null);


    const history = useHistory();

    const [open, setOpen] = React.useState(false);

   
    useEffect(()=>{ 

       

        api.get('sala').then(response =>{
            setSala(response.data);
         
        })
    },[sala]);


    useEffect(()=>{ 

       

        api.get('classe').then(response =>{
            setClasse(response.data);
         
        })
    },[classe]);


    useEffect(()=>{ 

       

        api.get('curso').then(response =>{
            setCurso(response.data);
         
        })
    },[curso]);




//     useEffect(()=>{ 

    
//         api.get('ano_lectivo').then(response =>{


//        const  anos_lectivos = response.data;


//     var maxCallback2 = ( max, cur ) => Math.max( max, cur );
            
//   const anoFiltrado =  anos_lectivos.map( a => a.description)
//     .reduce( maxCallback2, -Infinity )

   

//  const anoL=  anos_lectivos.filter(item => item.description === anoFiltrado.toString())
     
    
//         console.log(anoL[0].description);

//             setAnoLectivo(anoL[0]);
         
//         })
//     },[]);


    // useEffect(()=>{ 

       

    //     api.get('ano_lectivo_max').then(response =>{

    //      //   console.log(response.data.max)
    //         setAnoLectivoMax(response.data.max);
            
         
    //     })
    // },[]);



    useEffect(()=>{ 

       

        api.get('periodo').then(response =>{
            setPeriodo(response.data);
         
        })
    },[periodo]);


    
  

    const onSalaChange = (e) => {
        
        const  salaSelecionada =   e.target.value;
   
        SetSelectedSala(salaSelecionada);
   
          
       };


       const onClasseChange = (e) => {
        
        const  classeSelecionada =   e.target.value;
   
        SetSelectedClasse(classeSelecionada);
   
          
       };


       const onPeriodoChange = (e) => {
        
        const  periodoSelecionada =   e.target.value;
   
        SetSelectedPeriodo(periodoSelecionada);
   
          
       };


       const onCursoChange = (e) => {
        
        const  cursoSelecionado =   e.target.value;
   
        SetSelectedCurso(cursoSelecionado);
   
          
       };

    

       async function handleSubmit(e){
        e.preventDefault();

        const data={
            description,
            numero_estudantes:numeroMaximo,
            sala:selectedSala,
            classe:selectedClasse,
            curso:selectedCurso,
            periodo:selectedPeriodo,
            ano_lectivo
            
          };
      
        
          try{
        await api.post('turma',data);

        alert("Turma criada com sucesso!");
       // setOpen(open)
     //  setDescription("");
     //  clearState();
       
        history.push('/turma');
      
       }catch(err){

        alert("Erro ao fazer o cadastro, tente novamente.");
       
       
       }
    }



    useEffect(()=>{ 

       

        api.get('turma').then(response =>{
            setTurmas(response.data);
         
        })
    },[turmas]);


    return (

        
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">

               
                <div className="card card-w-title">
                <h1>Turma</h1>
                <Toolbar>
    <div className="p-toolbar-group-left">
        <Button onClick={() => {
          setOpen(false);
        }} label="Nova" icon="pi pi-plus" style={{marginRight:'.25em'}} />
        <Button onClick={() => {
          setOpen(true);
        }} label="Listar" icon="pi pi-check" className="p-button-warning" />
    </div>
    
</Toolbar> 
   <br></br>


   {!open

?
<form onSubmit={handleSubmit}>

   <div className="p-fluid p-formgrid p-grid">

   <div className="p-field p-col">
        <label htmlFor="lastname2">Curso</label>

        
<Dropdown key="code" value={selectedCurso}
 options={curso} 
 onChange={onCursoChange}  
 placeholder="Selecione o Curso" 
 optionLabel="description" 
 style={{left: '0.1em'}}/>

</div>


<div className="p-field p-col">
        <label htmlFor="lastname2">Sala</label>

        
<Dropdown key="code" value={selectedSala}
 options={sala} 
 onChange={onSalaChange}  
 placeholder="Selecione a Sala" 
 optionLabel="description" 
 style={{left: '0.1em'}}/>

</div>

<div className="p-field p-col">
        <label htmlFor="lastname2">Classe</label>

        
<Dropdown key="code" value={selectedClasse}
 options={classe} 
 onChange={onClasseChange}  
 placeholder="Selecione a Classe" 
 optionLabel="description" 
 style={{left: '0.1em'}}/>

</div>
</div>  

<div className="p-fluid p-formgrid p-grid">

<div className="p-field p-col">
        <label htmlFor="lastname2">Periodo</label>

        
<Dropdown key="code" value={selectedPeriodo}
 options={periodo} 
 onChange={onPeriodoChange}  
 placeholder="Selecione o Periodo" 
 optionLabel="description" 
 style={{left: '0.1em'}}/>

</div>



    <div className="p-field p-col">
        <label htmlFor="firstname2">Descrição da Turma</label>
        <InputText id="description"  value={description} type="text" onChange={e => setDescription(e.target.value)}   ></InputText>
    </div>

    <div className="p-field p-col">
    
    <label htmlFor="firstname2">Número Maximo de Alunos</label>
    <InputNumber value={numeroMaximo} onChange={(e) => setNumeroMaximo(e.target.value)} mode="decimal" showButtons min={0} max={100} />
    </div>
  
   
    </div>



<br/>
<Button label="salvar" icon="pi pi-save" style={{marginRight:'.25em'}} />

</form>

: null
        
}     

<br></br>

{open

? <div className="card card-w-title" >
              <h1>DataTable</h1>
              <DataTable scrollable={true} style={{'text-align':'center'}} value={turmas}  paginatorPosition="bottom" selectionMode="single" header="Lista de Turmas" paginator={true} rows={8}
                  responsive={true} selection={selected} onSelectionChange={e => setSelected(e.value)}>
                 
                  <Column field="description"  header="Descrição" sortable={true}/>
                  <Column field="sala.description"  header="Sala" sortable={true}/>
                  <Column field="classe.description"  header="Classe" sortable={true}/>
                  <Column field="curso.description"  header="Curso" sortable={true}/>
                  <Column field="periodo.description"  header="Periodo" sortable={true}/>
                  <Column field="ano_lectivo.description"  header="Ano Lectivo" sortable={true}/>
                 
                  <Column field="createdAt" header="Data de Criação" sortable={true}/>
                  <Column field="updatedAt" header="Data de Actualização" sortable={true}/>
                  
                 
              </DataTable>
 </div>
 : null

}  


                 
                </div>
                  
                   
                </div>
            </div>
        </div>
    );
}

export default Turma;