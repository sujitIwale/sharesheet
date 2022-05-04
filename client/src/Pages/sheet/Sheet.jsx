import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import SheetTable from '../../components/SheetTable/SheetTable';
import { useSheet } from '../../hooks/sheet';
import './Sheet.css'

const Sheet = () => {
  const sheetId = useParams().sheetId;
  const { fetchSheetData,loading,sheetData } = useSheet()

  useEffect(() => {
    fetchSheetData(sheetId)
  },[sheetId])

  return (
    <div className='sheet-page-main'>
      {
        loading || !sheetData.data ? <h2>Loading ....</h2> : <SheetTable />      }
    </div>
  )
}

export default Sheet