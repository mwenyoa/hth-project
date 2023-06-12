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
import AdminWrapper from './components/Auth/AdminWrapper'
import AdminDetails from './components/Auth/adminDetails'
import { useStyles } from './Styles'
import Loading from './components/loading'
import UserDetails from './components/Auth/userDetails';

const CreateOrganization = lazy(() => import('./components/Auth/createOrganization'))
const CreateHistory = lazy(() => import('./components/Auth/createHistory'))
const HistoryList = lazy(() => import('./components/history/historylIst'))
const CreateWorkplace = lazy(() => import('./components/Auth/createWorkplace'))
const WorkplaceList = lazy(() => import('./components/workplace/workplaceList'))
const RegisterUser = lazy(() => import('./components/Auth/registerUser'))


// Admin
const AdminList = AdminWrapper(AdminListing)
const AdminDetail = AdminWrapper(AdminDetails)
const UserDetail = AdminWrapper(UserDetails)


type Props = {}

const App = (props: Props) => {
const classes = useStyles()
  return (
      <>
       <Header />
        <main className={classes.main}>
        <Suspense fallback={<Loading />}>
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
            <Route path='/admins-list' element={<AdminList />} />
             <Route path='/admins-list/:id' element={<AdminDetail />} />
            <Route path='/users-list' element={<UserListing />} />
            <Route path='/users-list/:id' element={<UserDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
        </main>
        <Footer />
      </>
  )
}

export default App