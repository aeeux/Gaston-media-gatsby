import { Link } from "gatsby"
import React, { useEffect } from "react"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"

const Header = ({ menuState, setMenuState, setCursorHovered }) => {
  const location = useLocation()
  useEffect(() => {
    setMenuState(false)
  }, [location])
  return (
    <header>
                      <motion.div
  initial={{ x: "-600px", opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ y: '-300px', opacity: 0 }}
>
      <div className="container fluid" id="home">
        <div className="header-inner">
          <Link className="logo" activeClassName="active" to="/">
            Gaston Media
          </Link>
          <div
            onClick={() => setMenuState(!menuState)}
            className="hamburger-menu"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <h2 className="menu">MENU</h2>
          </div>
        </div>
      </div>
      </motion.div>
    </header>
  )
}

export default Header
