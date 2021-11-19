import React from 'react'
import loadingIconfrom from '../../../assets/loading.svg'

type propsType = {

}

export const Preloader: React.FC<propsType> = () => {
    return <img src={loadingIconfrom} alt="preloader" />
}