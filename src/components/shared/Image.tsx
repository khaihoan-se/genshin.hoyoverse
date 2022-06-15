import React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { motion } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
    },
}

interface ImageProps extends NextImageProps {
    containerClassName?: string;
};
const Image: React.FC<ImageProps> = ({ onLoadingComplete, ...props }) => {
    const { containerClassName } = props

    const [ isLoading, setIsLoading ] = React.useState(false)

    const handleLoadingComplete: NextImageProps["onLoadingComplete"] = (
        result
    ) => {
        setIsLoading(true)

        onLoadingComplete?.(result)
    };

    return (
        <motion.div
            initial="hidden"
            variants={variants}
            animate={isLoading ? "visible" : "hidden"}
            className={containerClassName}
        >
            <NextImage onLoadingComplete={handleLoadingComplete} {...props} />
        </motion.div>
    )
}

export default Image