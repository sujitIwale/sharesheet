import React from 'react'
import SheetMenu from '../../components/sections/sheetMenu/SheetMenu'
import SheetsList from '../../components/sections/sheetsList/SheetsList';
import './Project.css'

const Project = () => {
    console.log('project');
  return (
    <main className='project-page-main'>
        <SheetMenu />
        <SheetsList />
    </main>
  )
}

export default Project