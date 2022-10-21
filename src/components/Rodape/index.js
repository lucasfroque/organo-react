import "./Rodape.css"

export const Rodape = () =>{
    return (
        <footer className="footer">
                <div className="social">
                    <img src="/img/fb.png" alt="facebook"/>
                    <img src="/img/tw.png" alt="twitter"/>
                    <img src="/img/ig.png" alt="instagram"/>
                </div>
                <img src="/img/logo.png" alt="fb" className="logo"/>
                <p>Desenvolvidor por Lucas Fernando</p>
        </footer>
    );
}