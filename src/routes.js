import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './screens/Login/LoginScreen';
import SignupScreen from './screens/SignUp/SignupScreen';
import ShopScreen from './screens/Shop/ShopScreen';
import ProductDetailScreen from './screens/Product/ProductScreen';
import FormAchatScreen from './screens/Formachat/FormAchatScreen';
import PaiementScreen from './screens/Paiement/PaiementScreen';
import ConsultClaimScreen from './screens/ConsultClaims/ConsultClaimScreen';
import HomeScreen from './screens/Home/HomeScreen';
import PrivateRoute from './privateRoute/PrivateRoute';
import Claims from './screens/claims/Claims';
import AddClaimFormScreen from './screens/AddClaim/AddClaimFormScreen';
import Repair from './screens/RepairWorkshop/Repair';
import SignupScreenInsuranceScreen from "./screens/SignUpinsurance/SignupScreeninsurance"
import Claimslist from "./screens/listofclaims/Claim"
import LoginScreenInsurance from './screens/Logininsurance/LoginScreen';
import ConsultClaiminsuranceScreen from './screens/ConsultClaimsInsurance/ConsultClaimInsuranceScreen';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/SignupScreenInsurance" element={<SignupScreenInsuranceScreen />} />
      <Route path="/LoginScreenInsurance" element={<LoginScreenInsurance />} />

      <Route path="app" element={
        <PrivateRoute>
          <ShopScreen />
        </PrivateRoute>
      } />
      
      <Route path="app/product/:id" element={
        <PrivateRoute>
          <ProductDetailScreen />
        </PrivateRoute>
      } />
      
      <Route path="/formachat/:id" element={
        <PrivateRoute>
          <FormAchatScreen />
        </PrivateRoute>
      } />
      
      <Route path="/app/product/:id/app/paiement" element={
        <PrivateRoute>
          <PaiementScreen />
        </PrivateRoute>
      } />
      
      <Route path="/claims" element={
        <PrivateRoute>
          <Claims />
        </PrivateRoute>
      } />
       <Route path="/Claimslist" element={
        <PrivateRoute>
          <Claimslist />
        </PrivateRoute>
      } />

<Route path="/Repair" element={
        <PrivateRoute>
          <Repair />
        </PrivateRoute>
      } />
      
      <Route path="/consultclaim/:id/:contractid" element={
        <PrivateRoute>
          <ConsultClaimScreen />
        </PrivateRoute>
      } />
      <Route path="/addclaim/:id/:contractid" element={
        <PrivateRoute>
          <AddClaimFormScreen />
        </PrivateRoute>
      } />
      
      <Route path="/ConsultClaiminsuranceScreen/:id" element={
        <PrivateRoute>
          <ConsultClaiminsuranceScreen />
        </PrivateRoute>
      } />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Router;
