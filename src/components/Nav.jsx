import Heading from './Heading'
import './Nav.scss'

const Nav = (props) => {

    return (
        <div className="Nav">
            <div className="NavContainer">
                <div className="NavTitle">
                    <Heading size={'m'}>{'Blender Logbook'}</Heading>
                </div>
                {/* <div className="NavContent">
                    <Body>{"Nav options"}</Body>
                </div>
                <div className="NavSettings">
                    <Body>{"Language dropdown"}</Body>
                </div> */}
            </div>
        </div>
    )
}

export default Nav