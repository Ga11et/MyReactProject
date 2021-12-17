import './App.css';
import HeaderContainer from './things/header/headerContainer'
import NavContainer from './things/nav/navContainer'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import React, { useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppRedThunks } from './redux/appReducer';
import { Preloader } from './things/component/preloader/preloader';
import { withSuspense } from './hoc/withSuspense';
const Dialog = React.lazy(() => import('./things/dialogs/dialogs'));
const FindPeople = React.lazy(() => import('./things/findpeople/findpeople'));
const Content = React.lazy(() => import('./things/content/content'));
const Login = React.lazy(() => import('./things/login/login'));
const News = React.lazy(() => import('./things/news/news'));
const Music = React.lazy(() => import('./things/music/music'));
const Settings = React.lazy(() => import('./things/settings/settings'));


const App = ({ initialiasationSuccess, ...props }) => {

  useMemo(() => {
    initialiasationSuccess()
  }, [initialiasationSuccess])


  if (!props.isAuth) return <Preloader />
  else return <>
    <HeaderContainer />
    <div className='main'>
      <NavContainer />
      <Switch>
        <Redirect exact from='/' to='/profile' />
        <Route path='/profile/:userId?' render={withSuspense(Content)} />
        <Route path='/dialogs' render={withSuspense(Dialog)} />
        <Route path='/news' render={withSuspense(News)} />
        <Route path='/music' render={withSuspense(Music)} />
        <Route path='/find' render={withSuspense(FindPeople)} />
        <Route path='/settings' render={withSuspense(Settings)} />
        <Route path='/login' render={withSuspense(Login)} />
      </Switch>
    </div>
     </> 
}


const mapStateToProps = (state) => ({
  isAuth: state.app.initialised
})
const mapDespatchToProps = {
  initialiasationSuccess: AppRedThunks.initialiasationSuccess
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDespatchToProps)
)(App)