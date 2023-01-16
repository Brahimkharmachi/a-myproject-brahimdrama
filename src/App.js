import React, { useContext } from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Header } from './components/Headers/header'
import { Homepage } from './components/Pages/Homes/home'
import { Serie } from './components/Pages/Series/serie'
import { Copadams } from './components/Pages/Series/CardSerie/CopAdam/copadamm'
import { CopadamEpisodes } from './components/Pages/Series/CardSerie/CopAdam/CopadamEpisode/CopadamEpisodes'
import { Diriiliss } from './components/Pages/Series/CardSerie/Dirilis/Diriilis'
import { DrirlisEpisode1, DrirlisEpisode2, DrirlisEpisode3, DrirlisEpisode4, DrirlisEpisode5, DrirlisEpisode6, DrirlisEpisode7, DrirlisEpisode8 } from './components/Pages/Series/CardSerie/Dirilis/DirilisEpisode/Dirlisepisodesss'
import { Kuruluss } from './components/Pages/Series/CardSerie/Kurulus/Kurulus'
import { KurulusEpisode1, KurulusEpisode2, KurulusEpisode3, KurulusEpisode4 } from './components/Pages/Series/CardSerie/Kurulus/EpisodeKurulus/EpisodesKurulus'
import { Moviess } from './components/Pages/Movies/movies'
import { Fastandfes } from './components/Pages/Movies/CardMovie/FastandF/fastandfs'
import { Thehangover1 } from './components/Pages/Movies/CardMovie/Thehangover/hangover'
import { Thespy } from './components/Pages/Movies/CardMovie/Thespynext/thespy'
import { Badblood } from './components/Pages/Movies/CardMovie/Badblood/badbloods'
import { Thesimps } from './components/Pages/Series/CardSerie/Thesimps/Thesimps'
import { Thesimps1 } from './components/Pages/Series/CardSerie/Thesimps/EpisodeThesimps/episodethesimps'
import { Thesimpssmovie } from './components/Pages/Movies/CardMovie/Thesimpsmovie/thesimpsmovies'
import Login from './components/login/logins'
import { AuthContext, AuthProvider } from './AuthContext'
import Footers from './components/Footers/footer'
import BgColorExample from './components/Pages/Articles/article'


const App = () => {

  const authContext = useContext(AuthContext)

  return (
    
      <Router>
        <Header />
        {authContext.auth.email ?
        <Switch>
        <Route exact path="/">
            <Homepage />
          </Route>
          
         
          <Route path='/series' component={Serie} />
          <Route path='/copadam' component={Copadams} />
          <Route path='/copadam1' component={CopadamEpisodes} />
          
          
          <Route path='/dirilis' component={Diriiliss} />
          <Route path='/dirilis1' component={DrirlisEpisode1} />
          <Route path='/dirilis2' component={DrirlisEpisode2} /> 
          <Route path='/dirilis3' component={DrirlisEpisode3} /> 
          <Route path='/dirilis4' component={DrirlisEpisode4} /> 
          <Route path='/dirilis5' component={DrirlisEpisode5} /> 
          <Route path='/dirilis6' component={DrirlisEpisode6} /> 
          <Route path='/dirilis7' component={DrirlisEpisode7} /> 
          <Route path='/dirilis8' component={DrirlisEpisode8} />

          <Route path='/kurulus' component={Kuruluss} /> 
          <Route path='/kurulus1' component={KurulusEpisode1} />
          <Route path='/kurulus2' component={KurulusEpisode2} />
          <Route path='/kurulus3' component={KurulusEpisode3} />
          <Route path='/kurulus4' component={KurulusEpisode4} />

          <Route path='/thesimps' component={Thesimps} />
          <Route path='/thesimps1' component={Thesimps1} />

          <Route path='/movies' component={Moviess} />
          <Route path='/fastandfs' component={Fastandfes} />
          <Route path='/thehangover' component={Thehangover1} />
          <Route path='/thespy' component={Thespy} />
          <Route path='/badblood' component={Badblood} />
          <Route path='/thesimpsmovie' component={Thesimpssmovie} />

          <Route path='/articles' component={BgColorExample} />

        </Switch>
        : <Login /> }

        <Footers />
        
      </Router>
    
  )
}

function AppWithStore(){
    return (
  <AuthProvider>
    <App />
  </AuthProvider>
    );
}

export default AppWithStore

