

const LoadingElement = ({ manualStyle }) => {
    const styles = manualStyle || {}

    return <div style={styles} className="loading-icon" />
}

export default LoadingElement