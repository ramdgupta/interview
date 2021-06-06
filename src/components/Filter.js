import React from 'react'
import { filterMenu } from '../data/fitterMenu';

function Filter({filterYear,isActive}){
    return(
        <>
        <section className="shadow filter">
                <h2>Filters</h2>
                <h3>Launch Year</h3>
                    <ul className="badge grid">
                       {
                           filterMenu.map((menu, index)=>{
                               const {year} = menu
                               return <li className={isActive===index ?'active' : ''} data-filter='year' data-value={year} onClick={(e) => { filterYear(e, index)}} key={index}>{year}</li>
                           })
                       }  
                    </ul>
                <h3>Successful Launch</h3>
                <ul className="badge grid">
                    <li className={isActive==='lsTrue' ?'active' : ''} data-filter='launch' data-value={true}  onClick={(e) => { filterYear(e, 'lsTrue')}}>True</li>
                    <li className={isActive==='lsFalse' ?'active' : ''} data-filter='launch' data-value={false} onClick={(e) => { filterYear(e, 'lsFalse')}}>False</li>
                </ul>
                <h3>Successful Landing</h3>
                <ul className="badge grid">
                    <li className={isActive==='slTrue' ?'active' : ''} data-filter='land' data-value={true}   onClick={(e) => { filterYear(e, 'slTrue')}}>True</li>
                    <li className={isActive==='slFalse' ?'active' : ''} data-filter='land' data-value={false}  onClick={(e) => { filterYear(e, 'slFalse')}}>False</li>
                </ul>
            </section>
    </>
    )
}
export default Filter;