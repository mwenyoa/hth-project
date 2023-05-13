import React, { lazy, Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'



const CreateOrganization = lazy(() => import('./components/Organizzation/createOrganization'))


type Props = {}

const App = (props: Props) => {

  return (
      <>
       <Header />
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/create-organization" element={<CreateOrganization />} />
          </Routes>
        </Suspense>
        </main>
        <Footer />
      </>
  )
}

export default App