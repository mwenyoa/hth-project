import React, { lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import { CircularProgress } from '@material-ui/core'
import Login from './components/Auth/Login'
import PageNotFound from './components/pageNotFound'
import SplashScreen from './components/Home/splashScreen'
import RegisterAdmin from './components/Auth/registerAdmin'
import Confirmed from './components/Auth/confirmed'
import AdminListing from './components/Auth/listAdmin'
import UserListing from './components/Auth/userListing'
import AdminWrapper from './components/Auth/AdminWrapper';




const CreateOrganization = lazy(() => import('./components/Auth/createOrganization'))
const CreateHistory = lazy(() => import('./components/Auth/createHistory'))
const HistoryList = lazy(() => import('./components/history/historylIst'))
const CreateWorkplace = lazy(() => import('./components/Auth/createWorkplace'))
const WorkplaceList = lazy(() => import('./components/workplace/workplaceList'))
const RegisterUser = lazy(() => import('./components/Auth/registerUser'))

const Admins = AdminWrapper(AdminListing)


type Props = {}

const App = (props: Props) => {

  return (
      <>
       <Header />
        <main>
        <Suspense fallback={<CircularProgress  />}>
          <Routes>
            <Route path='/' element={<SplashScreen />} />
            <Route path='/our-history' element={<HistoryList />} />
            <Route path='/workplace-list' element={<WorkplaceList />} />
            <Route path='/member-registration' element={<RegisterUser />} />
            {/* Authenticated*/}
            <Route path="/create-organization" element={<CreateOrganization />} />
            <Route path="/create-history" element={<CreateHistory />} />
            <Route path='/create-workplace' element={<CreateWorkplace />} />
            <Route path='/account-confirmation' element={<Confirmed />} />
            <Route path='/register' element={<RegisterAdmin />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/admins-list' element={<Admins />} />
            <Route path='/users-list' element={<UserListing />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
        </main>
        <Footer />
      </>
  )
}

export default App