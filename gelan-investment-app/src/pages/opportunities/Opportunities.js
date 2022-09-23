import React from 'react';
import { OpportunitiesInvest, OpportunitiesMain } from '../../containers';
import './opportunities.css';

const Opportunities = () => {
    return ( 
        <div className="opportunities">
            <div className='oppmain'>
                <OpportunitiesMain/>
            </div>
            
            <div className='oppinvest'>
                <OpportunitiesInvest/>
            </div>
        </div>
     );
}
 
export default Opportunities;