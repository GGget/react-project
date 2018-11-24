import React from 'react'
import { NavBar,Icon} from "antd-mobile"
class Header extends React.Component { 
    render(){
        return(
            <>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '.426667rem' }} />,
                <Icon key="1" type="ellipsis" />,
                ]}
            >
            NavBar
            </NavBar>
            </>
        )
    }
}
export default Header