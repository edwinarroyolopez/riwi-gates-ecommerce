import { FC } from "react";
import "./styles/footerBottom.sass"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer: FC = () => {
    return (
        <div className="MainContainer">
            <div className="TopPart">
                <div>
                    <h2>Necesitas ayuda?</h2>
                    <p>Iniciar Chat</p>
                    <p>Contactanos</p>
                </div>
                <div>
                    <h2>Te puede interesar </h2>
                    <p>Promociones</p>
                    <p>Jeans</p>
                    <p>Camisas</p>
                    <p>tops</p>
                </div>
                <div className="socialMedia">
                    <FaFacebook size={30}/>
                    <FaInstagramSquare size={30} />
                    <AiFillTikTok  size={30}/>
                </div>
            </div>
            <div className="BottomPart">
                <div className="HeaderFooter">
                    <ul className="Politics">
                        <li>Terminos y condiciones de compra</li>
                        <li>Terminos y condiciones de Riwi-Ecommerce</li>
                        <li>Politica y Privacidad</li>
                    </ul>
                    <div className="PartBelow">
                        <h3>Colombia | Español</h3>
                        <h4>&copy; RIWI 2024</h4>
                    </div>
                </div>
                <ul>
                    <li>Politica de cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;