import './App.css'
import { Link, Routes, Route } from "react-router-dom";
import Product from './Components/Product';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Bats from './Pages/Bats';
import Services from './Components/Services';
import Balls from './Pages/Balls';
import Pads from './Pages/Pads';
import Gloves from './Pages/Gloves';
import KitBags from './Pages/KitBags';
import Guards from './Pages/Guards';
import Clothing from './Pages/Clothing';
import Accessories from './Pages/Accessories';
import Login from './Register/logIn';
import Register from './Register/signUp';
import AboutUs from './SubComponent/AboutUs';
import Careers from './SubComponent/Career';
import ContactUs from './SubComponent/ContactUs';
import FAQs from './SubComponent/FAQs';
import MyAccount from './SubComponent/MyAccount';
import OffersDiscounts from './SubComponent/Offers';
import TrackOrder from './SubComponent/Ordertracking';
import PrivacyPolicy from './SubComponent/PrivacyPolicy';
import ReturnRefundPolicy from './SubComponent/ReturnPolicy';
import ShippingInfo from './SubComponent/ShippingInfo';
import SizeGuide from './SubComponent/SizeGuide';
import Terms from './SubComponent/Terms';
import WarrantyClaims from './SubComponent/Warranty';
import Wishlist from './SubComponent/Wishlist'
import FeaturedAth from './Components/FeaturedAth';
import { CartProvider } from "./context/CartContext";
import Cart from './Components/Cart';
import SubHeader from './context/SubHeader';
import ScoopTennis from './SinglePages/TennisBats/ScoopTennis';
import BlackMamba from './SinglePages/TennisBats/BlackMamba';
import AK47Tennis from './SinglePages/TennisBats/AK47Tennis';
import SingleBlade from './SinglePages/TennisBats/SingleBlade';
import DoubleBlade from './SinglePages/TennisBats/DoubleBlade';
import KWBat from './SinglePages/LeatherBats/KWBat';
import RK06 from './SinglePages/LeatherBats/RK06';
import KB26Bat from './SinglePages/LeatherBats/KB26Bat';
import BB20 from './SinglePages/LeatherBats/BB20';
import MS19 from './SinglePages/LeatherBats/MS19';
import SS25 from './SinglePages/LeatherBats/SS25';
import RJ14 from './SinglePages/LeatherBats/RJ14';
import ClubRed from './SinglePages/AllBalls/ClubRed';
import TestRed from './SinglePages/AllBalls/TestRed';
import SuperTest from './SinglePages/AllBalls/SuperTest';
import CountyRed from './SinglePages/AllBalls/CountyRed';
import ClubWhite from './SinglePages/AllBalls/ClubWhite';
import TestWhite from './SinglePages/AllBalls/TestWhite';
import SuperTestWhite from './SinglePages/AllBalls/SuperTestWhite';
import CountyWhite from './SinglePages/AllBalls/CountyWhite';
import TestWhitePad from './SinglePages/BattingPads/TestWhitePad';
import PlayerEdWhite from './SinglePages/BattingPads/PlayerEdWhite';
import PlayerEdBlue from './SinglePages/BattingPads/PlayerEdBlue';
import LimitedEdWhite from './SinglePages/BattingPads/LimitedEdWhite';
import LimitedEdBlue from './SinglePages/BattingPads/LimitedEdBlue';
import ColorRBYpads from './SinglePages/BattingPads/ColorRBYpads';
import MouldedPads from './SinglePages/BattingPads/MouldedPads';
import ElitePads from './SinglePages/BattingPads/ElitePads';
import EliteEdGloves from './SinglePages/AllGloves/EliteEdGloves';
import VkEdBRO from './SinglePages/AllGloves/VkEdBRO';
import WCedition from './SinglePages/AllGloves/WCedition';
import YuviEdition from './SinglePages/AllGloves/YuviEdition'
import TestEdRBY from './SinglePages/AllGloves/TestEdRBY';
import LimitedEdition from './SinglePages/AllGloves/LimitedEdition';
import TestWhiteEd from './SinglePages/AllGloves/TestWhiteEd';
import DarkEdition from './SinglePages/AllGloves/DarkEdition';
import ComboGloves from './SinglePages/AllGloves/ComboGloves';
import ComboKitbag from './SinglePages/Kitbags/ComboKitbag';
import DuffelKitbag from './SinglePages/Kitbags/DuffelKitbag';
import MiniBagWheel from './SinglePages/Kitbags/MiniBagWheel';
import EliteBag from './SinglePages/Kitbags/EliteBag';
import SuperSelectbag from './SinglePages/Kitbags/SuperSelectbag';
import LimitedEdBag from './SinglePages/Kitbags/LimitedEdBag';
import EliteEdGuard from './SinglePages/AllGuards/EliteEdGuard';
import ProEdGuard from './SinglePages/AllGuards/ProEdGuard';
import PremiumEdition from './SinglePages/AllGuards/PremiumEdition';
import ComboThighPad from './SinglePages/AllGuards/ComboThighPad';
import AllGuardCombo from './SinglePages/AllGuards/AllGuardCombo';
import BBChestGuard from './SinglePages/AllGuards/BBChestGuard';
import BBElbowGuard from './SinglePages/AllGuards/BBElbowGuard';


