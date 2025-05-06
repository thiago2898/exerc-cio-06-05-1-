import './styles.css'

export default function BoxAlerta({ children }) {
    return (
        <div className="msg-container">
            <h1>Alerta!</h1>
            {children}
        </div>
    )
}