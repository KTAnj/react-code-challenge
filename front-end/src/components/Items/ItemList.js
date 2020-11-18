import React, { useState, useEffect } from 'react';
import AppBar from '../../_components/AppBar';
import DataGrid from '../../_components/DataGrid';
import Modal from '../../_components/Modal';
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../_actions'

function ItemList() {
  const { itemList, loading, uplodingData, event , openAddModal} = useSelector(state => state.items)
  const dispatch = useDispatch()

  const [defaultValues, setDefaultValues] = useState({})

  useEffect(() => {
    dispatch(actions.itemActions.getItems())
  }, []);

  const addItemClicked = () => {
    dispatch({ type: 'ADD_ITEM_CLICKED' })
  }

  const editItemClicked = (item) => {
    dispatch({ type: 'EDIT_ITEM_CLICKED', item })
    setDefaultValues(item)
  }
  const saveItems = (data) => {
    if (event == 'edit') {
      dispatch(actions.itemActions.updateItems(data, defaultValues.id))
    } else {
      dispatch(actions.itemActions.addItems(data))
    }
  }

  const buttonList = [
    {
      name: 'Add Item',
      action: addItemClicked,
      dataTarget: '#item_modal'
    }
  ]
  const columns = [
    {
      title: 'Title',
      field: 'title'
    }
  ]
  
  const actionColumns = {
    actions: [
      {
        icon: 'fa-edit',
        action: editItemClicked,
        dataTarget: '#item_modal'
      }
    ]
  }
  
  return (
    <div >
      <AppBar buttonList={buttonList} />
      <DataGrid
        columns={columns}
        actionColumns={actionColumns}
        data={itemList}
        dataLoading={loading}
      />

      <Modal
        id="item_modal"
        openAddModal={openAddModal}
        actionSubmit={saveItems}
        defaultValues={defaultValues}
        isEdit={event == 'edit'}
        title={event == 'edit' ? 'Edit Item' : 'Add Item'}
        submitingData={uplodingData}
        fieldList={[
          {
            type: 'text',
            name: 'title',
            label: 'Title',
            validation: { required: true }
          },
          {
            type: 'textarea',
            name: 'description',
            label: 'Description',
            validation: { required: true }
          }
        ]}
      />

    </div>
  );
}

export default ItemList;