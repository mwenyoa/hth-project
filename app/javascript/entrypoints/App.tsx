import React, { lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import { CircularProgress } from '@material-ui/core'



const CreateOrganization = lazy(() => import('./components/Authorized/createOrganization'))
const CreateHistory = lazy(() => import('./components/Authorized/createHistory'))
const HistoryList = lazy(() => import('./components/history/historylIst'))


type Props = {}

const App = (props: Props) => {

  return (
      <>
       <Header />
        <main>
        <Suspense fallback={<div><CircularProgress /></div>}>
          <Routes>
            <Route path="/create-organization" element={<CreateOrganization />} />
            <Route path="/create-history" element={<CreateHistory />} />
            <Route path='/our-history' element={<HistoryList />} />
          </Routes>
        </Suspense>
        </main>
        <Footer />
      </>
  )
}

export default App