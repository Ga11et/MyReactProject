import React, { FC, Suspense, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRedThunks } from './redux/appReducer';
import { Preloader } from './things/component/preloader/preloader';
import { Button, Layout, Menu, Row } from 'antd';
import { AppStateType } from './redux/redux-state'
import Link from './things/nav/navlink/navlink';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { DialogsPage } from './things/dialogs/dialogs';
import { MusicPage } from './things/music/music';
import { NewsPage } from './things/news/news';
import { SettingsPage } from './things/settings/settings';
import { LoginInfoInHeader } from './things/header/header';
import vkIcon from './assets/vk_icon.svg'
import { NavLink } from 'react-router-dom';
import { AuthRedThunks } from './redux/authReducer';




// const DialogPage = React.lazy(() => import('./things/dialogs/dialogs'));
const FindPeoplePage = React.lazy(() => import('./things/findpeople/findpeople'));
const ContentPage = React.lazy(() => import('./things/content/content'));
const LoginPage = React.lazy(() => import('./things/login/login'));
const ChatPage = React.lazy(() => import('./things/chat/ChatPage'));
// const NewsPage = React.lazy(() => import('./things/news/news'));
// const MusicPage = React.lazy(() => import('./things/music/music'));
// const SettingsPage = React.lazy(() => import('./things/settings/settings'));



const AppCopy: FC = (props) => {

  const { Header, Content, Footer, Sider } = Layout

  const isAuth = useSelector((state: AppStateType) => state.app.initialised)
  const isLoginned = useSelector((state: AppStateType) => state.auth.isAuth)

  const dispatch = useDispatch()

  useMemo(() => {
    dispatch(AppRedThunks.initialiasationSuccess())
  }, [dispatch])


  if (!isAuth) return <Preloader />
  else return <>
    <Layout style={{ background: '#40a9ff', fontSize: '1.4em' }}>
      <Header style={{ background: '#0050b3', height: '80px' }}>
        <Row justify='space-between' align='middle' style={{ height: '100%' }}>
          <img src={vkIcon} style={{ height: '70px' }} />
          <LoginInfoInHeader />
        </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}  >
        <Layout className="site-layout-background" style={{ padding: '24px 0', background: '#40a9ff' }}>
          <Sider className="site-layout-background" width={250} style={{ background: '#40a9ff' }} >
            <Menu mode="inline" style={{ border: '0px', background: '#91d5ff', height: '300px' }} >
              <Menu.Item key="1" style={{ fontSize: '1.4em', height: '50px' }} >
                <NavLink to="/profile" >Profile</NavLink>
              </Menu.Item>
              <Menu.Item key="2" style={{ fontSize: '1.4em', height: '50px' }} >
                <Link name="All users" to="/find" />
              </Menu.Item>
              <Menu.Item key="3" style={{ fontSize: '1.4em', height: '50px' }} >
                <Link name="Chat" to="/chat" />
              </Menu.Item>
              <Menu.Item key="4" style={{ fontSize: '1.4em', height: '50px' }} >
                <Link name="Chat old page" to="/dialogs" />
              </Menu.Item>
              
            </Menu>
            {isLoginned ? <Button type='primary' danger
              style={{ fontSize: '1em', height: '40px', marginTop: '20px' }}
              htmlType='button'
              onClick={() => dispatch(AuthRedThunks.logout())} >
              LogOut</Button> : null}
          </Sider>
          <Content style={{ padding: '0 0 0 24px', minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Suspense fallback={Preloader}>
              <Switch>
                <Redirect exact from='/' to='/profile' />
                <Route path='/profile/:userId?' render={() => <ContentPage />} />
                <Route path='/dialogs' render={() => <DialogsPage />} />
                <Route path='/news' render={() => <NewsPage />} />
                <Route path='/music' render={() => <MusicPage />} />
                <Route path='/find' render={() => <FindPeoplePage />} />
                <Route path='/settings' render={() => <SettingsPage />} />
                <Route path='/login' render={() => <LoginPage />} />
                <Route path='/chat' render={() => <ChatPage />} />
                <Route path='*' render={() => <div>Nothing</div>} />
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', background: '#0050b3', height: '80px', color: 'white', fontSize: '1em' }}>
        Social Network ©2021 Created by Sivkov Fyodor
      </Footer>
    </Layout>
  </>
}

export default withRouter(AppCopy)