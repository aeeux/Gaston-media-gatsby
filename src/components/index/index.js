import React from 'react'
import { motion } from "framer-motion"

const index = () => {

    return (
        <div>
                <motion.div
       animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 20, 20, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}>
            <h1 className="heading">Creative</h1>
            <h1 className="heading-a">Agency</h1>
            </motion.div>
        </div>
    )
}

export default index
