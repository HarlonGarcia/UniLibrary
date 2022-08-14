import React from 'react'
import CategoryCard from './CategoryCard/CategoryCard';
import './Categories.scss';

import { SiAtom } from 'react-icons/si';
import { VscLaw } from 'react-icons/vsc';
import { MdOutlineMedicalServices, MdOutlineSportsBasketball, MdPets } from 'react-icons/md';
import { DiCodeBadge } from 'react-icons/di';
import { IoGameControllerOutline, IoNutritionOutline, IoBuildOutline } from 'react-icons/io5';
import { BiBrain } from 'react-icons/bi';
import { GiChemicalDrop } from 'react-icons/gi';
import { TbDental } from 'react-icons/tb';

const icons = [
    { icon: <SiAtom size={'3rem'} /> },
    { icon: <BiBrain size={'3rem'}/> },
    { icon: <VscLaw size={'3rem'}/> },
    { icon: <IoBuildOutline size={'3rem'} /> },
    { icon: <TbDental size={'3rem'}/> },
    { icon: <MdOutlineSportsBasketball size={'3rem'}/> },
    { icon: <DiCodeBadge size={'3rem'}/> },
    { icon: <IoGameControllerOutline size={'3rem'}/> },
    { icon: <IoNutritionOutline size={'3rem'}/> },
    { icon: <MdOutlineMedicalServices size={'3rem'}/> },
    { icon: <GiChemicalDrop size={'3rem'}/> },
    { icon: <MdPets size={'3rem'}/> }];

const Categories = () => {
  return (
    <div className='categories_container'>
        <h2>Principais categorias</h2>
        <div className='categories'>
            {icons.map(({icon}, index) => <CategoryCard key={index} icon={icon}/>)}
        </div>
    </div>
  )
}

export default Categories;