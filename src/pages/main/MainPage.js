import React from 'react'
import { TabBar } from 'antd-mobile';
import Header from '@c/header/Header'
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'blue', height: '80%', textAlign: 'center' }}>
        <span style={{color:'red'}}>{pageText}</span>page
      </div>
    );
  }

  render() {
    return (
      <div>
      <Header/>
      
      <div style={{ position: 'fixed', height: '90%', width: '100%', top: '10%' }}>
        
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '.586667rem',
              height: '.586667rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  .56rem .56rem no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '.586667rem',
              height: '.586667rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  .56rem .56rem no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '.586667rem',
                height: '.586667rem',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  .56rem .56rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '.586667rem',
                height: '.586667rem',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  .56rem .56rem no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
        </div>
        </div>
    );
  }
}

export default MainPage