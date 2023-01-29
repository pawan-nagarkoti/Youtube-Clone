import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../util/constants';

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  const categoryName = (categoryName)=>{
    setSelectedCategory(categoryName);
  }
  return (
    <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {
        categories.map((category) => {
          return(
            <>
              <button  className='category-btn' style={{background: category.name === selectedCategory && '#FC1503', color: 'white'}} onClick={()=>categoryName(category.name)} key={category.name}>
                <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
                <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
              </button>
            </>
          )
        })
      }
    </Stack>
  )
}

export default Sidebar