import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Step1 from './Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'




const Result = () => <>RESULT</>


function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Step1}/>
                    <Route path='/step2' component={Step2}/>
                    <Route path='/step3' component={Step3}/>
                    <Route path='/result' component={Result}/>

                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App
