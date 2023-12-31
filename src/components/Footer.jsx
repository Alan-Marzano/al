import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaGooglePlusG, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <section id="footer">
                <footer className="text-white text-md-start bg-dark">

                    <div className="container p-4">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <div className="text-uppercase mb-4"><img className="logo" src="logo.jpg" alt="logo del restaurante"></img></div>
                                <p>
                                Lorem ipsum at vero eos et accusamus et justo ducimus qui usamus et iusto ducimus umducimus qui landetos.
                                </p>

                                <div className="mt-4">
                                    <Link type="button" className="btn btn-floating btn-dark btn-color btn-lg" to="/Inicio"><FaFacebookSquare /></Link>
                                    <Link type="button" className="btn btn-floating btn-dark btn-color btn-lg" to="/Inicio"><FaInstagram /></Link>
                                    <Link type="button" className="btn btn-floating btn-dark btn-color btn-lg" to="/Inicio"><FaTwitter /></Link>
                                    <Link type="button" className="btn  btn-dark btn-color btn-lg" to="/Inicio"><FaGooglePlusG /></Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <ul className="fa-ul">
                                    <div>
                                        <ul className="footer-link">
                                            <li>
                                                <Link className="f-link" to="/">Inicio</Link>
                                            </li>
                                            <li>
                                                <Link className="f-link" to="/Nosotros">Nosotros</Link>
                                            </li>
                                            <li>
                                                <Link className="f-link" to="/Menú">Menú</Link>
                                            </li>
                                            <li>
                                                <Link className="f-link" to="/Sucursales">Sucursales</Link>
                                            </li>
                                            <li>
                                                <Link className="f-link" to="/Reservas">Reservas</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <li className="mb-3">
                                        <span className="fa-li"><FaEnvelope /></span><span className="ms-2">info@Alejandro&apos;s.com</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><FaPhoneAlt /></span><span className="ms-2">4123456 / 221 1234567</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><FaPhoneAlt /></span><span className="ms-2">4234567 / 221 2345678</span>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Horarios de atención</h5>

                                <table className="table text-left text-white">
                                    <tbody className="font-weight-normal">
                                        <tr>
                                            <td>Lunes y martes:</td>
                                            <td>19pm - 01am</td>
                                        </tr>
                                        <tr>
                                            <td>Miercoles:</td>
                                            <td>Cerrado</td>
                                        </tr>
                                        <tr>
                                            <td>Jueves y viernes:</td>
                                            <td>19pm - 01am</td>
                                        </tr>

                                        <tr>
                                            <td>Sabado y domingo:</td>
                                            <td>18pm - 01am</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                    <p className="foo">Alejandro&apos;s © 2013-2023 | Todos los derechos reservados | desarrollo Alan Marzano</p>

                </footer>
            </section>
        </div>
    );
}
export default Footer; 