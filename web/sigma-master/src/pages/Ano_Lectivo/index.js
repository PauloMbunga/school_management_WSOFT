 
    import React,  {useEffect, useState,useRef} from 'react';
    import {useHistory}  from 'react-router-dom';
    
    import {DataTable} from 'primereact/datatable';
    import {Column} from 'primereact/column';
    import {Calendar} from 'primereact/calendar';
    import {Toolbar} from 'primereact/toolbar';
    import {Button} from 'primereact/button';
    import {Panel} from 'primereact/panel';
    
    
    
    import {InputText} from 'primereact/inputtext';
    
    import api from '../../service/api' 
    
    
    
    
    const Ano_Lectivo = () => {
    
        
    
        const [items,setItems] = useState([]);
    
        const [description, setDescription] = useState('');
    
        const [selected, setSelected] = useState(null);
        const [date, setDate] = useState(null);
       
    
        const history = useHistory();
        
    
        const [open, setOpen] = React.useState(false);
       
        useEffect(()=>{ 
    
           
    
            api.get('ano_lectivo').then(response =>{
                setItems(response.data);
             
            })
        },[items]);
    
      
    
        // function handleInputChange(event){
    
        //     const {name,value} = event.target;
        
        //  //   setFormData({ ...formData,[name]: value});
           
            
        // }
        
    
        async function handleSubmit(e){
            e.preventDefault();

          

     //     console.log(d);
    
            const data={
              description
                
              };

            //   console.log("data",data.date.getFullYear());
          
              console.log("date ",data);
            
              try{
            await api.post('ano_lectivo',data);
    
            alert("Ano Lectivo criada com sucesso!");
           // setOpen(open)
           setDate(null);
            history.push('/ano_lectivo');
          
           }catch(err){
    
            alert("Erro ao fazer o cadastro, tente novamente.");
           
           
           }
        }
    
    
        return (
    
            
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
    
                   
                    <div className="card card-w-title">
                    <h1>Ano Lectivo</h1>
                    <Toolbar>
        <div className="p-toolbar-group-left">
            <Button  onClick={() => {
              setOpen(false);
            }} label="Novo" icon="pi pi-plus" style={{marginRight:'.25em'}} />
            
            <Button onClick={() => {
              setOpen(true);
            }}  label="Listar" icon="pi pi-check" className="p-button-warning" />
        </div>
        
    </Toolbar> 
       <br></br>
    
       {!open
    
    ?
       <form onSubmit={handleSubmit}>
       <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col">
    
          
            <label htmlFor="lastname2">Ano Lectivo</label>
           <Calendar value={description} onChange={(e) => setDescription(e.value.getFullYear())} view="month" 
           dateFormat="yy" yearNavigator={true} yearRange="2010:2090" showIcon={true} />
        </div>
        <div className="p-field p-col">
            
        </div>
        
    </div>
    
    <br/>
    <Button label="salvar" type="submit" icon="pi pi-save" style={{marginRight:'.25em'}} />
    
    </form>
    
    : null
            
    }     
    
    <br></br>
    
        
         
            {open
    
              ? <div className="card card-w-title" >
                            <h1>DataTable</h1>
                            <DataTable scrollable={true} style={{'text-align':'center'}} value={items}  paginatorPosition="bottom" selectionMode="single" header="Lista de Anos Lectivos" paginator={true} rows={8}
                                responsive={true} selection={selected} onSelectionChange={e => setSelected(e.value)}>
                               
                                <Column field="description"  header="Descrição" sortable={true}/>
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
    
    export default Ano_Lectivo;