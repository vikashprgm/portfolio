import { motion } from "motion/react"

export function LoadingSpinner() {
    return (
        <div className="container">
            <motion.div
                className="spinner"
                animate={{ transform: "rotate(360deg)" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <style>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #171717;
                }
                .spinner {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: 4px solid #334155;
                    border-top-color: #ff0088;
                    will-change: transform;
                }
            `}</style>
        </div>
    )
}