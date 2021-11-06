import React from 'react'
import { motion } from "framer-motion"

const index = () => {

    return (
        <div>
                <motion.div
  initial={{ x: "-600px", opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ y: '-300px', opacity: 0 }}
>
            <h1 className="heading">Creative</h1>
            <h1 className="heading-a">Agency</h1>
            </motion.div>
        </div>
    )
}

export default index
