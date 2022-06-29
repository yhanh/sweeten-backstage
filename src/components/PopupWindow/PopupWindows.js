import React from 'react'
import ProductCreateCard from '../CreateCard/ProductCreateCard'
import ProductEditCard from '../EditCard/ProductEditCard'

const PopupWindows = () => {
  return (
    <>
        {/* edit */}
        <ProductEditCard/>

        {/* create */}
        <ProductCreateCard/>
    </>
  )
}

export default PopupWindows