function App() {
 
  return (

    <>  

    <CartProvider>
<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
       <Route path="/products" element={<Product />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/checkout" element={<Cart/>}/>
        <Route path="/products/bats" element={<Bats/>}/>
        <Route path="/products/balls" element={<Balls/>}/> 
        <Route path="/products/pads" element={<Pads/>}/> 
        <Route path="/products/gloves" element={<Gloves/>}/> 
        <Route path="/products/kitbags" element={<KitBags/>}/> 
        <Route path="/products/guards" element={<Guards/>}/> 
        <Route path="/products/clothing" element={<Clothing/>}/>
        <Route path="/products/accessories" element={<Accessories/>}/> 
        <Route path="/featureAthlete" element={<FeaturedAth/>}/>
      {/* <Route path="/tennisbats" element={<TennisBats/>}/> */}

      {/* routing in bat section */}
      <Route path="/scooptennis" element={<ScoopTennis/>}/>
      <Route path="/blackmamba" element={<BlackMamba/>}/>
      <Route path="/ak47tennis" element={<AK47Tennis/>}/>
      <Route path="/singleblade" element={<SingleBlade/>}/>
      <Route path="doubleblade" element={<DoubleBlade/>}/>
      <Route path="/kwbat" element={<KWBat/>}/>
      <Route path="/rk06" element={<RK06/>}/>
      <Route path="/kb26" element={<KB26Bat/>}/>
      <Route path="/bb20" element={<BB20/>}/>
      <Route path="/ms19" element={<MS19/>}/>
      <Route path="/ss25" element={<SS25/>}/>
      <Route path="/rj14" element={<RJ14/>}/>

      {/* Routing in balls section   */}
      <Route path="/clubRed" element={<ClubRed/>}/>
      <Route path="/testRed" element={<TestRed/>}/>
      <Route path="/superTest" element={<SuperTest/>}/>
      <Route path="/countyRed" element={<CountyRed/>}/>  
      <Route path="/clubWhite" element={<ClubWhite/>}/>
      <Route path="/testWhite" element={<TestWhite/>}/>
      <Route path="/superWhite" element={<SuperTestWhite/>}/>
      <Route path="/countyWhite" element={<CountyWhite/>}/>

      {/* Routing in pads section  */}
      <Route path="/testWhitePad" element={<TestWhitePad/>}/>
      <Route path="/playerEdwhite" element={<PlayerEdWhite/>}/>
      <Route path="/playerEdblue" element={<PlayerEdBlue/>}/>
      <Route path="/limitedEdwhite" element={<LimitedEdWhite/>}/>
      <Route path="/limitedEdblue" element={<LimitedEdBlue/>}/>
      <Route path="/colorRBYpads" element={<ColorRBYpads/>}/>
      <Route path="/mouldedPads" element={<MouldedPads/>}/>
      <Route path="/elitePads" element={<ElitePads/>}/>

      {/* Routing in gloves section  */}
      <Route path="/eliteGloves" element={<EliteEdGloves/>}/>
      <Route path="/vkEdBRO" element={<VkEdBRO/>}/>
      <Route path="/wcedition" element={<WCedition/>}/>
      <Route path="/yuviEdition" element={<YuviEdition/>}/>
      <Route path="/testEdRBY" element={<TestEdRBY/>}/>
      <Route path="/limitedEdition" element={<LimitedEdition/>}/>
      <Route path="/testWhiteEd" element={<TestWhiteEd/>}/>
      <Route path="/darkEdition" element={<DarkEdition/>}/>
      <Route path="/comboGloves" element={<ComboGloves/>}/>

      {/* Routing in kitbags section  */}
      <Route path="combokitbag" element={<ComboKitbag/>}/>
      <Route path="/duffelkitbag" element={<DuffelKitbag/>}/>
      <Route path="/miniBagWheel" element={<MiniBagWheel/>}/>
      <Route path="/elitebags" element={<EliteBag/>}/>
      <Route path="/superSelectBag" element={<SuperSelectbag/>}/>
      <Route path="/limitedEdBag" element={<LimitedEdBag/>}/>

      {/* Routing in guards section   */}
      <Route path="/eliteEdGuard" element={<EliteEdGuard/>}/>
      <Route path="/proEdGuard" element={<ProEdGuard/>}/>
      <Route path="/premiumEdition" element={<PremiumEdition/>}/>
      <Route path="/comboThighpad" element={<ComboThighPad/>}/>
      <Route path="/allGuardcombo" element={<AllGuardCombo/>}/>
      <Route path="/bbChestGuard" element={<BBChestGuard/>}/>
      <Route path="/bbElbowGuard" element={<BBElbowGuard/>}/>






      {/* Sub Header      */}
      {/* for importing in every in every product  */}
      <Route path='/product/SubHeader' element={<SubHeader/>}/>    

        {/* Register Routes */}
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>


        {/* Sub Components of footer */}
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Career" element={<Careers/>}/>
      {/* <Route path="/Cart" element={<Cart1/>}/> */}
      <Route path="/BBS/contactUs" element={<ContactUs/>}/>
      <Route path="/FAQs" element={<FAQs/>}/>
      <Route path="/BBS/MyAccount" element={<MyAccount/>}/>
      <Route path="/Offers" element={<OffersDiscounts/>}/>
      <Route path="/OrderTracking" element={<TrackOrder/>}/>
      <Route path="/Privacy&Policy" element={<PrivacyPolicy/>}/>
      <Route path="/ReturnPolicies" element={<ReturnRefundPolicy/>}/>
      <Route path="/ShippingInfo" element={<ShippingInfo/>}/>
      <Route path="/Guide" element={<SizeGuide/>}/>
      <Route path="/Terms" element={<Terms/>}/>
      <Route path="/Warranty" element={<WarrantyClaims/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>

      <Route/>
       </Routes>
    <Footer/>
    </CartProvider>
    </>
  )
}

export default App
