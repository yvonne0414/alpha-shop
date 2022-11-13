import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg' 
import {ReactComponent as FB} from '../../assets/icons/facebook.svg' 
import {ReactComponent as IG} from '../../assets/icons/instagram.svg' 
import {ReactComponent as WhatsApp} from '../../assets/icons/whatsapp.svg' 
const Footer = () => {
  return (<footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <div className="icon-logo">
            <Logo/>
          </div>
        </div>
        <section className="footer-section">
          <h2 className="section-title">客戶服務</h2>
          <div className="section-content">
            <Link className="page-link" to="#">運送說明</Link>
            <Link className="page-link" to="#">退換貨相關</Link>
            <Link className="page-link" to="#">付款資訊</Link>
            <Link className="page-link" to="#">FAQ</Link>
          </div>
        </section>
        <section className="footer-section">
          <h2 className="section-title">關於我們</h2>
          <div className="section-content">
            <Link className="page-link" to="#">品牌故事</Link>
            <Link className="page-link" to="#">媒體聯繫</Link>
            <Link className="page-link" to="#">Press kit</Link>
          </div>
        </section>
        <section className="footer-section">
          <h2 className="section-title">資訊</h2>
          <div className="section-content">
            <Link className="page-link" to="#">隱私權政策</Link>
            <Link className="page-link" to="#">Cookie</Link>
            <Link className="page-link" to="#">GDPR</Link>
          </div>
        </section>
        <section className="footer-section">
          <h2 className="section-title">追蹤 ALPHA Shop</h2>
          <div className="section-content">
            <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <span className="social-icon cursor-point">
                <FB/>
              </span>
              <span className="social-icon cursor-point">
                <IG/>
              </span>
              <span className="social-icon cursor-point">
                <WhatsApp/>
              </span>
            </div>
          </div>
        </section>
      </div>
    </footer>)
}
export default  Footer;