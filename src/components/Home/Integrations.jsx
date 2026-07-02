import React from 'react'
import Amazon from '../../assets/companyLogos/amazon.png'
import BestBuy from '../../assets/companyLogos/bestbuy.png'
import BirMarket from '../../assets/companyLogos/birmarket.png'
import Ebay from '../../assets/companyLogos/ebay.png'
import Temu from '../../assets/companyLogos/temu.png'
import Trendyol from '../../assets/companyLogos/trendyol.png'
import Walmart from '../../assets/companyLogos/walmart.png'

const Integrations = () => {
  return (
    <div id="integrations" className="flex flex-col items-center justify-center gap-4 py-16 bg-[#F0F1F3] px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-1">INTEGRATIONS</h2>
        <span className="text-md text-slate-500 mb-6">Supported retailers</span>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-items-center max-w-3xl mx-auto">
            <img className="h-12 w-auto object-contain" src={Amazon} alt="Amazon" />
            <img className="h-12 w-auto object-contain" src={BestBuy} alt="BestBuy" />
            <img className="h-12 w-auto object-contain" src={BirMarket} alt="BirMarket" />
            <img className="h-12 w-auto object-contain" src={Ebay} alt="Ebay" />
            <img className="h-12 w-auto object-contain" src={Temu} alt="Temu" />
            <img className="h-12 w-auto object-contain" src={Trendyol} alt="Trendyol" />
            <img className="h-12 w-auto object-contain" src={Walmart} alt="Walmart" />
        </div>
    </div>
  )
}

export default Integrations