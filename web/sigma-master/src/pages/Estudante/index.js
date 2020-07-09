import React,  {useEffect, useState,useRef} from 'react';
import {useHistory}  from 'react-router-dom';


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



const Estudante = () => {

    
    const history = useHistory();
   

    const [first_name,setFirst_name]= useState(null);
    const [middle_name,setMiddle_name]= useState(null);
    const [last_name,setLast_name]= useState(null);
    
    const [genero_cod,setGenero_cod]= useState(null);
    
    const [email,setEmail]= useState(null);
   
    const [date, setDate] = useState(null);
   
    const [selectedGenero,SetSelectedgenero]=useState('0');

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


    

    const onTipoDocumentoChange = (e) => {
        setTipoDocumento(e.value);
    };

   
    // useEffect(()=>{ 

       

    //     api.get('items').then(response =>{
    //         setItems(response.data);
         
    //     })
    // },[]);

    // useEffect(() => {
        
    //     countryService.getCountries().then(data => {
    //         setNacionalidades(data);
    
    //     });
    // },);


    let growl = useRef(null);

    const onUpload = () => {
        growl.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }


    
    const onGeneroChange = (e) => {
        
     const  gen =   e.target.value;

     SetSelectedgenero(gen);

       
    };

    async function handleSubmit(e){
        e.preventDefault();

       // console.log(selectedGenero.name)

        const data={
             first_name,
             middle_name,
             last_name,
             birthday:date,
             genero_cod:selectedGenero.code,
             genero:selectedGenero.name,
             email
               
          };
      
        
          try{
        await api.post('estudante',data);

        alert("Estudante criada com sucesso!");
       // setOpen(open)
     //  setDescription("");
     //  clearState();
       
        history.push('/estudante');
      
       }catch(err){

        alert("Erro ao fazer o cadastro, tente novamente.");
       
       
       }
    }


    return (

        
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">

               
                <div className="card card-w-title">
                <h1>Estudantes</h1>
                <Toolbar>
    <div className="p-toolbar-group-left">
        <Button label="Novo" icon="pi pi-plus" style={{marginRight:'.25em'}} />
        <Button label="Listar" icon="pi pi-check" className="p-button-warning" />
    </div>
    
</Toolbar> 
   <br></br>

   <form onSubmit={handleSubmit}>

   <div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col">
        <label htmlFor="nome">Nome</label>
        <InputText id="first_name"  value={first_name} type="text" onChange={e => setFirst_name(e.target.value)}   ></InputText>
    </div>
    <div className="p-field p-col">
        <label htmlFor="nome_meio">Nome do Meio</label>
        <InputText id="middle_name"  value={middle_name} type="text" onChange={e => setMiddle_name(e.target.value)}   ></InputText>
    </div>

    <div className="p-field p-col">
        <label htmlFor="ultimo_nome">Último Nome</label>
        <InputText id="last_name"  value={last_name} type="text" onChange={e => setLast_name(e.target.value)}   ></InputText>
    </div>
    
</div>

<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col">
        <label htmlFor="genero">Género</label>
        
        <Dropdown value={selectedGenero} 
        options={generos} 
        onChange={onGeneroChange} 
        placeholder="Selecione o Género" 
        optionLabel="name" 
        style={{right: '0.1em'}}/>
    </div>

    <div className="p-field p-col">
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <Calendar id="calendar" value={date} 
        
        onChange={event => setDate(event.value)}
        monthNavigator={true} yearNavigator={true} yearRange="1900:4000"
         maxDate={maxDate}
        >

        </Calendar>
    </div>

    
    
</div>


<div className="p-fluid p-formgrid p-grid">
                          <div className="p-field p-col">
                              <label htmlFor="firstname2">Email</label>
                        
                              <InputText id="email"  value={email} type="text" onChange={e => setEmail(e.target.value)}   ></InputText>
                            </div>                           
</div>

<Button label="salvar" icon="pi pi-save" style={{marginRight:'.25em'}} />

</form>

</div>

<br></br>
                  
                   
                </div>
            </div>
        </div>
    );
}

export default Estudante;