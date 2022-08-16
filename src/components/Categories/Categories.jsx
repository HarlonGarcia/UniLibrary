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
    { icon: <SiAtom size={'3rem'} />,
    label: 'Física' },
    { icon: <BiBrain size={'3rem'}/>,
    label: 'Psicologia' },
    { icon: <VscLaw size={'3rem'}/>,
    label: 'Direito' },
    { icon: <IoBuildOutline size={'3rem'} />,
    label: 'Engenharia' },
    { icon: <TbDental size={'3rem'}/>,
    label: 'Odontologia' },
    { icon: <MdOutlineSportsBasketball size={'3rem'}/>,
    label: 'Educação Física' },
    { icon: <DiCodeBadge size={'3rem'}/>,
    label: 'Sistemas de Informação' },
    { icon: <IoGameControllerOutline size={'3rem'}/>,
    label: 'Jogos Digitais' },
    { icon: <IoNutritionOutline size={'3rem'}/>,
    label: 'Nutrição' },
    { icon: <MdOutlineMedicalServices size={'3rem'}/>,
    label: 'Medicina' },
    { icon: <GiChemicalDrop size={'3rem'}/>,
    label: 'Química' },
    { icon: <MdPets size={'3rem'}/>,
    label: 'Medicina Veterinária' }];

const Categories = () => {
  return (
    <div className='categories_container'>
        <h2>Principais categorias</h2>
        <div className='categories'>
            {icons.map(({icon, label}, index) => <CategoryCard key={index} label={label} icon={icon}/>)}
        </div>
    </div>
  )
}

export default Categories;