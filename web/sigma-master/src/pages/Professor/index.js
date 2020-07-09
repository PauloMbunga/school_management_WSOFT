import React,  {useEffect, useState,useRef} from 'react';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Calendar} from 'primereact/calendar';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';


import {InputText} from 'primereact/inputtext';

import api from '../../service/api' 
import {CountryService} from '../../service/CountryService';



const Professor = () => {

    

    const [items,setItems] = useState([]);
    const [nacionalidades,setNacionalidades] = useState([]);
    const [selected, setSelected] = useState(null);
    const [date, setDate] = useState(null);
   
    const [selectedNac,SetSelectedNac]=useState('0');

    const [genero, setGenero] = useState(null);
    const [tipoDocumento, setTipoDocumento] = useState(null);

    
   const  countryService = new CountryService();

    let maxDate = new Date();

    

    let generos = [
        {name: 'Masculino', code: 'M'},
        {name: 'Femenino', code: 'F'}
        
    ];

    let tipo_documentos = [
        {name: 'Bilhete', code: 'M'},
        {name: 'Passaporte', code: 'F'}
        
    ];


    const onGeneroChange = (e) => {
        setGenero(e.value);
    };

    const onTipoDocumentoChange = (e) => {
        setTipoDocumento(e.value);
    };

   
    useEffect(()=>{ 

       

        api.get('items').then(response =>{
            setItems(response.data);
         
        })
    },[]);

    useEffect(() => {
        
        countryService.getCountries().then(data => {
            setNacionalidades(data);
    
        });
    },);


    let growl = useRef(null);

    const onUpload = () => {
        growl.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }


    
    const onNacionalidadeChange = (e) => {
        
     const  nac =   e.target.value;

     SetSelectedNac(nac);

       
    };

    async function handleSubmit(e){
        e.preventDefault();
      
        const nac = selectedNac.code;

        console.log(nac);
    
    }


    return (

        
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">

               
                <div className="card card-w-title">
                <h1>Professor</h1>
                <Toolbar>
    <div className="p-toolbar-group-left">
        <Button label="Novo" icon="pi pi-plus" style={{marginRight:'.25em'}} />
        <Button label="Listar" icon="pi pi-check" className="p-button-warning" />
    </div>
    
</Toolbar> 
   <br></br>

   <div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col">
        <label htmlFor="firstname2">Nome</label>
        <InputText id="firstname2" type="text"/>
    </div>
    <div className="p-field p-col">
        <label htmlFor="lastname2">Nome do Meio</label>
        <InputText id="lastname2" type="text"/>
    </div>

    <div className="p-field p-col">
        <label htmlFor="lastname3">Último Nome</label>
        <InputText id="lastname3" type="text"/>
    </div>
    
</div>

<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col">
        <label htmlFor="firstname2">Género</label>
        <Dropdown value={genero} 
        options={generos} 
        onChange={onGeneroChange} 
        placeholder="Selecione o Género" 
        optionLabel="name" 
        style={{right: '0.1em'}}/>
    </div>
    <div className="p-field p-col">
        <label htmlFor="lastname2">Data de Nascimento</label>
        <Calendar id="calendar" value={date} 
        
        onChange={event => setDate(event.value)}
        monthNavigator={true} yearNavigator={true} yearRange="1900:4000"
         maxDate={maxDate}
        >

        </Calendar>
    </div>

    
    <div className="p-field p-col">
        <label htmlFor="lastname2">Nacionalidade</label>

        
<Dropdown key="code" value={selectedNac}
 options={nacionalidades} 
 onChange={onNacionalidadeChange}  
 placeholder="Selecione a Nacionalidade" 
 optionLabel="name" 
 style={{left: '0.1em'}}/>


    
    </div>
</div>


<div className="p-fluid p-formgrid p-grid">
                          <div className="p-field p-col">
                              <label htmlFor="firstname2">Email</label>
                        
                                <InputText placeholder="Email"/>
                            </div>

                            
                            <div className="p-field p-col">
                              <label htmlFor="fir">Telefone</label>
                              <InputText placeholder="Telefone"/>
                            </div>
                            <div className="p-field p-col">
                              <label htmlFor="fir">Telefone 2</label>
                              <InputText placeholder="Telefone"/>
                            </div>
</div>

<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col">
        <label htmlFor="firstname2">Tipo de Documento</label>
        <Dropdown value={tipoDocumento} 
        options={tipo_documentos} 
        onChange={onTipoDocumentoChange} 
        placeholder="Selecione o Tipo de Documento" 
        optionLabel="name" 
        style={{right: '0.1em',bottom:'0.1em'}}/>
    </div>

    <div className="p-field p-col">
                              <label htmlFor="fir">Número</label>
                              <InputText placeholder="Número"/>
                            </div>
                            <div className="p-field p-col">
                              <label htmlFor="fir">Telefone 2</label>
                              <InputText placeholder="Telefone"/>
                            </div>

    </div>


    <div className="p-fluid p-formgrid p-grid">
    
    <div className="p-field p-col">
        <label htmlFor="lastname2">Provincia</label>

        
<Dropdown key="code" value={selectedNac}
 options={nacionalidades} 
 onChange={onNacionalidadeChange}  
 placeholder="Selecione a Nacionalidade" 
 optionLabel="name" 
 style={{left: '0.1em'}}/>


    
    </div>


    <div className="p-field p-col">
        <label htmlFor="lastname2">Municipio</label>

        
<Dropdown key="code" value={selectedNac}
 options={nacionalidades} 
 onChange={onNacionalidadeChange}  
 placeholder="Selecione a Nacionalidade" 
 optionLabel="name" 
 style={{left: '0.1em'}}/>


    
    </div>

    <div className="p-field p-col">
        <label htmlFor="lastname2">Bairro</label>

        
<Dropdown key="code" value={selectedNac}
 options={nacionalidades} 
 onChange={onNacionalidadeChange}  
 placeholder="Selecione a Nacionalidade" 
 optionLabel="name" 
 style={{left: '0.1em'}}/>


    
    </div>

    </div>


    <div className="p-fluid p-formgrid p-grid">
                          <div className="p-field p-col">
                              <label htmlFor="firstname2">Morada</label>
                        
                                <InputText  placeholder="Morada"/>
                            </div>

     </div>

<br></br>

<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col">
        <label htmlFor="firstname2">Foto</label>
        <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload}
                        multiple={true} accept="image/*" maxFileSize={1000000} />
    </div>
    
</div>
                            
                            


<div className="card card-w-title">
                        <h1>DataTable</h1>
                        <DataTable scrollable={true} value={nacionalidades}  paginatorPosition="both" selectionMode="single" header="List of Cars" paginator={true} rows={10}
                            responsive={true} selection={selected} onSelectionChange={e => setSelected(e.value)}>
                            <Column field="code" header="id" sortable={true}/>
                            <Column field="name" header="title" sortable={true}/>
                            <Column field="code" header="image_url" sortable={true}/>
                           
                        </DataTable>
                    </div>
                 
                </div>
                  
                   
                </div>
            </div>
        </div>
    );
}

export default Professor;