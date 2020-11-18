import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import $ from 'jquery';

function Modal(props) {
    const {defaultValues, isEdit, title, submitingData, openAddModal} = props
    const { register, handleSubmit , errors, reset, setValue} = useForm({defaultValues: props.defaultValues}); 
    
    const closeModal = () => {
      reset({})
    }

   
    useEffect(() => {
      if (isEdit) {
          props.fieldList.forEach(field => {
            setValue(field.name, defaultValues[field.name])
          });
      } 
  }, [defaultValues]);

    
  useEffect(() => {
    if (!openAddModal){
      $('#' + props.id).modal('hide')
      reset({})
    }
}, [openAddModal]);

    return (
        <div className="modal" id={props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => closeModal()}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(props.actionSubmit)}>
            <div className="modal-body">
                {props.fieldList.map((field, key) => {
                    switch(field.type){
                        case 'text':
                            return <FormInput 
                                key={'field_' + key}
                                name={field.name}
                                id={field.id}
                                label={field.label}
                                fieldRef={field.validation ? register(field.validation): register}
                                error={field.validation ? errors[field.name] : null}
                            />
                           
                        case 'textarea':
                            return <FormTextarea 
                                key={'field_' + key}
                                name={field.name}
                                id={field.name}
                                label={field.label}
                                fieldRef={field.validation ? register(field.validation): register}
                                error={field.validation ? errors[field.name] : null}
                            />
                    }
                })}
               
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModal()}>Close</button>
              <button type="submit" className="btn btn-primary" disabled={submitingData}>Save changes</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;

