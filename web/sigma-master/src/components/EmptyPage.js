import React, {useEffect, useState} from 'react';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Calendar} from 'primereact/calendar';

import {InputText} from 'primereact/inputtext';

import api from '../service/api' 



    const EmptyPage = () => {
    
        const [items,setItems] = useState([]);
        const [selected, setSelected] = useState(null);
        const [date, setDate] = useState(null);

        

       
        useEffect(()=>{ 

            api.get('items').then(response =>{
                setItems(response.data);
                console.log(response.data);
            })
        },[]);

        function clicou(){
        
   console.log(date);

}
    

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">

                   
                    <div className="card card-w-title">
                        <h1>DataTable</h1>
                        <DataTable scrollable={true} value={items}  paginatorPosition="both" selectionMode="single" header="List of Cars" paginator={true} rows={10}
                            responsive={true} selection={selected} onSelectionChange={e => setSelected(e.value)}>
                            <Column field="id" header="id" sortable={true}/>
                            <Column field="title" header="title" sortable={true}/>
                            <Column field="image_url" header="image_url" sortable={true}/>
                           
                        </DataTable>
                    </div>
                    <div className="p-fluid">
                
                    
                                <div className="p-col-8 p-md-2">
                                    <label htmlFor="input">Input</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <InputText  id="input" />
                                </div>
                                
            

                        <div className="p-col-12 p-md-2">
                                    <label htmlFor="calendar">Calendar</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <Calendar id="calendar" value={date}  onChange={event => setDate(event.value)}></Calendar>
                                </div>  
                                                                        
                        </div>
                        <div className="p-col-12 p-md-4">     
                                <button  style={{width:100,height:40}} onClick={clicou} type="button" >Clicar</button>
                                </div>  
                       
                    </div>
                </div>
            </div>
        );
    

}

export default EmptyPage